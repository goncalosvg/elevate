"use client"

import clsx from "clsx"
import { useEffect, useState } from "react"
import styles from "./AnimatedStars.module.scss"

interface Star {
  id: number
  x: number
  y: number
  size: number
  orbitRadius: number
  orbitSpeed: number
  glowDelay: number
  centerX: number
  centerY: number
}

export default function AnimatedStars() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const newStars: Star[] = []
      const starCount = 25

      for (let i = 0; i < starCount; i++) {
        const centerX = Math.random() * 50 + 25
        const centerY = Math.random() * 20 + 10

        newStars.push({
          id: i,
          x: centerX,
          y: centerY,
          size: Math.random() * 3 + 1,
          orbitRadius: Math.random() * 30 + 15,
          orbitSpeed: Math.random() * 20 + 10,
          glowDelay: Math.random() * 8,
          centerX,
          centerY,
        })
      }

      setStars(newStars)
    }

    generateStars()
  }, [])

  return (
    <div className={clsx(styles.container, 'fade-in', 'desktop-only')} data-delay="0.5">
      {stars.map((star) => (
        <div
          key={star.id}
          className={styles.star}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.centerX}%`,
            top: `${star.centerY}%`,
            animation: `
              orbit-${star.id} ${star.orbitSpeed}s linear infinite,
              glow-${star.id} 4s ease-in-out infinite ${star.glowDelay}s
            `,
          }}
        />
      ))}

      <style jsx>{`
        ${stars
          .map(
            (star) => `
          @keyframes orbit-${star.id} {
            from {
              transform: translate(-50%, -50%) rotate(0deg) translateX(${star.orbitRadius}px) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg) translateX(${star.orbitRadius}px) rotate(-360deg);
            }
          }
          
          @keyframes glow-${star.id} {
            0%, 70% {
              box-shadow: 0 0 2px rgba(255, 255, 255, 0.3);
              opacity: 0.6;
            }
            85% {
              box-shadow: 
                0 0 5px rgba(255, 255, 255, 0.8),
                0 0 10px rgba(255, 255, 255, 0.6),
                0 0 15px rgba(255, 255, 255, 0.4);
              opacity: 1;
            }
            100% {
              box-shadow: 0 0 2px rgba(255, 255, 255, 0.3);
              opacity: 0.6;
            }
          }
        `,
          )
          .join("")}
      `}</style>
    </div>
  )
}
