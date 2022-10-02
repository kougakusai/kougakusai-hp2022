import clsx from 'clsx';
import { Heading } from 'components/Typography';
import { busTimeTable } from 'data/bus';
import { ComponentPropsWithoutRef } from 'react';

export const BusTimeTable = ({
  className,
  ...restProps
}: ComponentPropsWithoutRef<'section'>) => (
  <section
    className={clsx('flex flex-col gap-y-8 bg-white p-4', className)}
    {...restProps}
  >
    <Heading className="text-center">臨時便</Heading>
    <p className="whitespace-pre-wrap">
      こうがく祭当日は、こうがく祭臨時便を増発しています。会場へは、便利な茨城交通バスをご利用ください。
      <strong>茨大前（日立）</strong>
      停留所でお降りください。お帰りの際は茨大前(日立)通過予定時刻をご確認ください。
      <br />
      ※現金または「<strong>でんてつハイカード</strong>
      」でのお支払いが可能です。いばっぴ、その他交通系ICカードは利用できませんのでご注意ください。
    </p>
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(22rem,1fr))] gap-4">
      <li className="flex flex-col gap-y-2">
        <h4 className="text-center text-xl">JR日立駅 発 ▶ JR常陸多賀駅 行</h4>
        <p>
          日立駅中央口（3番のりば） ▶ 多賀駅前
          <br />
          茨大前（日立）へは約10分 片道260円
        </p>
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
        <h4 className="text-center text-xl">JR常陸多賀駅 発 ▶ JR日立駅 行</h4>
        <p>
          多賀駅前（1番のりば） ▶ 日立駅中央口
          <br />
          茨大前（日立）へは約8分 片道220円
        </p>
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
  </section>
);
