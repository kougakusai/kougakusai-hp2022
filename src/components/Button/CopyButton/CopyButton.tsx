import clsx from 'clsx';
import { Popover } from 'components/Popover';
import { useClipboardLink } from 'hooks/useClipboard';
import { ComponentPropsWithoutRef, useState } from 'react';
import { ClipboardIcon } from 'components/Icon';

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
