'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false)

  return (
    <header className="fixed top-6 left-20 right-20 z-50 bg-black/80 backdrop-blur-md border-[0.5] border-[#7CFF00]/50 rounded-2xl">
      <div className="px-3">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1">
            <Image 
              src="/assets/Logos/logo.png"
              alt="Logo"
              width={150}
              height={40}
              className="h-15 w-auto"
              priority
            />
            <span className="text-white text-xl font-semibold">SpeedWays Group</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors">
                <span>Services</span>
                <svg 
                  className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-lg shadow-xl py-2">
                  <Link href="/services/ethical-hacking" className="block px-4 py-2 text-white hover:bg-gray-800 transition-colors">
                    Ethical Hacking
                  </Link>
                  <Link href="/services/security-testing" className="block px-4 py-2 text-white hover:bg-gray-800 transition-colors">
                    Security Testing
                  </Link>
                  <Link href="/services/consulting" className="block px-4 py-2 text-white hover:bg-gray-800 transition-colors">
                    Consulting
                  </Link>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsIndustriesOpen(true)}
              onMouseLeave={() => setIsIndustriesOpen(false)}
            >
              <button className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors">
                <span>Industries</span>
                <svg 
                  className={`w-4 h-4 transition-transform ${isIndustriesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isIndustriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-lg shadow-xl py-2">
                  <Link href="/industries/finance" className="block px-4 py-2 text-white hover:bg-gray-800 transition-colors">
                    Finance
                  </Link>
                  <Link href="/industries/healthcare" className="block px-4 py-2 text-white hover:bg-gray-800 transition-colors">
                    Healthcare
                  </Link>
                  <Link href="/industries/technology" className="block px-4 py-2 text-white hover:bg-gray-800 transition-colors">
                    Technology
                  </Link>
                </div>
              )}
            </div>

            <Link href="/cases" className="text-white hover:text-gray-300 transition-colors">
              Cases
            </Link>
            <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-white hover:text-gray-300 transition-colors">
              Blog
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            {/* <button className="text-white hover:text-gray-300 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button> */}

            {/* Book a Call Button */}
            <button 
              className="group relative overflow-hidden bg-white text-black font-semibold rounded-xl transition-all duration-300 flex items-center hover:bg-gray-100"
            >
              {/* Icon Box */}
              <div className="bg-gray-200 p-3 rounded-l-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="4" height="4" />
                  <rect x="3" y="10" width="4" height="4" />
                  <rect x="3" y="16" width="4" height="4" />
                  <rect x="10" y="4" width="4" height="4" />
                  <rect x="10" y="10" width="4" height="4" />
                  <rect x="17" y="10" width="4" height="4" />
                </svg>
              </div>
              {/* Text */}
              <span className="px-6 py-3 text-black relative z-10">Book a Call</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
