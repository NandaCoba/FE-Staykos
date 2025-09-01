import Hero05 from '@/components/hero-05/hero-05'
import Navbar04Page from '@/components/navbar-04/navbar-04'
import Navbar05Page from '@/components/navbar-05/navbar-05'
import NavigationMenuMobile from '@/components/navigation-menu-08'
import React from 'react'

const page = () => {
  return (
    <div className=' h-[2000px]'>
     <div className="hidden md:block">
        <Navbar05Page />
      </div>

      <div>
        <Hero05/>
      </div>


      <div className="block md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md border-t border-gray-200 z-[9999]">
        <NavigationMenuMobile />
      </div>
    </div>
  )
}

export default page