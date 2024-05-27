"use client"
import React from 'react'
import { useSidebar } from '@/zustand/useSidebar'
import UserItems, { UserItemsSkeleton } from './sidebar/UserItems';

export const RecommendedSkeleton = () => {
    return (
        <ul className='px-2'>
            {Array.from({ length: 5 }).map((_, i) => (
                <UserItemsSkeleton key={i} />
            ))}
        </ul>
    )
}

const Recommended = ({ data }) => {
    const { collapsed } = useSidebar((state) => state);
    const showLabel = !collapsed && data.length > 0
    return (
        <div>
            {showLabel && (
                <div className='pl-6 mb-4'>
                    <p className='text-sm text-muted-foreground'>
                        Recommended
                    </p>
                </div>
            )}
            <ul className='space-y-2 px-2'>
                {data.map((user) => (
                    <UserItems key={user._id}
                        username={user.username}
                        imageUrl={user.imageUrl}
                        isLive={true}
                    />
                ))}
            </ul>
        </div>
    )
}

export default Recommended
