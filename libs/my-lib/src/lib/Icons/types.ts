export interface IconProps extends React.HTMLAttributes<SVGElement> {
  size: "xs" | "sm" | "md";
}

export const sizes = {
  xs: 18,
  sm: 24,
  md: 32,
};
