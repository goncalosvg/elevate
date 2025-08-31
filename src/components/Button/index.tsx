import clsx from 'clsx'
import React, { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'primary-small' | 'main' | 'primary-price' | 'link' | 'end' | 'main-graphic' | 'secondary' | 'ghost' | 'glass'
}

export const Button: React.FC<Props> = ({
  children,
  variant = 'primary',
  ...rest
}: Props) => {
  return (
    <>
      <button
        {...rest}
        className={clsx(styles.btn, styles[`${variant}`])}
        data-content={children}
      >
        {children}
      </button>
    </>
  )
}
