/* eslint-disable @typescript-eslint/no-explicit-any */
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Lenis from 'lenis'
import { ReactNode, useEffect } from 'react'

interface ISmoothScroll {
  children: ReactNode
}

gsap.registerPlugin(ScrollTrigger)

let lenis: Lenis | null = null // Declare lenis instance outside

export function getLenisInstance() {
  return lenis
}

export default function SmoothScroll({ children }: ISmoothScroll) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      lenis = new Lenis({
        lerp: 0.15,
        smoothWheel: true,
      })

      lenis.on('scroll', () => ScrollTrigger.update())

      const scrollFn = (time: any) => {
        lenis?.raf(time)
        requestAnimationFrame(scrollFn)
      }

      requestAnimationFrame(scrollFn)

      return () => {
        // Cleanup on unmount
        lenis?.destroy()
        lenis = null
      }
    }
  }, [])

  return <>{children}</>
}
