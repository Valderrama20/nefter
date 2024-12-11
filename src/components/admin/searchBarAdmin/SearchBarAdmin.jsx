import { useState } from 'react'

export const SearchBarAdmin = ({ searchParams }) => {
  const [searchU, setSearchU] = useState('')

  const searchChange = e => {
    setSearchU(e.target.value)
  }

  const handleSearch = e => {
    e.preventDefault()
    setSearchU('')
    searchParams(searchU)
  }

  return (
    <form className={`ml-auto relative`} onSubmit={handleSearch}>
      <input
        type='text'
        placeholder='Search'
        onChange={e => searchChange(e)}
        value={searchU}
        required
        autoComplete='off'
        className='bg-white border-2 border-whiteBorderInput rounded-full border border-gray-300 text-textNav text-sm block w-full pl-5 p-2.5 sm:bg-bgSearchBar placeholder:mr-6 placeholder:text-xs dark:border-borderSearchBar dark:text-white dark:bg-navBarBlack'
      />

      <button
        type='submit'
        className='absolute top-3.5 right-5 flex items-center '
      >
        <i className='bi bi-search text-xs text-textNav dark:text-white' />
      </button>
    </form>
  )
}
