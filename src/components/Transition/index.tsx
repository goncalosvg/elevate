/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react'

import { motion } from 'framer-motion'

import { opacity } from './Animations'

interface ITransition {
  children: ReactNode
}

function Transition({ children }: ITransition) {
  const anim = (variants: any) => {
    return {
      initial: 'initial',
      animate: 'enter',
      exit: 'exit',
      variants,
    }
  }
  return (
    <motion.div {...anim(opacity)}>{children}</motion.div>
  )
}

export default Transition
