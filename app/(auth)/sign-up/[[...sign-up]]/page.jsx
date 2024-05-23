import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <div className='flex h-fit w-fit items-center justify-center p-2 bg-[#915EFF] rounded-2xl'>
      <SignUp />
    </div>
  )
}

export default SignUpPage
