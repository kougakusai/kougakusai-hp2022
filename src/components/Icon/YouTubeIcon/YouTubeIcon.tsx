import { ComponentPropsWithoutRef } from 'react';

export const YoutubeIcon = (props: ComponentPropsWithoutRef<'svg'>) => (
  <svg
    viewBox="0 0 256 256"
    width="100%"
    height="100%"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <desc>Youtube Icon</desc>
    <defs>
      <clipPath id="clipPath148">
        <path d="m0 192h192v-192h-192z" />
      </clipPath>
    </defs>
    <g transform="matrix(1.3333 0 0 -1.3333 0 256)">
      <g clipPath="url(#clipPath148)">
        <g transform="translate(180.32 138.64)">
          <path
            d="m0 0c-2.024 7.622-7.987 13.624-15.561 15.661-13.724 3.702-68.761 3.702-68.761 3.702s-55.037 0-68.762-3.702c-7.573-2.037-13.537-8.039-15.561-15.661-3.677-13.814-3.677-42.637-3.677-42.637s0-28.822 3.677-42.638c2.024-7.621 7.988-13.623 15.561-15.661 13.725-3.701 68.762-3.701 68.762-3.701s55.037 0 68.761 3.701c7.574 2.038 13.537 8.04 15.561 15.661 3.678 13.816 3.678 42.638 3.678 42.638s0 28.823-3.678 42.637"
            fill="#f00"
          />
        </g>
        <g transform="translate(78 69.831)">
          <path d="m0 0 46 26.168-46 26.17z" fill="#fff" />
        </g>
      </g>
    </g>
  </svg>
);
