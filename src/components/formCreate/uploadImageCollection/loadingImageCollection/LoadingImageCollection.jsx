import { Spinner } from '../../../sppiner/Sppiner'

export const LoadingImageCollection = () => {
  return (
    <div className='flex gap-5'>
      <span className='text-lg'>Loading Image</span>
      <Spinner w={6} h={6} />
    </div>
  )
}
