/* eslint-disable @typescript-eslint/no-explicit-any */
import { MotionValue, motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

import clsx from 'clsx'
import styles from './Gradient.module.scss'

interface IGradientReveal {
  paragraph: string
  style: string
  align: 'right' | 'center' | 'left'
}

interface IChar {
  children: ReactNode
  progress: MotionValue<number>
  range: any
}

interface IWord {
  word: string
  progress: MotionValue<number>
  charIndex: number
  totalChars: number
  numCharsAffected: number
}

export default function GradientReveal({
  paragraph,
  style,
  align,
}: IGradientReveal) {
  const container = useRef(null)
  
  const lines = paragraph.split('\n')
  const totalChars = paragraph.replace(/\s/g, '').length

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 1', 'end 0.5'],
  })

  const smoothScrollProgress = useSpring(scrollYProgress, {
    damping: 100,
    stiffness: 200,
  })

  const numCharsAffected = Math.min(8, totalChars)

  let currentCharIndex = 0

  return (
    <p
      ref={container}
      className={clsx(styles.paragraph, style, align === 'right' && 'h-end', align === 'center' && 'h-center')}
    >
      {lines.map((line, lineIndex) => {
        const words = line.split(' ')
        const isLastLine = lineIndex === lines.length - 1
        
        return (
          <span key={lineIndex} className={styles.line}>
            {words.map((word, wordIndex) => {
              const charIndex = currentCharIndex
              currentCharIndex += word.length
              
              return (
                <span key={wordIndex} className={styles.word}>
                  <Word
                    word={word}
                    progress={smoothScrollProgress}
                    charIndex={charIndex}
                    totalChars={totalChars}
                    numCharsAffected={numCharsAffected}
                  />
                  {wordIndex < words.length - 1 && (
                    <motion.span className={styles.char}>&nbsp;</motion.span>
                  )}
                </span>
              )
            })}
            {!isLastLine && <br />}
          </span>
        )
      })}
    </p>
  )
}

const Word = ({ word, progress, charIndex, totalChars, numCharsAffected }: IWord) => {
  const chars = Array.from(word)

  return (
    <>
      {chars.map((char, i) => {
        const absoluteCharIndex = charIndex + i
        const start = Math.max((absoluteCharIndex - numCharsAffected / 2) / totalChars, 0)
        const end = Math.min((absoluteCharIndex + numCharsAffected / 2) / totalChars, 1)

        return (
          <Char key={i} progress={progress} range={[start, end]}>
            {char}
          </Char>
        )
      })}
    </>
  )
}

const Char = ({ children, progress, range }: IChar) => {
  const opacity = useTransform(progress, range, [0, 1], { clamp: false })
  const blurValue = useTransform(progress, range, [8, 0], { clamp: true })

  return (
    <motion.span
      className={styles.char}
      style={{
        opacity,
        filter: useTransform(blurValue, (value) => `blur(${value}px)`),
      }}
    >
      {children}
    </motion.span>
  )
}
