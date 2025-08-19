interface IconProps {
  top?: string
  bottom?: string
  left?: string
  right?: string
  rotation?: string
  color: string
  classNames?: string
}

export default function Corner({
  top,
  bottom,
  left,
  right,
  rotation,
  color,
  classNames,
}: IconProps) {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      className={classNames}
      style={{
        width: '6rem',
        height: '6rem',
        position: 'absolute',
        top,
        bottom,
        left,
        right,
        transform: `rotate(${rotation})`,
        zIndex: 2,
      }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.398926 21H-7.41989e-05L-7.41989e-05 10.101H0.398926C0.398926 15.897 5.10293 20.601 10.8989 20.601V21H0.398926Z"
        fill={color}
      />
    </svg>
  )
}
