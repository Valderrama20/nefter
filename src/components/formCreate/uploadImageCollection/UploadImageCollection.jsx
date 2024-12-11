import React, { useContext, useEffect } from 'react'
import { useS3 } from '../../../hooks/useS3'
import { AuthContext } from '../../../routes/auth/userContext'
import { validateCreateCollection } from '../../createCollection/helperCollection'
import { DeleteImageCollection } from './deleteImageCollection/DeleteImageCollection'
import { LoadingImageCollection } from './loadingImageCollection/LoadingImageCollection'
import { ViewImage } from './viewImage/ViewImage'

export const UploadImageCollection = ({
  setDataForm,
  dataForm,
  error,
  imageS3,
}) => {
  const { image, loadingImage, handleUpload, deleteImage } = imageS3
  const { user } = useContext(AuthContext)

  const handleChangeValidate = e => {
    const file = e.target.files[0]

    handleUpload(file, user.id)
    validateCreateCollection(e.target.value, 'coverImage', error)
  }

  const deleteImageValidate = id => {
    deleteImage(id)
    validateCreateCollection('', 'coverImage', error)
  }

  useEffect(() => {
    setDataForm(prev => ({
      ...prev,
      coverImage: { tiny: '', medium: image ? image.fileKey : '', large: '' },
    }))
  }, [image])

  return (
    <React.Fragment>
      <ViewImage image={image?.url} loading={loadingImage} />
      <button
        type='button'
        className={`p-2 text-gray-500 rounded cursor-pointer bg-whiteInputs col-span-2 p-6 dark:bg-bgSelect border-borderInput border ${
          (image || loadingImage) && 'pointer-events-none'
        }`}
      >
        <label
          htmlFor='image'
          className='flex justify-between text-black text-lg cursor-pointer font-bold dark:text-white'
        >
          {loadingImage && <LoadingImageCollection />}
          {!dataForm?.coverImage?.medium && !loadingImage ? (
            <>
              Avatar <i className='bi bi-cloud-upload-fill text-xl' />
            </>
          ) : null}
        </label>

        <input
          id='image'
          name='image'
          type='file'
          onChange={handleChangeValidate}
          className='hidden'
        />
      </button>
      {dataForm?.coverImage?.medium && !loadingImage && (
        <DeleteImageCollection
          id={image.id}
          deleteImage={deleteImageValidate}
        />
      )}
    </React.Fragment>
  )
}
