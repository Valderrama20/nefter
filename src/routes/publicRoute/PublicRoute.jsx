import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../auth/userContext'

export const PublicRoute = () => {
  const { user } = useContext(AuthContext)
  return !user?.isLoggedIn ? <Outlet /> : <Navigate to='/' />
}
