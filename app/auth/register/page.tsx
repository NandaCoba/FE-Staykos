import { RegisterLayouts } from '@/layouts/auth/RegisterLayouts'
import React from 'react'

const page = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full h-full grid lg:grid-cols-2">
        <div className="max-w-xl m-auto w-full flex flex-col items-center">
          <RegisterLayouts />
        </div>
        <div className="hidden bg-gradient-to-br bg-black lg:block h-full">
          {/* <img src="/register.jpg" className="w-full h-full object-cover" alt="" /> */}
        </div>
      </div>
    </div>
  )
}

export default page