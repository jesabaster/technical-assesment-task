import { ColoredIconProps } from "../commonTypes";

export const IconArrow = ({ color = 'black' }: ColoredIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg" width="12" height="7" fill="none">
    <path
      fill={color}
      d="M5.47 6.77a.75.75 0 0 0 1.06 0l4.773-4.773a.75.75 0 1 0-1.06-1.06L6 5.178 1.757.936a.75.75 0 0 0-1.06 1.06L5.47 6.77Zm-.22-1.562V6.24h1.5V5.21h-1.5Z" />
  </svg>
);
