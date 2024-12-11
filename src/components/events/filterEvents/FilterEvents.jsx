import { CategoryCollection } from '../../collections/categoryCollection/CategoryCollection'

export const FilterEvents = ({ queryValue, setDate }) => {
  const {
    handlePushQuery,
    handleChangeUrl,
    defaultValue,
    resetValue,
    existedQuery,
  } = queryValue
  const handleFilterByQuery = ({ target }) => {
    const { value, name } = target
    handlePushQuery(value, name)
    handleChangeUrl()
  }
  const handleResetValue = () => {
    resetValue()
    setDate('All Events')
  }
  return (
    <div className='m-auto text-white grid grid-cols-footer2columns w-full gap-x-5 gap-y-4 mt-8 sm:w-[80%] '>
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
        {!existedQuery('date') && (
          <>
            <option value='date'>date-higher</option>
            <option value='date-desc'>date-lower</option>
          </>
        )}
      </select>
      <select
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
      <CategoryCollection
        style={'h-10 col-span-1 selectFilter sm:py-1'}
        handleFilterByQuery={handleFilterByQuery}
        defaultValue={defaultValue}
      />
      <button
        className='col-span-1 h-10 selectFilter sm:py-1'
        onClick={handleResetValue}
      >
        Clear
      </button>
    </div>
  )
}
