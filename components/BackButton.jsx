"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from './ui/button'

import { ChevronLeft } from 'lucide-react';


const BackButton = () => {
    const router = useRouter()
    return (
        <Button
            variant="ghost"
            onClick={() => { router.push("/") }}
            className="hover:bg-inherit pr-9 p-y-4"
        >
            {<ChevronLeft />}
            Back

        </Button>
    )
}

export default BackButton
