import React from 'react'
import Image from 'next/image'

const LOGO = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='bg-[#915EFF] rounded-full p-2'>
                <Image
                    src={"/images/streamy-img.png"}
                    alt='logo-img'
                    width={80}
                    height={80}
                    className='rounded-full'
                />
                </div>
        </div>
    )
}

export default LOGO
