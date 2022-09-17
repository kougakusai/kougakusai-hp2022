import { useContext } from 'react';
import { CloseMenuContext } from 'contexts/MenuContext';

/**
 * useCloseMenu はメニューを閉じる関数を返します
 */
export const useCloseMenu = () => {
  return useContext(CloseMenuContext);
};
