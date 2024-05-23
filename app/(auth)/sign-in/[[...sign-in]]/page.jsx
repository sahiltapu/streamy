import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='flex h-fit w-fit items-center justify-center p-2 bg-[#915EFF] rounded-2xl'>
      <SignIn />
    </div>
  )
}

export default SignInPage
