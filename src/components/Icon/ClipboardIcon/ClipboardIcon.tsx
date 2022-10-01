import { ComponentPropsWithoutRef } from 'react';

export const ClipboardIcon = (
  props: Omit<ComponentPropsWithoutRef<'svg'>, 'viewBox'>
) => (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
    <desc>clipboard icon</desc>
    <rect
      fill="none"
      stroke="black"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      width="8"
      height="12"
      x="5"
      y="3"
    />
    <path
      fill="none"
      stroke="black"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M 10,1 H 3 v 8 0"
    />
  </svg>
);
