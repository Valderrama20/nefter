import { CategoryCollection } from '../../collections/categoryCollection/CategoryCollection'

export const FilterAdmin = ({ dinamicQuery }) => {
  const { handleChangeUrl, handlePushQuery, defaultValue, resetValue } =
    dinamicQuery

  const handleFilterByQuery = ({ target }) => {
    const { value, name } = target
    handlePushQuery(value, name)
    handleChangeUrl()
  }

  return (
    <div className='w-[920px] relative sm:h-16 rounded-md m-auto flexCenter gap-5 py-5 px-1 text-white shadow-shadowFilters sm:h-24 sm:px-5 lg:w-[95%] dark:bg-body'>
      <select
        name='sort'
        id='sort'
        className={`sm:py-1 h-10 selectFilter`}
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
      {/* <select
        name='status'
        id='status'
        className={`sm:py-1 h-10 selectFilter`}
        value={defaultValue('status')}
        onChange={handleFilterByQuery}
      >
        <option value='status'>Status</option>
        <option value='active'>Active</option>
        <option value='upcoming'>Upcoming</option>
        <option value='expired'>Expired</option>
      </select>
      <select
        name='approved'
        id='approved'
        className={`sm:py-1 h-10 selectFilter`}
        value={defaultValue('approved')}
        onChange={handleFilterByQuery}
      >
        <option value='approved'>Aproved</option>
        <option value='true'>🟢</option>
        <option value='false'>🔴</option>
      </select>
      <CategoryCollection
        style={'sm:py-1 h-10 selectFilter'}
        handleFilterByQuery={handleFilterByQuery}
        defaultValue={defaultValue}
      /> */}
      <button
        className='h-10 selectFilter sm:py-1'
        onClick={resetValue}
      >
        Clear
      </button>
    </div>
  )
}
