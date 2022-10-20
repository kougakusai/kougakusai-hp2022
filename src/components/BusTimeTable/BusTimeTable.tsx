import clsx from 'clsx';
import { Paragraph } from 'components/Typography';
import { busTimeTable } from 'data/bus';
import { ComponentPropsWithoutRef } from 'react';

export const BusTimeTable = ({
  className,
  ...restProps
}: ComponentPropsWithoutRef<'section'>) => (
  <div
    className={clsx(
      'flex flex-col gap-y-8 bg-white font-[Roboto] text-[#18283F]',
      className
    )}
    {...restProps}
  >
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-4">
      <li className="flex flex-col gap-y-2">
        <h3 className="text-center">JR日立駅 発 ▶ JR常陸多賀駅 行</h3>
        <Paragraph>
          日立駅中央口（3番のりば） ▶ 多賀駅前
          <br />
          茨大前（日立）へは約10分 片道260円
        </Paragraph>
        <table className="divide-y divide-double divide-black text-center">
          <thead className="text-sm">
            <tr>
              {busTimeTable.hitachi.head.map((data, index) => (
                <th key={index}>{data}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {busTimeTable.hitachi.body.map((data, index) => (
              <tr className="odd:bg-blue-200 even:bg-blue-50" key={index}>
                {data.map((data, index) => (
                  <td key={index}>{data}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </li>
      <li className="flex flex-col gap-y-2">
        <h3 className="text-center">JR常陸多賀駅 発 ▶ JR日立駅 行</h3>
        <Paragraph>
          多賀駅前（1番のりば） ▶ 日立駅中央口
          <br />
          茨大前（日立）へは約8分 片道220円
        </Paragraph>
        <table className="divide-y divide-double divide-black text-center">
          <thead className="text-sm">
            <tr>
              {busTimeTable.taga.head.map((data, index) => (
                <th key={index}>{data}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {busTimeTable.taga.body.map((data, index) => (
              <tr className="odd:bg-orange-200 even:bg-orange-50" key={index}>
                {data.map((data, index) => (
                  <td key={index}>{data}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </li>
    </ul>
  </div>
);
