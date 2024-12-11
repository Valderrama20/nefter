import { useContext } from 'react'
import { AuthContext } from '../../routes/auth/userContext'
import { BanerLayout } from '../banerLayout/BanerLayout'
import { ContainerFormCreate } from '../formCreate/containerFormCreate/ContainerFormCreate'
import { FormCreateData } from '../formCreate/formCreateData/FormCreateData'

export const CreateEvent = () => {
  const { user } = useContext(AuthContext)
  const initialCollection = {
    name: '',
    startDate: '',
    endDate: '',
    description: '',
    coverImage: '',
    status: '',
    category: [],
    ownerId: user?.id,
  }

  return (
    <>
      <BanerLayout title={'Create Event'} />
      <ContainerFormCreate title='Publish the latest news from nft digital market place'>
        <FormCreateData
          initialCollection={initialCollection}
          inputsCollection={inputsCollection}
          type={'event'}
        />
      </ContainerFormCreate>
    </>
  )
}

const inputsCollection = [
  {
    name: 'name',
    type: 'text',
    class: 'col-span-2',
  },
  {
    name: 'startDate',
    type: 'date',
    class: 'col-span-2 sm:col-span-1',
  },
  {
    name: 'endDate',
    type: 'date',
    class: 'col-span-2 sm:col-span-1',
  },

  {
    name: 'description',
    type: 'textArea',
    class: 'col-span-2 h-full',
  },
  {
    name: 'status',
    type: 'select',
    class: 'col-span-2',
    option: ['Status', 'active', 'upcoming', 'expired'],
  },
]
