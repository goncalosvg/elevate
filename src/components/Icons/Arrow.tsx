interface IconProps {
  style: string
  color: string
}

export default function Arrow({ color, style }: IconProps) {
  return (
    <svg
      width="55"
      height="55"
      viewBox="0 0 55 55"
      fill="none"
      className={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M45.7069 11.6752C46.7459 11.3001 47.2841 10.1539 46.909 9.11493C46.5339 8.07599 45.3877 7.5378 44.3487 7.91287L45.7069 11.6752ZM22.0965 14.9411C30.7267 15.7889 36.6084 14.9598 45.7069 11.6752L44.3487 7.91287C35.7372 11.0216 30.4534 11.7428 22.4875 10.9603L22.0965 14.9411Z"
        fill={color}
      />
      <path
        d="M45.0268 9.79423C41.1497 20.0667 40.4687 25.0399 41.8702 32.5301"
        stroke={color}
        strokeWidth="4"
      />
      <path
        d="M9.78857 45.0315C23.5516 31.2684 31.2681 23.552 45.0311 9.78894"
        stroke={color}
        strokeWidth="4"
      />
    </svg>
  )
}
