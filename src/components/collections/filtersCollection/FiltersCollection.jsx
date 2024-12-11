import { CategoryCollection } from '../categoryCollection/CategoryCollection'

export const FiltersCollection = ({ changeUrl }) => {
  const { handleChangeUrl, handlePushQuery, defaultValue, resetValue } =
    changeUrl

  const handleFilterByQuery = ({ target }) => {
    const { value, name } = target
    handlePushQuery(value, name)
    handleChangeUrl()
  }

  return (
    <div className='mt-12 relative w-[98%] sm:h-16 rounded-md m-auto flexCenter gap-5 py-5 px-1 text-white shadow-shadowFilters sm:h-24 sm:px-5 sm:w-[95%] dark:bg-grayTopBar'>
      <select
        name='sort'
        id='sort'
        className={`selectFilter`}
        value={defaultValue('sort')}
        onChange={handleFilterByQuery}
      >
        <option value='sort'>Sort</option>
        <option value='name'>A-Z</option>
        <option value='name-desc'>Z-A</option>
        <option value='price'>price-higher</option>
        <option value='price-desc'>price-Lower</option>
        <option value='date'>date-higher</option>
        <option value='date-desc'>date-lower</option>
      </select>
      <select
        name='status'
        id='status'
        className={`selectFilter`}
        value={defaultValue('status')}
        onChange={handleFilterByQuery}
      >
        <option value='status'>Status</option>
        <option value='active'>Active</option>
        <option value='upcoming'>Upcoming</option>
        <option value='expired'>Expired</option>
      </select>
      <CategoryCollection
        style={'selectFilter'}
        handleFilterByQuery={handleFilterByQuery}
        defaultValue={defaultValue}
      />
      <button
        className='absolute -top-10 right-0 text-topBar font-bold w-20 rounded-md bg-bgSelect py-2 px-0 rounded-full text-sm sm:py-4 sm:rounded-full sm:text-xs sm:static sm:w-full lg:px-10 lg:text-base dark:text-white'
        onClick={resetValue}
      >
        Clear
      </button>
    </div>
  )
}
