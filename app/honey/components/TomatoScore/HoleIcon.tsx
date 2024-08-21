import { JSX } from "solid-js"

export const HoleIcon = (props: JSX.SVGElementTags["svg"]) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      stroke-dasharray="4,4"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width={2}
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
)
