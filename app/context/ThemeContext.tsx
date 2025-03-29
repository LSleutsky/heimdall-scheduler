import { createContext, useContext, useEffect, useState } from 'react';
import type { FC, ReactNode } from 'react';

interface ThemeContextType {
  theme: `light` | `dark`;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<`light` | `dark` | null>(null);
  const toggleTheme = () => setTheme(prevTheme => (prevTheme === `dark` ? `light` : `dark`));

  useEffect(() => {
    const storedTheme = localStorage.getItem(`theme`) as `light` | `dark` | null;

    setTheme(storedTheme ?? `light`);
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.toggle(`dark`, theme === `dark`);
      localStorage.setItem(`theme`, theme);
    }
  }, [theme]);

  if (theme === null) return null;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error(`useTheme must be used within a ThemeProvider`);

  return context;
};
