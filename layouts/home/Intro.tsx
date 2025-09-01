import AdSlider from '@/components/carousel-07'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-6 md:px-12 py-10 bg-white">
      {/* Text Section */}
      <div className="max-w-lg text-center md:text-left space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-black">
          Mau cari kos?
        </h1>
        <p className="text-lg text-gray-700">
          Dapatkan infonya dan langsung sewa di{" "}
          <span className="font-semibold">StayKos</span>.
        </p>

        <form className="flex w-full md:w-[420px] mx-auto md:mx-0 rounded-full border border-gray-300 bg-white shadow-md overflow-hidden focus-within:ring-2 focus-within:ring-black">
          <Input
            type="email"
            placeholder="Magic Find Kosan"
            className="w-full border-none shadow-none px-4 py-2 h-16 rounded-full focus:ring-0 focus:outline-none bg-transparent text-base"
            style={{ boxShadow: "none" }}
          />
          <Button
            type="submit"
            className="bg-black text-white rounded-full px-6 w-16 h-16 flex items-center justify-center"
            size="icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
            </svg>
          </Button>
        </form>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-md md:max-w-lg flex justify-center">
        <img className="w-full h-auto object-contain" src="/relax.svg" alt="Relax Illustration" />
      </div>
    </div>
  )
}

export default Intro
