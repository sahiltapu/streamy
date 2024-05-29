"use client"

import { onFollow } from '../actions/onFollow'
import React, { useTransition } from 'react'
import { Button } from './ui/button'
import { toast } from 'sonner'


const FollowButton = ({ loggedInUser, UserId, isFollowing }) => {
    const [isPending, startTransition] = useTransition(false);
    const onClick = () => {
        console.log("here is the button console log XDXDXDXDXDXD")
        console.log(UserId)
        startTransition(() => {
            onFollow(UserId).then((data) => toast.success(`You are now following`)).catch(() => toast.error("something went wrong"))

        })
    }
    return (
        <Button
            disabled={isPending || isFollowing || loggedInUser}
            onClick={onClick}
            variant="custom">
            Follow
        </Button>
    )
}

export default FollowButton
