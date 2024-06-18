"use client"

import { onFollow } from '../actions/onFollow'
import React, { useState, useTransition } from 'react'
import { Button } from './ui/button'
import { toast } from 'sonner'
import Loader from './Loader'


const FollowButton = ({ loggedInUser, UserId, isFollowing }) => {
    const [isPending, startTransition] = useTransition(false);
    const [loading, setLoading] = useState(false);
    const onClick = () => {
        setLoading(true);
        startTransition(() => {
            onFollow(UserId)
                .then(data => (toast.success(`You are now following`)))
                .catch(() => toast.error("something went wrong"))
                .finally(setLoading(false))

        })
    }
    return (
        <Button
            disabled={isPending || isFollowing || loggedInUser}
            onClick={onClick}
            variant="custom">
            {
                loading ? <Loader /> :
                    "Follow"
            }
        </Button>
    )
}

export default FollowButton
