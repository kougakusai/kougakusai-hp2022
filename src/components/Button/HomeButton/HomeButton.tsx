import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ComponentPropsWithoutRef } from 'react';

export const HomeButton = ({
  onClick,
  className,
  ...restProps
}: Omit<ComponentPropsWithoutRef<'button'>, 'title'>) => {
  const router = useRouter();
  return (
    <button
      onClick={(e) => {
        router.push('/');
        onClick && onClick(e);
      }}
      className={clsx('h-[68px] w-[68px]', className)}
      title="ホーム"
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
