import logoPresentation from '../../../assets/img-slider-1.png'
import { useNavigate } from 'react-router'
import 'animate.css';
export const LandingHome = () => {
  const navigate = useNavigate()

  return (
    <section className={`py-8 bg-bgCounter dark:bg-landingdark`}>
      <div className='flexCenter m-auto w-[90%]'>
        <div className='w-full text-white lg:w-1/2'>
          <h1 className='max-w-xs text-4xl font-bold mb-7 leading-[3.5rem] sm:leading-[4rem] sm:max-w-md sm:text-6xl lg:max-w-md lg:mx-0 '>
            Discover and collect your favorite digital NFTs
          </h1>
          <p className='max-w-xs mb-10 font-medium text-lg sm:text-xl leading-8 sm:max-w-sm'>
            Quis autem vel eum iure reprehenderit qui in ea voluptates esse quam
            nihil molestiae consequatur veillum
          </p>
          <div className='flex gap-5 '>
            <button
              onClick={() => navigate('/collection')}
              className='text-xs rounded-full text-topBar py-2 px-4 font-bold bg-white sm:px-7 sm:py-3 sm:text-sm'
            >
              <i className='bi bi-send-fill text-lg text-[#DC39FC] mr-1'></i>
              Explore More
            </button>
            <button
              onClick={() => navigate('/createCollection')}
              className='text-xs rounded-full text-topBar py-2  px-6 font-bold sm:px-9 sm:py-3 sm:text-sm'
            >
              <i className='bi bi-folder-fill text-lg text-[#DC39FC] mr-1'></i>
              Create Now
            </button>
          </div>
        </div>
        <div className='hidden m-auto lg:block'>
          <img
            src={logoPresentation}
            alt='neefter presentation'
            className='block m-auto animate__animated animate__shakeY animate__infinite'
          />
        </div>
      </div>
      {/* <div className='flexCenter gap-3 w-[90%] m-auto mt-8 '>
        <span
          className='w-5 h-5 rounded-full bg-white border-4 border-purple'
          onClick={() => setImagePresentation(logoPresentation)}
        />
        <span
          className={`w-2.5 h-2.5 rounded-full bg-white border border-purple `}
          onClick={() => setImagePresentation(landingImage)}
        />
      </div> */}
    </section>
  )
}
