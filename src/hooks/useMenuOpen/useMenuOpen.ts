import { useContext } from 'react';
import { MenuOpenContext } from 'contexts/MenuContext';

/**
 * useMenuOpen はメニューの開閉状態の state を返します
 */
export const useMenuOpen = () => {
  return useContext(MenuOpenContext);
};
