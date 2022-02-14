import { IconProps, sizes } from "./types";

export function AlertIconError({ size = "sm", ...rest }: IconProps) {
  return (
    // <svg
    //   width={sizes[size]}
    //   height={sizes[size]}
    //   viewBox="0 0 32 32"
    //   xmlns="http://www.w3.org/2000/svg"
    //   {...rest}
    // >
    //   <circle fill="currentColor" cx="15.802" cy="15.802" r="15.802" />
    //   <path
    //     stroke="#FFF"
    //     strokeWidth={size === "md" ? "2.75" : "3.25"}
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     d="M15.802 9.481v7.5M15.802 22.123h.016"
    //   />
    // </svg>

    <svg
      width={sizes[size]}
      height={sizes[size]}
      viewBox="2 2 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
        clipRule="evenodd"
      />
    </svg>
  );
}
