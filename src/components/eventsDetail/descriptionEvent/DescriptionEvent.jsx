export const DescriptionEvent = ({ data }) => {
  return (
    <>
      <h1 className='text-base font-bold mb-8 dark:text-white sm:text-xl '>
        {data?.name}
      </h1>
      <p className='whitespace-pre-line text-sm text-grayWhite leading-7 text-justify sm:leading-9 sm:text-base dark:text-grayOpacity'>
        {data?.description}
      </p>
    </>
  )
}
