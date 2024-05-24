import React, { lazy } from 'react'
import Image from 'next/image'

const LOGO = ({width , height , src}) => {
    return (
        <div className='flex flex-col items-center'>
            <div className='bg-[#915EFF] rounded-full p-2'>
                <Image
                    src={src}
                    alt='logo-img'
                    width={width}
                    height={height}
                />
                </div>
        </div>
    )
}

export default LOGO
