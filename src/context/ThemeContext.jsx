import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Dark mode state (light/dark)
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      if (saved !== null) {
        return JSON.parse(saved);
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  // Theme mode state (default/hacker)
  const [themeMode, setThemeMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('themeMode');
      return saved || 'default';
    }
    return 'default';
  });

  // Update dark mode class
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Update theme mode class
  useEffect(() => {
    localStorage.setItem('themeMode', themeMode);
    if (themeMode === 'hacker') {
      document.documentElement.classList.add('hacker-theme');
    } else {
      document.documentElement.classList.remove('hacker-theme');
    }
  }, [themeMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const toggleHackerMode = () => {
    setThemeMode(prev => prev === 'hacker' ? 'default' : 'hacker');
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, themeMode, toggleHackerMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};