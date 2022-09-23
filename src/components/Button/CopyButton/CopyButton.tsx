import clsx from 'clsx';
import { ComponentPropsWithoutRef, useState } from 'react';

const popShowTime = 2; // [s]
const copiedText = 'コピー完了';

const useClipboardLink = (link: string, text?: string) => () =>
  navigator.clipboard.write([
    new ClipboardItem({
      ['text/plain']: new Blob([link], { type: 'text/plain' }),
      ['text/html']: new Blob([`<a href=${link}>${text || link}</a>`], {
        type: 'text/html',
      }),
    }),
  ]);

// const useClipboardText = (text: string) => () =>
//   navigator.clipboard.write([
//     new ClipboardItem({
//       ['text/plain']: new Blob([text], { type: 'text/plain' }),
//     }),
//   ]);

/**
 * @param {String} link copy link
 * @param {String} text display text when hyper link
 */
export const CopyButton = ({
  link,
  text,
  onClick,
  className,
  title,
  ...restProps
}: { link: string; text?: string } & Omit<
  ComponentPropsWithoutRef<'button'>,
  'children'
>) => {
  const LinkToClipboard = useClipboardLink(link, text);
  const handleCopy = () => {
    LinkToClipboard()
      .then(() => {
        setIsPopShow(true);
        setTimeout(() => setIsPopShow(false), popShowTime * 1000);
      })
      .catch(() =>
        console.error('Something went wrong when copy to clipboard.')
      );
  };

  const [isPopShow, setIsPopShow] = useState(false);
  const Popover = () => {
    const css = `
    .popover {
        animation: popShow ${popShowTime}s;
        width: max-content;
        position: absolute;
        top: -0.125rem;
        left: 50%;
        transform: translate(-50%, 0);
        display: hidden;
        user-select: none;
    }

    @keyframes popShow {
        0% {
            transform: translate(-50%, 0);
            opacity: 0;
            display: flex;
        }
        25% {
            transform: translate(-50%, -100%);
            opacity: 1;
        }
        75% {
            transform: translate(-50%, -100%);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, 0);
            opacity: 0;
            display: hidden;
        }
    }
    `;

    return (
      <>
        <style>{css}</style>
        {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
        <div className="popover text-[0.75rem] text-black">{copiedText}</div>
      </>
    );
  };

  return (
    <button
      onClick={(e) => {
        handleCopy();
        onClick && onClick(e);
      }}
      className={clsx('relative inline-flex h-9 w-9', className)}
      title={title || `${text || link}へのリンクをコピー`}
      {...restProps}
    >
      {isPopShow && <Popover />}
      <ClipboardIcon />
    </button>
  );
};

const ClipboardIcon = (
  props: Omit<ComponentPropsWithoutRef<'svg'>, 'viewBox'>
) => (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
    <desc>clipboard icon</desc>
    <rect
      fill="none"
      stroke="black"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      width="8"
      height="12"
      x="5"
      y="3"
    />
    <path
      fill="none"
      stroke="black"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M 10,1 H 3 v 8 0"
    />
  </svg>
);
