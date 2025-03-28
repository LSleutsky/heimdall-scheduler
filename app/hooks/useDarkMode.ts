import { useCallback, useEffect, useState } from 'react';

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== `undefined`) {
      const savedTheme = localStorage.getItem(`theme`);

      if (savedTheme) return savedTheme === `dark`;

      return window.matchMedia(`(prefers-color-scheme: dark)`).matches;
    }

    return false;
  });

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => {
      if (!prev) {
        document.documentElement.classList.add(`dark`);
        localStorage.setItem(`theme`, `dark`);
      } else {
        document.documentElement.classList.remove(`dark`);
        localStorage.setItem(`theme`, `light`);
      }

      return !prev;
    });
  }, []);

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add(`dark`);
    else document.documentElement.classList.remove(`dark`);
  }, [isDarkMode]);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      localStorage.setItem(`theme`, isDarkMode ? `dark` : `light`);
    }
  }, [isDarkMode]);

  console.log(isDarkMode);

  return { isDarkMode, toggleDarkMode };
}
