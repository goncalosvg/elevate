"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

interface AnimatedStatProps {
  content: {
    emoji: string
    text: string
  }[]
}

export default function AnimatedStat({ content }: AnimatedStatProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length)

        setTimeout(() => {
          setIsAnimating(false)
        }, 50)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const currentItem = content[currentIndex]

  return (
      <div className="flex v-center gap-xs">
          <motion.div
            key={`icon-${currentIndex}`}
            className="iconWrap card sm"
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{
              opacity: isAnimating ? 0 : 1,
              filter: isAnimating ? "blur(8px)" : "blur(0px)",
            }}
            transition={{ duration: 0.8 }}
          >
            <Image
              width={70}
              height={70}
              className="icon"
              src={currentItem.emoji || "/placeholder.svg"}
              alt={`Emoji icon for stat: ${currentItem.text}`}
            />
          </motion.div>

        <motion.span
          key={`text-${currentIndex}`}
          className="text"
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{
            opacity: isAnimating ? 0 : 1,
            filter: isAnimating ? "blur(8px)" : "blur(0px)",
          }}
          transition={{ duration: 0.8 }}
        >
          {currentItem.text}
        </motion.span>
      </div>
  )
}
