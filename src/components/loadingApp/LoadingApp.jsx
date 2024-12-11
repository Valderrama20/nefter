import logo from '../../assets/logoNeefter.png'

export const LoadingApp = () => {
  return (
    <div className='flexCenter content-center items-center w-full h-screen bgDarkLanding'>
      <img src={logo} alt='loading Application' className='animate__animated animate__flash animate__infinite animate__slower'/>
    </div>
  )
}
