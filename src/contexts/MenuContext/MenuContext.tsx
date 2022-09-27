import { createContext, ReactNode, useCallback, useState } from 'react';

export const MenuOpenContext = createContext(false);

export const ToggleMenuContext = createContext(() => {});

export const CloseMenuContext = createContext(() => {});

export const MenuContextProvider = ({ children }: { children: ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenuOpen = useCallback(
    () => setMenuOpen((prev) => !prev),
    [setMenuOpen]
  );
  const closeMenuOpen = useCallback(() => setMenuOpen(false), [setMenuOpen]);

  return (
    <MenuOpenContext.Provider value={menuOpen}>
      <ToggleMenuContext.Provider value={toggleMenuOpen}>
        <CloseMenuContext.Provider value={closeMenuOpen}>
          {children}
        </CloseMenuContext.Provider>
      </ToggleMenuContext.Provider>
    </MenuOpenContext.Provider>
  );
};
