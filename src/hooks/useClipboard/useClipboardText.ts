export const useClipboardText = (text: string) => () =>
  navigator.clipboard.write([
    new ClipboardItem({
      ['text/plain']: new Blob([text], { type: 'text/plain' }),
    }),
  ]);
