import Image from 'next/image'

import clsx from 'clsx'
import { useState } from 'react'
import { Button } from '../Button'
import styles from './Widget.module.scss'

interface WidgetProps {
  state: boolean
}

export default function Widget({ state }: WidgetProps) {
  const [isActive, setIsActive] = useState(true)

  return (
    <div id={styles.widget} className={clsx(isActive && state && styles.active)}>
      <div className={styles.title}>
        <h2 className={styles.heading}>💰 Do you like the feeling of getting paid?</h2>
        <div className="mgtop-sm">
          <Button variant="dark">Apply now</Button>
        </div>
        <div className={styles.close} onClick={() => setIsActive(false)}>
          <Image
           width={50}
           height={50}
           className={styles.icon}
           src="/cross.svg"
           alt="\0"
          />
        </div>
      </div>
    </div>
  )
}