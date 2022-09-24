/**
 * @param {String} link copy link
 * @param {String} text display text when hyper link
 */
export const useClipboardLink = (link: string, text?: string) => () =>
  navigator.clipboard.write([
    new ClipboardItem({
      ['text/plain']: new Blob([link], { type: 'text/plain' }),
      ['text/html']: new Blob([`<a href=${link}>${text || link}</a>`], {
        type: 'text/html',
      }),
    }),
  ]);
