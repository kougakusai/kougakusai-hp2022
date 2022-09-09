import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ComponentPropsWithoutRef, MouseEvent, MouseEventHandler } from 'react';

export const HomeButton = ({
  onClick,
  className,
  title,
  ...restProps
}: ComponentPropsWithoutRef<'button'>) => {
  const router = useRouter();
  return (
    <button
      onClick={(e) => {
        router.push('/');
        onClick && onClick(e);
      }}
      className={clsx('h-[68px] w-[68px]', className)}
      title={title || 'ホーム'}
      {...restProps}
    >
      <Image
        src="/kougakusai_logo.png"
        alt="こうがく祭ロゴ"
        width={68}
        height={68}
      />
    </button>
  );
};
