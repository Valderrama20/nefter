import { useFetch } from '../../../hooks/useFetch'

export const CategoryCollection = ({
  style,
  handleFilterByQuery,
  defaultValue,
}) => {
  const { fetcher, data, loading } = useFetch({ url: '/category' })

  const dataCategory = () => !data && fetcher()

  return (
    <select
      name='category'
      id='category'
      className={`${style} col-span-2`}
      value={defaultValue && defaultValue('category')}
      onClick={dataCategory}
      onChange={e => handleFilterByQuery(e)}
    >
      <option value='category'>Category</option>
      {loading && <option value='loading'>...Loading</option>}
      {data?.map(category => (
        <option key={category.id} value={category.slug}>
          {category.title}
        </option>
      ))}
    </select>
  )
}
