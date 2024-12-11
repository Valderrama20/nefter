import { useLocation, useNavigate } from 'react-router'
export const useQuery = () => {
  const { search, pathname } = useLocation()
  const navigate = useNavigate()
  const query = new URLSearchParams(search)

  const handlePushQuery = (value, queryValue) => {

    if (queryValue === value)
      return query.delete(queryValue)

    if (!query.has(queryValue))
      return query.append(queryValue, value)

    query.set(queryValue, value)

  }

  const handleChangeUrl = () => {
    query.delete('page')
    const dataRequest = query.toString()

    navigate(`${pathname}?${dataRequest}`)
  }

  const resetValue = () => {
    console.log(pathname, 'pathname')
    navigate(pathname)
  }

  const existedQuery = (params) => query.get(params)

  const defaultValue = (value) => query.get(value) ? query.get(value) : value

  const pagination = (page) => {
    !query.has('page') ? query.append('page', page) : query.set('page', page)

    const dataRequest = query.toString()
    navigate(`${pathname}?${dataRequest}`)
  }

  return {
    handlePushQuery,
    handleChangeUrl,
    defaultValue,
    resetValue,
    existedQuery,
    pagination
  }
}
