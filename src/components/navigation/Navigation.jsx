import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { routes } from '../../routes/appRouter/helperRoutes'
import { Logout } from '../logout/Logout'
import { AuthContext } from '../../routes/auth/userContext'
import { roles } from '../../routes/appRouter/helperRole'

export const Navigation = ({ isNavMobile, setNavMobile }) => {
  const { user } = useContext(AuthContext)
  // console.log('user: ', user)

  return (
    <ul
      className={`lg:flex ${
        isNavMobile
          ? 'navMobile lg:gap-5 lg:flex-row lg:static lg:bg-transparent animate__animated animate__bounceInDown'
          : 'gap-5 hidden '
      } `}
    >
      {routesNav.map(route => {
        if (!route.private && user.isLoggedIn) return null
        if (route.role === roles.admin && user.role !== roles.admin) return null
        return (
          <li
            key={route.page}
            className='text-base font-bold whitespace-nowrap  '
            onClick={() => setNavMobile(false)}
          >
            <NavLink
              className={({ isActive }) =>
                `hover:text-[#DC39FC] font-bold ${
                  isNavMobile && 'listMobile lg:border-t-0'
                }  ${
                  isActive ? 'text-[#DC39FC]' : 'text-textNav dark:text-white'
                }`
              }
              to={route.route}
            >
              {route.page}
            </NavLink>
          </li>
        )
      })}
      {user?.isLoggedIn && (
        <li
          className={`text-base font-bold whitespace-nowrap text-textNav dark:text-white hover:text-[#DC39FC]  ${
            isNavMobile && 'listMobile lg:border-t-0'
          } `}
        >
          <Logout />
        </li>
      )}
    </ul>
  )
}

const routesNav = [
  {
    page: 'Home',
    route: routes.home,
    private: true,
    role: 'normal',
  },
  {
    page: 'Collections',
    route: routes.collection,
    private: true,
    role: 'normal',
  },

  {
    page: 'Events',
    route: routes.events,
    private: true,
    role: 'normal',
  },
  {
    page: 'Create collection',
    route: routes.createCollection,
    private: true,
    role: 'normal',
  },
  {
    page: 'Admin',
    route: `${routes.admin}/table`,
    private: true,
    role: 'admin',
  },
  {
    page: 'Login',
    route: routes.login,
    private: false,
    role: 'normal',
  },
]
