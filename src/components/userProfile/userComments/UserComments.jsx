import { ContainerComments } from '../../modelComments/containerComments/ContainerComments'

export const UserComments = ({ data }) => {
  return (
    <div className='w-[80%] mx-auto'>
      <div className='flexCenter mb-8 gap-3'>
        <h1 className='text-center text-2xl dark:text-white'>Your Comments</h1>
        <span className='material-symbols-outlined dark:text-white'>comment</span>
      </div>
      <ContainerComments data={data} />
    </div>
  )
}
