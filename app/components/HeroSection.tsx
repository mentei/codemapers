'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import * as THREE from 'three'
import Link from 'next/link'
import { LiaArrowRightSolid } from "react-icons/lia";

let NET: any = null
let FOG: any = null

const HeroSection = () => {
  const vantaRef = useRef<HTMLDivElement>(null)
  const [vantaEffect, setVantaEffect] = useState<any>(null)

  useEffect(() => {
    if (!vantaEffect) {
      import('vanta/dist/vanta.net.min').then((VANTA) => {
        NET = VANTA.default
        if (vantaRef.current) {
          const effect = NET({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0xffffff,
            backgroundColor: 0x000000,
          })
          setVantaEffect(effect)
        }
      })
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <section
      ref={vantaRef}
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 overflow-hidden text-white"
    >
      {/* Text Area */}
      <div className="z-10 max-w-xl py-20 text-center md:text-left">
        <h1 className="text-5xl font-bold  m-8 P-4 leading-tight text-white-300">
          TURN  <br />
          YOUR IDEAS 💡 <br />
          TO  ACTION 
        </h1>
        
        

        <button className="mt-8 inline-flex items-center  text-black border border-gray-700 shadow-lg rounded-full px-6 py-3 font-bold capitalize  :hover bg-blue-500  transition">
         <Link href='/login'> get started</Link>
          <LiaArrowRightSolid className='ml-3'/>
        </button>
      </div>

      {/* Image Shape (if needed) */}
      <div className="hidden md:block absolute top-0 right-0 w-full md:w-[60%] h-full z-0">
        <svg viewBox="0 0 800 800" className="w-full h-full">
          <defs>
            <clipPath id="clipPathHero" clipPathUnits="objectBoundingBox">
              <path d="
                M 0.4,0 
                Q 0.5,0 0.6,0 
                C 1,0 1,0 1,0.2 
                V 0.8 
                C 1,1 1,1 0.5,1 
                C 0,1 0,1 0,0.2 
                C 0,0 0,0 0.4,0
              " />
            </clipPath>
          </defs>
          <foreignObject
            width="100%"
            height="100%"
            clipPath="url(#clipPathHero)"
            className="w-full h-full"
          >
            <div className="w-full h-full">
              <Image
                src="/hero-image.jpg"
                alt="City"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
          </foreignObject>
        </svg>
      </div>
    </section>
  )
}

export default HeroSection
