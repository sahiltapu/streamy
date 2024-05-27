import Container from '@/components/Container'
import Navbar from '@/components/navbar/Navbar'
import Sidebar, { SidebarSkeleton } from '@/components/sidebar/Sidebar'

import React, { Suspense } from 'react'

const BrowseLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className='flex h-full pt-20'>
                <Suspense fallback={<SidebarSkeleton />}>
                    <Sidebar />
                </Suspense>
                <Container>
                    {children}
                </Container>
            </div>
        </>
    )
}

export default BrowseLayout
