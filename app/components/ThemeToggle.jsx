'use client';
import { useState, useEffect } from 'react';

export default function ThemeToggle( {isScrolled}) {
  const [theme, setTheme] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)')
    .matches ? 'dark' : 'light'
  );

  useEffect(() => {
    theme === 'dark' ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
    }, [theme]);

  return (
    <button className={`hover:opacity-80 p-1 bg-gray-800 dark:text-black dark:bg-gray-200 text-xs bg-opacity-20 dark:bg-opacity-20 ${!isScrolled ? 'h-11 w-11' : 'h-8 w-8'}`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        { theme === 'dark' ? '🌞' : '🌙'}
    </button>
  );
}