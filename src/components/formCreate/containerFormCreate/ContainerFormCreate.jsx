export const ContainerFormCreate = ({ children, title }) => {
  return (
    <main className='bg-white py-12 dark:bg-create'>
      <section className='flex w-[90%] m-auto text-white'>
        <div className='w-full py-8 px-6 sm:px-16 rounded-l-3xl lg:w-[70%] shadow-shadowFilters dark:bg-grayTopBar'>
          <p
            className={`mb-24 mt-5 text-sm text-grayWhite text-center sm:mb-16 sm:text-start sm:text-lg dark:text-grayOpacity`}
          >
            {title}
          </p>
          {children}
        </div>
        <div className='bgFormCreate bg-top bg-cover w-[30%] rounded-r-3xl hidden lg:flex'></div>
      </section>
    </main>
  )
}
