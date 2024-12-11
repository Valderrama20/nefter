import axios from "axios"
import { useState } from "react"
import { getUserToken } from "../services/magic"
// export const URL_FETCH = "http://localhost:3000"
export const URL_FETCH = "https://api-nc.neefter.com"

const HttpTypes = { GET: "get", POST: "post", PUT: "put", DELETE: 'delete' }
export const useFetch = ({ url, type = HttpTypes.GET, body = {} }) => {

  const [data, setData] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const fetcher = async () => {

    const jwtToken = JSON.parse(window.localStorage.getItem("User"))

    try {
      setLoading(true)
      setError(false)
      const response = await axios({
        method: type, //you can set what request you want to be
        url: `${URL_FETCH}${url}`,
        data: body,
        headers: {
          "Content-Type": "application/json",

          // Authorization: "Bearer " + didToken,

          Authorization2: jwtToken?.jwtToken
        },
      })
      // console.log(response, "entre")
      // console.log(url, 'url')

      setData(response.data)
    } catch (error) {
      console.log("error", error)
      setError(true)
    }

    setLoading(false)
  }

  return {
    data,
    setData,
    loading,
    error,
    fetcher
  }
}
