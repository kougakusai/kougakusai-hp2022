import clsx from 'clsx';
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from 'react';

const defaultSpeed = 50; // default speed value [pixel per seconds]
const roundFirstDecimal = (number: number) => Math.round(number * 10) / 10;

export const Marquee = ({
  text,
  direction,
  speed = defaultSpeed,
  className,
  'aria-label': ariaLabel = 'Marquee decoration',
  ...restProps
}: ComponentPropsWithoutRef<'div'> & {
  text: string;
  direction: 'left' | 'right'; // endpoint direction
  speed?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const [containerWidth, setContainerWidth] = useState(0);
  const [textWidth, setTextWidth] = useState(0);

  const [textCount, setTextCount] = useState(1);
  const [flowTime, setFlowTime] = useState(1);

  const [vpWidth, setVpWidth] = useState(0);

  useEffect(() => {
    containerRef.current &&
      setContainerWidth(containerRef?.current.clientWidth);
    textRef.current && setTextWidth(textRef?.current.clientWidth);
    setTextCount(Math.floor(containerWidth / textWidth) + 1);
    setFlowTime(roundFirstDecimal(containerWidth / speed));

    window &&
      window.addEventListener('resize', () => {
        setVpWidth(window.innerWidth);
      });
    return () => {
      window &&
        window.removeEventListener('resize', () => {
          setVpWidth(window.innerWidth);
        });
    };
  }, [
    containerRef,
    textRef,
    containerWidth,
    textWidth,
    textCount,
    vpWidth,
    speed,
  ]);

  const css = `
  .marquee-container {
    overflow: hidden;
    width: 100%;
    display: flex;
    flex: 1 1 auto;
    position: relative;
    white-space: nowrap;
    user-select: none;
  }

  .marquee-text {
    text-align: center;
    vertical-align: middle;

    display: inline-block;
    position: absolute;
    width: auto;
    left: 0;
    right: 0;

    visibility: hidden;
    animation: ${
      direction === 'left' ? 'flowR2L' : 'flowL2R'
    } ${flowTime}s linear infinite;
  }

  @keyframes flowR2L {
    0% {
      transform: translateX(100%);
      visibility: visible;
    }
    100% {
      transform: translateX(-100%);
      visibility: hidden;
    }
  }
  @keyframes flowL2R {
    from {
      transform: translateX(-100%);
      visibility: visible;
    }
    to {
      transform: translateX(100%);
      visibility: hidden;
    }
  }
  `;

  const DummyText = () => (
    <div
      className="w-max text-center align-middle opacity-0"
      aria-hidden
      ref={textRef}
    >
      {text}
    </div>
  );

  return (
    <>
      <style>{css}</style>
      <div
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className={clsx('marquee-container', className)}
        aria-label={ariaLabel}
        ref={containerRef}
        {...restProps}
      >
        <DummyText />
        {new Array(textCount || 1).fill(0).map((_, index) => (
          <div
            // eslint-disable-next-line tailwindcss/no-custom-classname
            className="marquee-text"
            style={{
              animationDelay: `${roundFirstDecimal(
                (index * flowTime) / textCount
              )}s`,
            }}
            aria-hidden
            key={index}
          >
            {text}
          </div>
        ))}
      </div>
    </>
  );
};
