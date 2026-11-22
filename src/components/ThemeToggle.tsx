'use client';

import React, { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme');
    if (current === 'dark') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    const next: 'light' | 'dark' = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('scd.theme', next);
    } catch {
      // fallback to in-memory
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? '라이트 테마로 전환' : '다크 테마로 전환'}
      className="btn-press inline-flex min-h-10 items-center gap-1.5 rounded-pill border border-line-strong bg-surface px-3.5 py-1.5 text-caption font-semibold text-body transition hover:bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
    >
      <span aria-hidden="true">{theme === 'dark' ? '☀️' : '🌙'}</span>
      <span>{theme === 'dark' ? '라이트' : '다크'}</span>
    </button>
  );
}
