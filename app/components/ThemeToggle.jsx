'use client';
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)')
    .matches ? 'dark' : 'light'
  );

  useEffect(() => {
    theme === 'dark' ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
    }, [theme]);

  return (
    <button 
    className='p-2 bg-gray-800 dark:bg-gray-200 rounded text-xs'
    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      { theme === 'dark' ? '🌞' : '🌙'}
    </button>
  );
}