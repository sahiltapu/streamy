import React from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import LiveBadge from './LiveBadge';
import { Skeleton } from './ui/skeleton';
import { useSidebar } from '@/zustand/useSidebar';

const avatarSizes = cva(
    "",
    {
        variants: {
            size: {
                default: "h-8 w-8",
                lg: "h-14 w-14"
            },
        },
        defaultVariants: {
            size: "default",
        },
    },
);

export const UserAvatarSkeleton = ({ size }) => {
    return (
        <Skeleton className={cn(
            "rounded-full",
            avatarSizes({ size })
        )} />
    )
}



const UserAvatar = ({ imageUrl, username, isLive, showBadge, size }) => {
    const canShowBadge = showBadge && isLive;
    const { collapsed } = useSidebar((state) => state)
    return (
        <div className='relative'>
            <Avatar
                className={cn(
                    isLive && "ring-2 ring-red-900 border border-background",
                    avatarSizes({ size })
                )}
            >
                <AvatarImage src={imageUrl} className="object-cover" />
                <AvatarFallback>
                    {username[0]}
                    {username[username.length - 1]}
                </AvatarFallback>
            </Avatar>
            {
                (canShowBadge && collapsed) && (
                    <div className={cn(collapsed && 'absolute -bottom-3 left-1/2 transform -translate-x-1/2')}>
                        <LiveBadge />
                    </div>
                )
            }

        </div>
    )
}

export default UserAvatar
