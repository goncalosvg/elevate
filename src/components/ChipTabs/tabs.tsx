import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useState } from 'react'
import styles from './Tabs.module.scss'

interface ChipProps {
  text: string
  selected: boolean
  setSelected: (tab: string) => void
  setTab: (tab: string) => void
  layoutId: string
}

interface ChipTabsProps {
  tabs: string[]
  onTabSelect: (tab: string) => void
  layoutId: string
}

const Chip = ({ text, selected, setSelected, setTab, layoutId }: ChipProps) => {
  return (
    <button
      onClick={() => {
        setSelected(text)
        setTab(text)
      }}
      className={clsx(selected && styles.active, styles.tab)}
    >
      <span className={styles.text}>{text}</span>
      {selected && (
        <motion.span
          layoutId={layoutId} // ✅ Use unique layout ID
          transition={{ type: 'spring', duration: 0.5 }}
          className={styles.pill}
        ></motion.span>
      )}
    </button>
  )
}

const ChipTabs = ({ tabs, onTabSelect, layoutId }: ChipTabsProps) => {
  const [selected, setSelected] = useState(tabs[0])

  return (
    <div className={styles.wrap}>
      {tabs.map((tab) => (
        <Chip
          key={tab}
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          setTab={onTabSelect}
          layoutId={layoutId} // ✅ Pass layoutId down
        />
      ))}
    </div>
  )
}

export default ChipTabs
