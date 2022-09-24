import clsx from 'clsx';
import { Popover } from 'components/Popover';
import { useClipboardLink } from 'hooks/useClipboard';
import { ComponentPropsWithoutRef, useState } from 'react';

export const CopyButton = ({
  onClick,
  className,
  ...restProps
}: Omit<ComponentPropsWithoutRef<'button'>, 'children'>) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const LinkToClipboard = useClipboardLink(
    'http://kougakusai.eng.ibaraki.ac.jp/',
    'こうがく祭公式サイト'
  );
  const handleClick = () => {
    LinkToClipboard()
      .then(() => setIsDisabled(false))
      .catch(() => {
        setIsDisabled(true);
        console.error('Something went wrong when copy to clipboard.');
      });
  };

  return (
    <Popover popup="コピー完了" disable={isDisabled}>
      <button
        onClick={(e) => {
          handleClick();
          onClick && onClick(e);
        }}
        className={clsx('relative inline-flex h-9 w-9', className)}
        title="こうがく祭公式サイトへのリンクをコピー"
        {...restProps}
      >
        <ClipboardIcon />
      </button>
    </Popover>
  );
};

const ClipboardIcon = (
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
