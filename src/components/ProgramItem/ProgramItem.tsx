import clsx from 'clsx';
import Image from 'next/image';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { InstagramIcon, TwitterIcon } from 'components/Icon';

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

const PlaceChip = ({ place }: { place: string }) => (
  <div
    className={clsx(
      'h-6 select-none whitespace-nowrap rounded-full px-3 text-center text-base',
      place === 'ステージ'
        ? 'bg-[#DBEAFE] text-[#1D4ED8]'
        : 'bg-[#DCFCE7] text-[#16A34A]'
    )}
    title={`開催場所：${place}`}
  >
    {place}
  </div>
);

type ProgramData = {
  programName: string;
  groupName: string;
  place: string;
  introduction?: ReactNode;
  image?: string;
  groupLink?: string;
  twitter?: string;
  instagram?: string;
};

export const ProgramItem = ({
  data,
  className,
  ...restProps
}: { data: ProgramData } & ComponentPropsWithoutRef<'div'>) => (
  <div
    className={clsx(
      'inline-flex flex-col gap-y-2 rounded-lg bg-white p-4 font-[Roboto] text-[#18283F]',
      className
    )}
    {...restProps}
  >
    <div className="flex justify-between gap-x-2">
      <h4
        className="overflow-hidden text-ellipsis whitespace-nowrap text-base font-bold"
        title={data.programName}
      >
        {data.programName}
      </h4>
      {/* {place === 'inside' ? <InsideChip /> : <StageChip />} */}
      <PlaceChip place={data.place} />
    </div>
    {data.groupLink ? (
      <a
        href={data.groupLink}
        title={`${data.groupName}のサイトへ`}
        target="_blank"
        className="underline"
        rel="noreferrer"
      >
        <h5 className="overflow-hidden text-ellipsis whitespace-nowrap">
          {data.groupName}
        </h5>
      </a>
    ) : (
      <h5 className="overflow-hidden text-ellipsis whitespace-nowrap">
        {data.groupName}
      </h5>
    )}
    {data.image && (
      <div className="h-[3.75rem]">
        <Image
          src={data.image}
          alt={data.programName}
          width={90}
          height={60}
          layout="fixed"
        />
      </div>
    )}
    <div className="overflow-hidden text-ellipsis whitespace-pre-line">
      {data.introduction}
    </div>

    <div className="flex items-center justify-end gap-x-4">
      {data.instagram && (
        <a
          href={data.instagram}
          target="_blank"
          className="inline-flex h-10 w-10 items-center justify-center text-black"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
      )}
      {data.twitter && (
        <a
          href={data.twitter}
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
