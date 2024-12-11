import { useForm } from '../../../hooks/useForm'
import { useFetch } from '../../../hooks/useFetch'
import { ErrorsForm } from '../errorsForm/ErrorsForm'
import { FormInputs } from '../formInputs/FormInputs'
import { UploadImageCollection } from '../uploadImageCollection/UploadImageCollection'
import { CategoryCollection } from '../../collections/categoryCollection/CategoryCollection'
import {
  handleAlertLoading,
  handleAlertSuccess,
  handleAlertError,
} from '../../../alerts/alerts'
import { validateCreateCollection } from '../../createCollection/helperCollection'
import { useNavigate } from 'react-router'
import { useS3 } from '../../../hooks/useS3'

export const FormCreateData = ({
  initialCollection,
  inputsCollection,
  type,
}) => {
  const dataFormCreate = useForm(initialCollection)
  const { dataForm, setDataForm, handleSubmit, error } = dataFormCreate

  const imageS3 = useS3()

  const navigate = useNavigate()

  const typeIsCollection = type === 'collection' ? true : false

  const {
    fetcher,
    data,
    loading,
    error: errorFetch,
  } = useFetch({
    url: typeIsCollection ? '/collection' : '/event',
    type: 'post',
    body: dataForm,
  })
  const handleChangeCategory = ({ target }) => {
    const { value, name } = target
    setDataForm(prev => ({
      ...prev,
      category: [value],
    }))
    validateCreateCollection(value, name, error)
  }
  const handleSuccesCreate = () => {
    const id = typeIsCollection ? data?.newCollection?.id : data?.newEvent?.id
    const ofWhatType = typeIsCollection
      ? `/collectionDetails/${id}`
      : '/eventsDetails/4941d497-51d4-4d68-8256-a03748865a12'

    navigate(ofWhatType)
  }

  return (
    <form
      onSubmit={e => handleSubmit(e, fetcher)}
      className='grid grid-cols-2 gap-x-5 gap-y-8 relative'
    >
      {data &&
        handleAlertSuccess({
          title: `${
            typeIsCollection ? 'Collection' : 'Event'
          } successfully created`,
          handleSucces: handleSuccesCreate,
        })}
      {loading && handleAlertLoading()}
      {errorFetch && handleAlertError()}
      <UploadImageCollection
        setDataForm={setDataForm}
        dataForm={dataForm}
        error={error}
        imageS3={imageS3}
      />
      <ErrorsForm error={error} nameError={'coverImage'} />
      <CategoryCollection
        style='inputCreate'
        handleFilterByQuery={handleChangeCategory}
      />
      <ErrorsForm error={error} nameError={'category'} />
      <FormInputs
        dataFormInputs={inputsCollection}
        dataFormCreate={dataFormCreate}
      />
    </form>
  )
}
