import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center"
      style={{
        backgroundImage: 'url(/assets/Images/HerooSection/heroSection.webp)'
      }}
    >
      <div className="container mx-auto px-4 flex items-center justify-end">
        <div className="relative w-full max-w-sm md:max-w-md">
          <Image 
            src="/assets/Images/HerooSection/herolock.png"
            alt="Hero Lock"
            width={500}
            height={500}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection