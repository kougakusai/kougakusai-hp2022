import { createContext, ReactNode, useCallback, useState } from 'react';

export const MenuOpenContext = createContext(false);

export const ToggleMenuContext = createContext(() => {});

export const MenuContextProvider = ({ children }: { children: ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenuOpen = useCallback(
    () =>
      setMenuOpen((prev) => {
        console.log('toggleMenuOpen');
        return !prev;
      }),
    [setMenuOpen]
  );

  return (
    <MenuOpenContext.Provider value={menuOpen}>
      <ToggleMenuContext.Provider value={toggleMenuOpen}>
        {children}
      </ToggleMenuContext.Provider>
    </MenuOpenContext.Provider>
  );
};
