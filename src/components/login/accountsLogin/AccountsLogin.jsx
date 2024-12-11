export const AccountsLogin = () => {
  return (
    <div className='relative bg-whiteInputs w-72 h-36 flexCenter gap-5'>
      <div className='flexCenter absolute text-white w-16 h-10 -top-5 rounded-md bg-bgPurple'>
        Or
      </div>
      <div className='flexCenter w-10 h-10 rounded-full bg-bgGradientAccount cursor-pointer sm:w-14 sm:h-14'>
        <i className='bi bi-twitter text-white'></i>
      </div>
      <div className='flexCenter w-10 h-10 rounded-full bg-bgGradientAccount cursor-pointer sm:w-14 sm:h-14'>
        <i className='bi bi-google text-white'></i>
      </div>
    </div>
  )
}
