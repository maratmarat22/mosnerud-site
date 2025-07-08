'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'О нас' },
    { href: '/quarries', label: 'Карьеры' },
    { href: '/price-list', label: 'Прайс-лист' },
    { href: '/contacts', label: 'Контакты' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Логотип */}
        <Link
          href="/"
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          <span className="text-2xl">🪨</span>
          <span className="text-xl font-bold">MosNerud</span>
          <span className="text-gray-300 hidden sm:inline">
            — Песок и Щебень
          </span>
        </Link>

        {/* Иконка бургер-меню на мобильных устройствах */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Навигация — видна только на md+ экранах */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-amber-400 transition-colors px-2 py-1 rounded hover:bg-gray-800"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Мобильное меню — видимо, когда открыто */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700 px-4 py-2 space-y-2">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block text-white hover:text-amber-400 transition-colors px-2 py-2 rounded hover:bg-gray-800"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
