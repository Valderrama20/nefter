import { useState, useContext } from 'react'
import { Navigation } from '../navigation/Navigation'
import logoNeefter from '../../assets/logoNeefter.png'
import logoNeefterLight from '../../assets/logoNeefterLights.png'
import { SearchBar } from '../searchBar/SearchBar'
import { Mode } from '../mode/Mode'
import { AuthContext } from '../../routes/auth/userContext'
import { Link } from 'react-router-dom'
import { routes } from '../../routes/appRouter/helperRoutes'
import { ImageFromAws } from '../imageFromAws/ImageFromAws'
import styles from './index.module.css'
import { useSelector } from 'react-redux'

export const NavBar = () => {
  const [isNavMobile, setNavMobile] = useState(false)
  const [fixedNav, setFixedNav] = useState(0)
  const { user } = useContext(AuthContext)
  const imageAvatar = useSelector(state => state.imageAvatar)
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])

  // const handleScroll = () => {
  //   const startFixed = document.documentElement.scrollTop
  //   setFixedNav(Math.floor(startFixed))
  // }

  return (
    <header
      className={`${
        fixedNav > 148 ? 'fixed top-0' : 'relative'
      } w-full bg-white z-10 h-28 shadow-shadowButtonTopBar dark:bg-navBarBlack`}
    >
      <nav className='flex justify-between h-full w-full m-auto items-center px-2 sm:w-[90%] sm:px-0'>
        <div className='flex items-center'>
          <img
            className='w-[36vw] sm:w-44 hidden dark:block'
            src={logoNeefter}
            alt='logo Neefter'
          />
          <img
            className='w-[36vw] sm:w-[168px] mr-2 dark:hidden'
            src={logoNeefterLight}
            alt='logo Neefter'
          />
          <SearchBar />
        </div>
        <div className='flexCenter gap-2 sm:gap-5'>
          <Navigation isNavMobile={isNavMobile} setNavMobile={setNavMobile} />
          <Mode />
          <Link to={routes.userProfile}>
            {user?.isLoggedIn && (
              <div
                className={`${styles.containerImage} flexCenter cursor-pointer bg-bgPurple w-7 h-7 rounded-full text-white font-bold uppercase text-base sm:text-sm sm:w-10 sm:h-10`}
              >
                {imageAvatar ? (
                  <img src={imageAvatar} alt={`avatar ${user?.email}`} className='object-cover' />
                ) : (
                  <ImageFromAws image={user.avatarUrl} />
                )}
              </div>
            )}
          </Link>

          <span
            onClick={() => setNavMobile(!isNavMobile)}
            className='material-symbols-outlined cursor-pointer text-topBar text-2xl sm:text-4xl lg:hidden dark:text-white'
          >
            menu
          </span>
        </div>
      </nav>
    </header>
  )
}
