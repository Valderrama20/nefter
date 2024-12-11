import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { roles } from '../appRouter/helperRole'
import { AuthContext } from '../auth/userContext'

export const PrivateAdmin = () => {
  const { user } = useContext(AuthContext)
  console.log(user, 'admin')

  return user.role === roles.admin ? <Outlet /> : <Navigate to='/' />
}
