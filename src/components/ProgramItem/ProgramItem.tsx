import clsx from 'clsx';
import { Heading } from 'components/Typography';
import Image from 'next/image';
import { ComponentPropsWithoutRef } from 'react';

const InsideChip = () => (
  <div
    className="h-6 select-none whitespace-nowrap rounded-full bg-[#DCFCE7] px-3 text-center text-base text-[#16A34A]"
    title="開催場所：屋内"
  >
    屋内
  </div>
);

const StageChip = () => (
  <div
    className="h-6 select-none whitespace-nowrap rounded-full bg-[#DBEAFE] px-3 text-center text-base text-[#1D4ED8]"
    title="開催場所：ステージ"
  >
    ステージ
  </div>
);

export const ProgramItem = ({
  programName,
  groupName,
  place,
  introduction,
  image,
  groupLink,
  twitter,
  instagram,
  className,
  ...restProps
}: {
  programName: string;
  groupName: string;
  place: 'inside' | 'stage';
  introduction: string;
  image?: string;
  groupLink?: string;
  twitter?: string;
  instagram?: string;
} & ComponentPropsWithoutRef<'div'>) => (
  <div
    className={clsx(
      'inline-flex flex-col gap-y-2 rounded-lg bg-white p-4 font-[Roboto] text-[#18283F]',
      className
    )}
    {...restProps}
  >
    <div className="flex justify-between gap-x-2">
      <h3
        className="overflow-hidden text-ellipsis whitespace-nowrap text-base font-bold"
        title={programName}
      >
        {programName}
      </h3>
      {place === 'inside' ? <InsideChip /> : <StageChip />}
    </div>
    {groupLink ? (
      <a
        href={groupLink}
        title={`${groupName}のサイトへ`}
        target="_blank"
        className="underline"
        rel="noreferrer"
      >
        <h4 className="overflow-hidden text-ellipsis whitespace-nowrap">
          {groupName}
        </h4>
      </a>
    ) : (
      <h4 className="overflow-hidden text-ellipsis whitespace-nowrap">
        {groupName}
      </h4>
    )}
    {image && (
      <div className="h-[3.75rem]">
        <Image
          src={image}
          alt={programName}
          width={90}
          height={60}
          layout="fixed"
        />
      </div>
    )}
    <p className="overflow-hidden text-ellipsis">{introduction}</p>
    <div className="flex items-center justify-end gap-x-4">
      {instagram && (
        <a
          href={instagram}
          target="_blank"
          className="inline-flex h-10 w-10 items-center justify-center text-black"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
      )}
      {twitter && (
        <a
          href={twitter}
          target="_blank"
          className="inline-flex h-10 w-10 items-center justify-center text-black"
          rel="noreferrer"
        >
          <TwitterIcon />
        </a>
      )}
    </div>
  </div>
);

const TwitterIcon = (props: ComponentPropsWithoutRef<'svg'>) => (
  <svg
    viewBox="0 0 248 204"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
		C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
		c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
		c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
		c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
		c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
    />
  </svg>
);

const InstagramIcon = (props: ComponentPropsWithoutRef<'svg'>) => (
  <svg
    viewBox="0 0 1000 1000"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"
      transform="translate(-2.5 -2.5)"
    />
  </svg>
);
