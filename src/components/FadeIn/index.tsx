'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'

import styles from './FadeIn.module.scss'

interface IFadeIn {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  threshold?: number
  triggerOnce?: boolean
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
  hasBlur?: boolean
}

export default function FadeIn({
  children,
  className,
  delay = 0,
  hasBlur = false,
  duration = 0.6,
  threshold = 0.1,
  triggerOnce = true,
  direction = 'none',
  distance = 50,
}: IFadeIn) {
  const { ref, inView } = useInView({
    threshold: threshold,
    triggerOnce: triggerOnce,
  })

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return { y: distance, opacity: 0, filter: hasBlur ? 'blur(10px)' : 'none' }
      case 'down':
        return { y: -distance, opacity: 0, filter: hasBlur ? 'blur(10px)' : 'none' }
      case 'left':
        return { x: distance, opacity: 0, filter: hasBlur ? 'blur(10px)' : 'none' }
      case 'right':
        return { x: -distance, opacity: 0, filter: hasBlur ? 'blur(10px)' : 'none' }
      case 'none':
      default:
        return { opacity: 0 }
    }
  }

  const getAnimateTransform = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { y: 0, opacity: 1, filter: hasBlur ? 'blur(0px)' : 'none' }
      case 'left':
      case 'right':
        return { x: 0, opacity: 1, filter: hasBlur ? 'blur(0px)' : 'none' }
      case 'none':
      default:
        return { opacity: 1, filter: hasBlur ? 'blur(0px)' : 'none' }
    }
  }

  const animation = {
    initial: getInitialTransform(),
    animate: {
      ...getAnimateTransform(),
      transition: {
        duration: duration,
        ease: [0.85, 0, 0.15, 1],
        delay: delay,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={clsx(styles.fadeIn, className)}
      variants={animation}
      initial="initial"
      animate={inView ? 'animate' : 'initial'}
    >
      {children}
    </motion.div>
  )
} 