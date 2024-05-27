import React from 'react'
import { cn } from '@/lib/utils'

const LiveBadge = ({ className }) => {
    return (
        <div className={cn("bg-red-900 text-center p-0.5 px-1.5 rounded-md uppercase text-[10px] border border-background font-semibold tracking-wide",
            className
        )}>
            Live
        </div>
    )
}

export default LiveBadge
