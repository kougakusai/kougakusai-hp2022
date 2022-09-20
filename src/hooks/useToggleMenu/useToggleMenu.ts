import { useContext } from 'react';
import { ToggleMenuContext } from 'contexts/MenuContext';

/**
 * useToggleMenu はメニューの開閉状態を切り替える関数を返します
 */
export const useToggleMenu = () => {
  return useContext(ToggleMenuContext);
};
