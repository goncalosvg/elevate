import clsx from 'clsx'
import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'

import styles from './TextReveal.module.scss'

interface ITextReveal {
  text?: string
  paragraphs?: string[]
  style?: string
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'li' | 'span'
  delay?: number
  variant?: string
  triggerOnce?: boolean
  threshold?: number
  align?: 'left' | 'center' | 'right'
}

export default function TextReveal({
  type,
  text,
  paragraphs,
  style,
  delay,
  variant = 'words',
  triggerOnce = true,
  threshold = 1,
  align = 'left',
}: ITextReveal) {
  const wordAnimation = {
    initial: {
      transform: 'translateY(16px)',
      opacity: 0, 
      filter: 'blur(10px)',
    },
    enter: (i: number) => ({
      transform: 'translate(0px)',
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        ease: [0.85, 0, 0.15, 1],
        delay: 0.03 * i + (delay || 0),
      },
    }),
  }

  const { ref, inView } = useInView({
    threshold: threshold,
    triggerOnce: triggerOnce,
  })

  const words = text?.split(' ')

  if (variant === 'words') {
    // Handle paragraphs if provided
    if (paragraphs && paragraphs.length > 0) {
      return React.createElement(
        type,
        { 
          ref, 
          className: clsx(
            styles.words, 
            styles[`align-${align}`], 
            style
          ) 
        },
        paragraphs.map((paragraph, paragraphIndex) => (
          <div key={paragraphIndex} className={clsx(styles.paragraphwrap, styles[`align-${align}`])}>
            {paragraph.split(' ').map((word, wordIndex) => (
              <div key={`${paragraphIndex}-${wordIndex}`} className={styles.wordwrap}>
                <motion.div
                  custom={wordIndex}
                  className={styles.word}
                  variants={wordAnimation}
                  initial="initial"
                  animate={inView ? 'enter' : ''}
                  dangerouslySetInnerHTML={{ __html: word }}
                />
              </div>
            ))}
          </div>
        ))
      )
    }

    // Handle single text if provided
    if (text) {
      return React.createElement(
        type,
        { 
          ref, 
          className: clsx(
            styles.words, 
            styles[`align-${align}`], 
            style
          ) 
        },
        words?.map((word, wordIndex) => (
          <div key={wordIndex} className={styles.wordwrap}>
            <motion.div
              key={wordIndex}
              custom={wordIndex}
              className={styles.word}
              variants={wordAnimation}
              initial="initial"
              animate={inView ? 'enter' : ''}
              dangerouslySetInnerHTML={{ __html: word }}
            />
          </div>
        )),
      )
    }
  }
  
  // Default fallback for other variants
  return React.createElement(
    type,
    { 
      ref, 
      className: clsx(
        styles.words, 
        styles[`align-${align}`], 
        style
      ) 
    },
    text
  )
}
