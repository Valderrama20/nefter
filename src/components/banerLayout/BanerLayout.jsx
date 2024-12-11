import { useNavigate } from 'react-router'
import { routes } from '../../routes/appRouter/helperRoutes'
import { Link } from 'react-router-dom'

export const BanerLayout = ({ title }) => {
  const navigate = useNavigate()
  return (
    <div className={`bgBannerLayaout bg-cover relative h-36 sm:h-48`}>
      <div
        className={`bg-bgGradientBanner absolute top-0 left-0 w-full h-full flex items-center`}
      >
        <div className='w-4/5 m-auto text-white font-bold justify-between items-center text-center sm:text-left sm:flex'>
          {title && (
            <>
              <div className='flexCenter gap-2 m-auto mb-5 sm:m-0 sm:gap-5'>
                <span
                  onClick={() => navigate(-1)}
                  className='material-symbols-outlined cursor-pointer text-2xl sm:text-4xl'
                >
                  arrow_back_ios
                </span>
                <h1 className='text-2xl sm:text-4xl uppercase'>{title}</h1>
              </div>
              <div className='flexCenter gap-1 mt-2 sm:gap-3'>
                <span className='text-xs sm:text-base'>
                  <Link className='text-white font-bold' to={routes.home}>Home</Link>
                </span>
                <span className='material-symbols-outlined text-lg sm:text-2xl'>
                  chevron_right
                </span>
                <span className='text-xs sm:text-base'>{title}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
