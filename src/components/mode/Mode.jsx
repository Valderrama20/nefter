import { useEffect, useState } from 'react'
import modeDark from '../../assets/moon.png'
import modeLight from '../../assets/sun.png'

export const Mode = () => {
  const initialTheme = window.localStorage.getItem('theme')

  const [theme, setTheme] = useState(initialTheme || 'light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      window.localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      window.localStorage.removeItem('theme')
    }
  }, [theme])

  const handleThemeSwitch = mode => {
    setTheme(mode)
  }
  return (
    <>
      <div
        onClick={() => handleThemeSwitch('light')}
        className={`rounded-full ${
          theme === 'light' ? 'bg-[#6345ED]' : 'bg-[#343444]'
        } w-7 h-7 flexCenter cursor-pointer sm:w-9 sm:h-9`}
      >
        <img src={modeLight} className='w-4 h-4 sm:w-5 sm:h-5' />
      </div>
      <div
        onClick={() => handleThemeSwitch('dark')}
        className={`rounded-full ${
          theme === 'dark' ? 'bg-[#6345ED]' : 'bg-[#343444]'
        } w-7 h-7 flexCenter cursor-pointer sm:w-9 sm:h-9`}
      >
        <img src={modeDark} className='w-3 h-3 sm:w-4 sm:h-4' />
      </div>
    </>
  )
}
