import * as React from "react";
import cx from "clsx";

import {
  AlertIconSuccess,
  AlertIconWarning,
  AlertIconInfo,
  AlertIconError,
} from "./Icons";

const icons = {
  error: AlertIconError,
  info: AlertIconInfo,
  success: AlertIconSuccess,
  warning: AlertIconWarning,
};

type AlertProps = {
  children: React.ReactNode;

  /** Node for heading, usually text */
  heading?: React.ReactNode;

  /** Translates to h1, h2, etc. If not provided, attempts to use headingLevel in context. Lastly, defaults to 2.*/
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;

  headingSize?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

  /** The text size */
  textSize?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

  /** Type of alert. This decides what color/icons to display */
  type?: "error" | "info" | "success" | "warning";

  /** If true, focuses alert when it mounts */
  shouldFocusOnMount?: boolean;
  isUnstyled?: boolean;
  className?: string;
  paddingSize?: string;
};

export function Alert({
  children,
  heading,
  headingLevel = 2,
  headingSize = "sm",
  textSize,
  type = "error",
  shouldFocusOnMount = false,
  isUnstyled = false,
  className,
  paddingSize = "sm",
  ...rest
}: AlertProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (shouldFocusOnMount) {
      timer = setTimeout(() => {
        ref?.current?.focus();
      }, 0);
    }

    return () => clearTimeout(timer);
  }, [shouldFocusOnMount]);

  const Icon = icons[type];
  const Heading = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  return (
    <div
      data-alert
      ref={ref}
      tabIndex={shouldFocusOnMount ? -1 : undefined}
      className={cx("relative rounded-md p-4", {
        "bg-red-100": type === "error",
        "bg-amber-100": type === "warning",
        "bg-purple-100": type === "info",
        "bg-green-100": type === "success",
      })}
      role={type === "error" ? "alert" : undefined}
      {...rest}
    >
      <div className="flex">
        <div className="mr-3 flex-none">
          <Icon
            size="xs"
            role="img"
            aria-label={`${type} icon`}
            className={cx("h-5 w-5 text-red-500", {
              "text-red-500": type === "error",
              "text-amber-500": type === "warning",
              "text-purple-500": type === "info",
              "text-green-500": type === "success",
            })}
          />
        </div>
        <div className="flex-1">
          <Heading className="text-md mb-2 font-medium leading-tight text-slate-800">
            {heading}
          </Heading>
          <div className="text-sm text-slate-700">{children}</div>
        </div>
      </div>
    </div>
  );
}
