
import { ProviderProps, createContext, useContext, useEffect, useState } from 'react';

type ThemeContextType = "light" | "dark";

// Create a context for the theme
const ThemeContext = createContext<ThemeContextType>('light');

export function ThemeProvider({ children } : ProviderProps<ThemeContextType>) {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = (chosenTheme) => {
    setTheme(chosenTheme);
    localStorage.setItem('theme', chosenTheme);
    document.documentElement.classList.toggle('dark', chosenTheme === 'dark');
  };

  const respectSystemTheme = () => {
    localStorage.removeItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(systemPrefersDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', systemPrefersDark);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, respectSystemTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
