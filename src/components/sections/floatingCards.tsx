'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import avtarOne from '@/assets/photo-1599566150163-29194dcaad36.avif'
import avtarTwo from '@/assets/Emily.avif'
import avtarThree from '@/assets/JaneSmith.avif'
import avtarFour from '@/assets/photo-1544725176-7c40e5a71c5e.avif'
export function FloatingCards() {
  useEffect(() => {
    const cards = document.querySelectorAll('.floating-card')
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const centerX = window.innerWidth / 2
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const centerY = window.innerHeight / 2
      
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect()
        const cardCenterX = rect.left + rect.width / 2
        const cardCenterY = rect.top + rect.height / 2
        
        const angleX = (clientY - cardCenterY) / 30
        const angleY = (cardCenterX - clientX) / 30
        
        const element = card as HTMLElement
        element.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Left floating cards */}
      <div className="absolute -left-20 top-1/4 transform -rotate-12">
        <div className="floating-card bg-white rounded-lg shadow-xl p-4 mb-4 w-64 transition-transform duration-200">
          <div className="flex items-center space-x-3">
            <Image
              src={avtarOne}
              alt="User avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <div className="font-semibold text-[#02577a]">John Doe</div>
              <div className="text-sm text-[#02577a]/70">Software Engineer</div>
            </div>
          </div>
        </div>
        <div className="floating-card bg-white rounded-lg shadow-xl p-4 w-64 transform translate-x-12 transition-transform duration-200">
          <div className="flex items-center space-x-3">
            <Image
              src={avtarThree}
              alt="User avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <div className="font-semibold text-[#02577a]">Jane Smith</div>
              <div className="text-sm text-[#02577a]/70">UX Designer</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right floating cards */}
      <div className="absolute -right-20 top-1/3 transform rotate-12">
        <div className="floating-card bg-white rounded-lg shadow-xl p-4 mb-4 w-64 transition-transform duration-200">
          <div className="flex items-center space-x-3">
            <Image
              src={avtarFour}
              alt="User avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <div className="font-semibold text-[#02577a]">Alex Johnson</div>
              <div className="text-sm text-[#02577a]/70">Data Scientist</div>
            </div>
          </div>
        </div>
        <div className="floating-card bg-white rounded-lg shadow-xl p-4 w-64 transform -translate-x-12 transition-transform duration-200">
          <div className="flex items-center space-x-3">
            <Image
              src={avtarTwo}
              alt="User avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <div className="font-semibold text-[#02577a]">Emily Brown</div>
              <div className="text-sm text-[#02577a]/70">Product Manager</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}