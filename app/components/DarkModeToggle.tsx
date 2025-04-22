'use client'
import { useEffect, useState } from 'react'

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkPref = localStorage.getItem('theme') === 'dark'
    if (isDarkPref) {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    }
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    if (html.classList.contains('dark')) {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-sm text-black dark:text-white shadow transition"
    >
      {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
