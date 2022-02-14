import { IconProps, sizes } from "./types";

export function AlertIconSuccess({ size = "sm", ...rest }: IconProps) {
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
        strokeWidth={size === "md" ? "2.5" : "3"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 12l-8.25 8.25L10 16.5"
        fill="transparent"
      />
    </svg>
  );
}
