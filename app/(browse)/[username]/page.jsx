import { isFollowingUser } from "../../../services/followService"
import { getUserByUsername } from '@/services/userServces'
import { notFound } from 'next/navigation'
import React from 'react'
import FollowButton from "@/components/FollowButton"
import { getSelf } from "@/services/authService"

const UserPage = async ({ params }) => {
    const user = await getUserByUsername(params.username)
    if (!user) {
        notFound();
    }
    // console.log(user._id)
    const isFollowing = await isFollowingUser(user._id.toString());
    // console.log(isFollowing)
    const loggedInUser = await getSelf() ? true : false;
    // console.log(loggedInUser);
    return (
        <div className='flex flex-col gap-y-4'>
            <p>username: {user.username}</p>
            <p>userId : {String(user._id)}</p>
            <p>userExternalId: {user.externalUserId}</p>
            <p>isFollowing : {`${isFollowing}`}</p>
            <FollowButton
                loggedInUser={!loggedInUser}
                UserId={await user._id.toString()}
                isFollowing={isFollowing}

            />
        </div>
    )
}

export default UserPage
