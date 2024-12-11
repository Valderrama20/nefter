import { useLocation, useNavigate } from 'react-router'
import logoError from '../../assets/logoFavicon (1).png'

export const EmptyRequest = ({
  title = 'There are no available Collections with the searched parameters.',
  clear = true,
}) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const handleClearSearch = () => {
    navigate(pathname)
  }

  return (
    <div className='w-full flexCenter flex-col'>
      <p className='text-center font-bold px-5 mt-4 sm:mt-0 text-sm sm:text-lg dark:text-white '>
        {title}
      </p>
      <img className='w-40 my-8 sm:w-72' src={logoError} alt={title} />
      {clear && (
        <button
          onClick={handleClearSearch}
          className=' py-2 px-12 bg-gradientButtonFilter text-base font-bold text-white rounded-full sm:text-lg sm:px-20'
        >
          Clear
        </button>
      )}
    </div>
  )
}
