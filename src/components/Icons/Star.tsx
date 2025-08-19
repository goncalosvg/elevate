interface IconProps {
  color: string
  style: string
}

export default function Star({ color, style }: IconProps) {
  return (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      className={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.1147 8.70835H11.9112L16.2978 4.32173L15.1784 3.20231L10.7917 7.58894V1.38544H9.20841V7.58815L4.82258 3.20231L3.70316 4.32173L8.08979 8.70835H1.8855V10.2917H8.08979L3.70316 14.6783L4.82258 15.7977L9.20841 11.4119V17.6146H10.7917V11.4103L15.1784 15.7969L16.2978 14.6775L11.912 10.2917H18.1147V8.70835Z"
        fill={color}
      />
    </svg>
  )
}
