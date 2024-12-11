import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { routes } from '../../routes/appRouter/helperRoutes'

export const SearchBar = () => {
  const [nameSearch, setNameSearch] = useState('')
  const [mobileSearch, setMobileSearch] = useState(false)

  const { search, pathname } = useLocation()
  const query = new URLSearchParams(search)

  const navigate = useNavigate()
  const isEvent = pathname === '/events'
  const handleChangeName = e => {
    setNameSearch(e.target.value)
  }
  const handleSearch = e => {
    e.preventDefault()
    setNameSearch('')
    setMobileSearch(false)
    if (!search && !isEvent)
      return navigate(`${routes.collection}?name=${nameSearch}`)

    query.set('name', nameSearch)
    const dataRequest = query.toString()
    navigate(`${pathname}?${dataRequest}`)
  }

  return (
    <>
      {/* bg-bgSearchBar  */}
      <form
        className={`${
          !mobileSearch ? 'hidden' : 'block'
        } sm:block absolute top-28 left-0 w-[50%] mr-3 sm:relative sm:top-0`}
        onSubmit={handleSearch}
      >
        <input
          type='text'
          id='voice-search'
          className='bg-white border-2 border-whiteBorderInput rounded-full border border-gray-300 text-textNav text-sm block w-full pl-5 p-2.5 sm:bg-bgSearchBar placeholder:mr-6 placeholder:text-xs dark:border-borderSearchBar dark:text-white dark:bg-navBarBlack'
          placeholder={`${isEvent ? 'Events' : 'Collections'}`}
          onChange={handleChangeName}
          value={nameSearch}
          required
          autoComplete='off'
        />

        <button
          type='submit'
          className='absolute inset-y-0 right-0 flex items-center pr-5'
        >
          <i className='bi bi-search text-xs text-textNav dark:text-white' />
        </button>
      </form>
      <button
        onClick={() => setMobileSearch(!mobileSearch)}
        className='flexCenter bg-transparent rounded-full mr-3 w-7 h-7 bg-gradientButtonFilter sm:hidden'
      >
        {mobileSearch ? (
          <span className='material-symbols-outlined text-white text-lg'>
            close
          </span>
        ) : (
          <i className='bi bi-search text-[11px] text-white' />
        )}
      </button>
    </>
  )
}
