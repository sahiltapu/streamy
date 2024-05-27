"use client"
import React from 'react'
import { useSidebar } from '@/zustand/useSidebar'
import { Button } from '../ui/button'
import { ChevronsLeft, ChevronsRight } from 'lucide-react';
import { Hint } from '../Hint';
import { Skeleton } from '../ui/skeleton';

const Toggle = () => {
    const { collapsed, onExpand, onCollapse } = useSidebar((state) => state)
    const label = collapsed ? "Expand" : "Collapse";

    return (
        <>
            {collapsed && (
                <div className='hidden lg:flex w-full items-center justify-center pt-4 mb-4'>
                    <Hint
                        label={label}
                        side={"right"}
                        asChild
                    >
                        <Button
                            onClick={onExpand}
                            variant="custom"
                            className="h-auto p-2 rounded-full flex justify-center align-middle items-center"
                        >
                            <ChevronsRight className='object-cover w-7 h-7' />

                        </Button>
                    </Hint>
                </div>
            )}

            {!collapsed && (
                <div className='p-4 pl-6 mb-2 flex items-center w-full transition'>
                    <p className='font-semibold text-primary'>
                        For you
                    </p>
                    <Hint
                        label={label}
                        side={"right"}
                        asChild
                    >
                        <Button
                            onClick={onCollapse}
                            variant="custom"
                            className="p-2 h-auto rounded-full ml-auto">
                            <ChevronsLeft />

                        </Button>
                    </Hint>

                </div>
            )}
        </>
    )
}

export default Toggle

export const ToggleSkeleton = () => {
    return (
        <div className='p-3 pl-6 mb-2 hidden lg:flex items-center justify-between w-full'>
            <Skeleton className={"h-6 w-[100px] bg-slate-900"}/>
            <Skeleton className={"h-6 w-6 bg-slate-900"}/>
        </div>
    )
}