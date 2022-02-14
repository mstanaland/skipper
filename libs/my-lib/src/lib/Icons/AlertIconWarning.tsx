import { IconProps, sizes } from "./types";

export function AlertIconWarning({ size = "sm", ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 28"
      width={sizes[size]}
      height={sizes[size] * 0.875}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M13.381 1.49L.411 23.36a3.12 3.12 0 00-.01 3.079A3.058 3.058 0 003.03 28h25.942a3.058 3.058 0 002.627-1.561 3.12 3.12 0 00-.008-3.08L18.619 1.49A3.056 3.056 0 0016 0c-1.07 0-2.063.565-2.619 1.49z"
        fill="currentColor"
      />
      <path
        stroke="#FFF"
        strokeWidth={size === "md" ? "2.75" : "3.25"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.868 9.311v7M15.868 21.517h.015"
      />
    </svg>
  );
}
