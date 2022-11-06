import clsx from 'clsx';
import { kitchenCarDataType } from 'data/kitchen_car';
import Image from 'next/image';
import { ComponentPropsWithoutRef } from 'react';

export const KitchenCarImg = ({
  data,
  className,
  ...restProps
}: {
  data: kitchenCarDataType;
} & Omit<ComponentPropsWithoutRef<'section'>, 'children'>) => (
  <section
    className={clsx('w-[18.75rem] bg-black p-1', className)}
    {...restProps}
  >
    <h2 className="ml-1 text-start font-[sans-serif] text-xs text-white">
      {data.name}
    </h2>
    <Image src={data.src} alt={data.name} width={292} height={120} />
    <p className="flex items-center justify-around text-center font-[sans-serif] text-[0.5rem] text-white">
      {typeof data.description === 'string'
        ? data.description
        : data.description.map((text) => <span key={text}>{text}</span>)}
    </p>
  </section>
);
