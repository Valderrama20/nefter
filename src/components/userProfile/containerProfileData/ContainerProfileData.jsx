import { useState, useEffect } from 'react'
import { useForm } from '../../../hooks/useForm'
import { DataUserProfile } from '../dataUserProfile/DataUserProfile'
import { EditProfile } from '../editProfile/EditProfile'
export const ContainerProfileData = ({ user }) => {
  const [dataMissing, setDataMissing] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  
  const initialState = {
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    phone: user?.phone || '',
    country: user?.country || '',
  }

  const dataInformationForm = useForm(initialState)
  const { dataForm } = dataInformationForm

  const handleEmptyData = () => {
    for (let clave in dataForm) {
      if (!dataForm[clave].length) {
        return setDataMissing(true)
      }
    }
    setDataMissing(false)
  }
  useEffect(() => {
    handleEmptyData()
  }, [dataForm])

  return (
    <section className='relative scrollbar py-28 px-8 sm:h-screen sm:overflow-y-scroll sm:w-[40%] lg:w-[40%] dark:text-white'>
      <span
        onClick={() => setShowEdit(true)}
        className='absolute cursor-pointer material-symbols-outlined top-2 right-2 lg:top-8 lg:right-8 sm:text-3xl lg:text-4xl'
      >
        edit
      </span>

      <DataUserProfile userData={user} />

      {dataMissing && (
        <button
          onClick={() => setShowEdit(true)}
          className='flexCenter gap-3 mt-12 rounded-full py-2 px-8 block m-auto bg-gradientButtonFilter text-xs lg:text-lg font-bold text-white'
        >
          Complete your biography
          <span className='material-symbols-outlined text-lg lg:text-2xl'>
            draw
          </span>
        </button>
      )}

      <EditProfile
        user={user}
        show={showEdit}
        setShow={setShowEdit}
        newDataUser={dataInformationForm}
      />
    </section>
  )
}
