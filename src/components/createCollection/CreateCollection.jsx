import { useContext } from 'react'
import { AuthContext } from '../../routes/auth/userContext'
import { BanerLayout } from '../banerLayout/BanerLayout'
import { ContainerFormCreate } from '../formCreate/containerFormCreate/ContainerFormCreate'
import { FormCreateData } from '../formCreate/formCreateData/FormCreateData'

export const CreateCollection = () => {
  const { user } = useContext(AuthContext)

  const initialCollection = {
    name: '',
    presaleDate: '',
    mintDate: '',
    mintPrice: '',
    maxSupply: '',
    description: '',
    coverImage: '',
    ownerId: user?.id,
    status: '',
    category: [],
    chain: '',
  }
  return (
    <>
      <BanerLayout title={'Create Collection'} />
      <ContainerFormCreate title='Create the most popular collections nft digital market place'>
        {/* <FormCreateCollection /> */}
        <FormCreateData
          initialCollection={initialCollection}
          inputsCollection={inputsCollection}
          type='collection'
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
    name: 'mintDate',
    type: 'date',
    class: 'col-span-2 sm:col-span-1',
  },
  {
    name: 'presaleDate',
    type: 'date',
    class: 'col-span-2 sm:col-span-1',
  },
  {
    name: 'mintPrice',
    type: 'number',
    class: 'col-span-2 sm:col-span-1',
  },
  {
    name: 'maxSupply',
    type: 'number',
    class: 'col-span-2 sm:col-span-1',
  },
  {
    name: 'description',
    type: 'textArea',
    class: 'col-span-2',
  },
  {
    name: 'chain',
    type: 'select',
    class: 'col-span-2',
    option: [
      'Chain',
      'arbitrum',
      'avalanche',
      'bnb',
      'ethereum',
      'klaytn',
      'optimism',
      'polygon',
      'solana',
    ],
  },
  {
    name: 'status',
    type: 'select',
    class: 'col-span-2',
    option: ['Status', 'active', 'expired', 'otro'],
  },
]
