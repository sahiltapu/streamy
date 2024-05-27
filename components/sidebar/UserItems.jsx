"use client"
import React from 'react'
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { useSidebar } from '@/zustand/useSidebar';
import { Skeleton } from '../ui/skeleton';
import Link from 'next/link';
import UserAvatar from '../UserAvatar';
import LiveBadge from '../LiveBadge';

export const UserItemsSkeleton = () => {
    const { collapsed } = useSidebar((state) => state)
    return (
        <li className='flex items-center gap-x-4 px-3 py-2'>
            <Skeleton className={"min-h-[32px] min-w-[32px] rounded-full bg-slate-900"} />
            {
                !collapsed && (
                    < div className='flex-1'>
                        <Skeleton className={"h-6 bg-slate-900"} />
                    </div>
                )
            }

        </li >
    )
}

const UserItems = ({ username, imageUrl, isLive }) => {
    const pathname = usePathname()
    const { collapsed } = useSidebar((state) => state)
    const href = `/${username}`;
    const isActive = pathname === href

    return (
        <Button
            aschild
            variant="ghost"
            className={cn("w-full h-12",
                collapsed ? "justify-center hover:bg-slate-900" : "justify-start hover:bg-slate-900",
                isActive && "bg-slate-900"
            )}
        >
            <Link href={href}>
                <div
                    className={cn("flex items-center w-full gap-x-4 py-5",
                        collapsed && "justify-center"
                    )}
                >
                    <UserAvatar imageUrl={imageUrl} username={username} isLive={isLive} showBadge={isLive} />
                    {
                        !collapsed && (
                            <p className='truncate font-bold'>
                                {username}
                            </p>
                        )
                    }
                    {
                        (!collapsed && isLive) && (
                            <LiveBadge className={"ml-auto"} />
                        )
                    }
                </div>


            </Link>

        </Button>
    )
}

export default UserItems
