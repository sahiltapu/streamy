"use client"

import { cn } from '@/lib/utils'
import { useSidebar } from '@/zustand/useSidebar'
import React, { useState, useEffect } from 'react'
import { ToggleSkeleton } from './Toggle'
import { RecommendedSkeleton } from '../Recommended'
import { useIsClient } from 'usehooks-ts'

const Wrapper = ({ children }) => {
    const isClient = useIsClient()
    const { collapsed } = useSidebar((state) => state);
    
    // Handles the serverSide rendering and remove the flickering of the while loading the website.
    // This is rendered in serverside.
    if (!isClient) return (
        <aside className='fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-[#441456] broder-r border-[#441456] z-50'>
            <ToggleSkeleton />
            <RecommendedSkeleton />

        </aside>
    );

    return (
        <aside className={cn('fixed left-0 flex flex-col w-60 h-full bg-[#441456] broder-r border-[#441456] z-50',
            collapsed && "w-[70px]"

        )}
        >
            {children}
        </aside>
    )
}

export default Wrapper
