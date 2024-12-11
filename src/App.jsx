import { useEffect, useState } from 'react'
import { LoadingApp } from './components/loadingApp/LoadingApp'
import { AppRouter } from './routes/appRouter/AppRouter'
import { AuthContext } from './routes/auth/userContext'

import { checkUser } from './services/magic'
import './animation.css'

function App() {
  const userInformation = JSON.parse(window.localStorage.getItem('User'))

  const [user, setUser] = useState({
    isLoggedIn: userInformation ? true : false,
    ...userInformation,
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const validateUser = async () => {
      setLoading(true)
      try {
        await checkUser(setUser)
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    }
    validateUser()
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser: setUser }}>
      {loading ? <LoadingApp /> : <AppRouter />}
    </AuthContext.Provider>
  )
}

export default App
