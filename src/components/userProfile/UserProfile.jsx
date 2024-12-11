import { useContext } from 'react'
import { AuthContext } from '../../routes/auth/userContext'
import { ContainerProfileData } from './containerProfileData/ContainerProfileData'
import { HeaderProfile } from './headerProfile/HeaderProfile'
import { UserCreatedThings } from './userCreatedThings/UserCreatedThings'

export const UserProfile = () => {
  const { user } = useContext(AuthContext)

  return (
    <main className='bg-white dark:bg-body'>
      <section>
        <HeaderProfile user={user} />
      </section>
      <div className='block sm:flex'>
        <ContainerProfileData user={user} />
        <UserCreatedThings user={user} />
      </div>
    </main>
  )
}
