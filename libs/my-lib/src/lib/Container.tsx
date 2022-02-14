import * as React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};
export function Container({ children, className }: Props) {
  return (
    <div
      className={`mx-auto px-8 text-slate-800 antialiased ${className} min-w-[64rem] max-w-[128rem]`}
    >
      {children}
    </div>
  );
}
