/**
 * useCountDownはシステムの現在日時から日本時間2022年11月5日までの日数を返します
 * 返り値は必要に応じて0でpaddingされ常に2桁になります
 */
export const useCountDown = () => {
  const msPerDay = 24 * 60 * 60 * 1000;

  const now = Date.now();
  const target = Date.UTC(2022, 10, 5, 15, 0, 0);
  const daysLeft = Math.floor((target - now) / msPerDay);

  const daysLeftStr =
    daysLeft < 0 ? '00' : daysLeft.toString().padStart(2, '0');

  return [daysLeftStr.slice(0, 1), daysLeftStr.slice(1, 2)] as const;
};
