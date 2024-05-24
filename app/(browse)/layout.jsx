import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const BrowseLayout = ({ children }) => {
    return (
        <>
            <div className='h-full pt-20'>
                <Navbar />
                {children}
            </div>
        </>
    )
}

export default BrowseLayout
