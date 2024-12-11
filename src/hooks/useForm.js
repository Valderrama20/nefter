import { useState } from "react"
import { deleteSpaces, inputsEmptys } from "../components/createCollection/helperCollection"
export const useForm = (initialState) => {
  const [dataForm, setDataForm] = useState(initialState)
  const [error, setError] = useState({})

  const handleChange = ({ target }, errorValidate) => {
    let { value, name } = target

    setDataForm(prev => ({ ...prev, [name]: value }))
    errorValidate && setError(errorValidate(value, name, error, dataForm))
  }


  const handleSubmit = (e, actionPost) => {
    e.preventDefault()
    const withoutSpaces = deleteSpaces(dataForm)
    setDataForm(withoutSpaces)
    const errorEmpty = inputsEmptys(dataForm, {})
    setError(errorEmpty)
    if (!Object.entries(errorEmpty).length) {
      actionPost()
      setDataForm(initialState)
    }
  }
  return {
    dataForm,
    setDataForm,
    error,
    ...dataForm,
    handleChange,
    handleSubmit
  }
}