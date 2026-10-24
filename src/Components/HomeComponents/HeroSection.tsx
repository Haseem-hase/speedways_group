'use client'

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
      <div className="container mx-auto px-4 flex items-center justify-between gap-8">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Secure your <span className="px-2 rounded" style={{ color: '#7CFF00'}}>digital world.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Ethical hacking, security testing, and smart digital solutions built around trust. 
            We protect your business with cutting-edge cybersecurity strategies, comprehensive 
            vulnerability assessments, and proactive threat detection to keep your data safe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 text-black font-semibold rounded-sm transition-colors duration-300 shadow-lg" style={{ backgroundColor: '#7CFF00' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6AE600'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7CFF00'}>
              Explore Services
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-sm hover:bg-white hover:text-black transition-colors duration-300">
              Talk to Our Team
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full max-w-sm md:max-w-md flex-shrink-0">
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