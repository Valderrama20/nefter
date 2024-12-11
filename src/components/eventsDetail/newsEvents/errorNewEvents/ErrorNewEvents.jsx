import errorLogo from '../../../../assets/logoErrorData.png'
export const ErrorNewEvents = () => {
  const textError = 'Ooops, sorry we are having problems at the moment!'
  return (
    <div className='flexCenter flex-col'>
      <p>{textError}</p>
      <img src={errorLogo} alt={textError} />
    </div>
  )
}
