import { IconProps, sizes } from "./types";

export function AlertIconInfo({ size = "sm", ...rest }: IconProps) {
  return (
    <svg
      width={sizes[size]}
      height={sizes[size]}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle fill="currentColor" cx="15.802" cy="15.802" r="15.802" />
      <path
        stroke="#FFF"
        strokeWidth={size === "md" ? "2.75" : "3.25"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.802 22.123v-6.321M15.802 9.481h.016"
      />
    </svg>
  );
}
