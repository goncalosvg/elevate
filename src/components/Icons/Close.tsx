interface IconProps {
  style: string
  color: string
}

export default function Close({ color, style }: IconProps) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      className={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.843262"
        y="11.4497"
        width="15"
        height="1.5"
        transform="rotate(-45 0.843262 11.4497)"
        fill={color}
      />
      <rect
        x="1.55029"
        y="0.84314"
        width="15"
        height="1.5"
        transform="rotate(45 1.55029 0.84314)"
        fill={color}
      />
    </svg>
  )
}
