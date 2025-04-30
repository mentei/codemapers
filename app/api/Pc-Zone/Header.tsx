'use client'

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          🖥️ PC Store
        </Link>
        <nav className="space-x-4">
          <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            Home
          </Link>
          <Link href="/store" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            Store
          </Link>
          <Link href="/custom" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            Custom PC
          </Link>
        </nav>
      </div>
    </header>
  );
}
