import { useEffect } from 'react'
import { useFetch } from '../../../hooks/useFetch'
import { FormUserProfile } from '../formUserProfile/FormUserProfile'
import { ModalCompleteProfile } from '../modalCompleteProfile/ModalCompleteProfile'
import {
  handleAlertConfirmed,
  handleAlertError,
  handleAlertLoading,
  handleAlertSuccess,
} from '../../../alerts/alerts'
import { useDispatch } from 'react-redux'
import { changeDataUserAction } from '../../../redux/actions'

export const EditProfile = ({ show, setShow, user, newDataUser }) => {
  const { dataForm, error: errorForm } = newDataUser
  const dispatch = useDispatch()

  const { fetcher, loading, error, data } = useFetch({
    url: `/user/${user.id}`,
    type: 'put',
    body: dataForm,
  })
  const handleOpenConfirmed = () => {
    handleAlertConfirmed({
      title: 'Are you sure you want to modify your information?',
      action: handleUpdateProfile,
    })
  }

  useEffect(() => {
    data && handleAlertSuccess({ title: 'success' })
    error && handleAlertError()
  }, [data, error])

  const handleUpdateProfile = () => {
    if (!Object.entries(errorForm).length) {
      fetcher()
      dispatch(changeDataUserAction(dataForm))
      setShow(false)
    }
  }

  return (
    <>
      {loading && handleAlertLoading()}
      <ModalCompleteProfile show={show} setShow={setShow}>
        <FormUserProfile
          dataFormInputs={inputsCollection}
          useFormData={newDataUser}
        />
        <button
          onClick={handleOpenConfirmed}
          className={`${
            !Object.entries(errorForm).length
              ? 'bg-gradientButtonFilter'
              : ' bg-bgSearchBar cursor-not-allowed pointer-events-none'
          } block m-auto text-white font-bold py-2 px-3 rounded`}
        >
          Modificar
        </button>
      </ModalCompleteProfile>
    </>
  )
}

const inputsCollection = [
  {
    name: 'firstName',
    type: 'text',
    class: 'col-span-2',
  },
  {
    name: 'lastName',
    type: 'text',
    class: 'col-span-2',
  },
  {
    name: 'phone',
    type: 'text',
    class: 'col-span-2',
  },
  {
    name: 'country',
    type: 'text',
    class: 'col-span-2',
  },
]
