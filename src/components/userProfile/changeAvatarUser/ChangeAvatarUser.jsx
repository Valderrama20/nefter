export const ChangeAvatarUser = ({ user, upload }) => {
  const { handleUpload } = upload

  const handleUploadImage = e => {
    const file = e.target.files[0]
    handleUpload(file, user.id)
  }

  return (
    <button
      type='button'
      className={`absolute z-30 bottom-0 -right-2 sm:-right-2 text-gray-500 rounded cursor-pointer lg:right-3 `}
    >
      <label
        htmlFor='image'
        className='flex justify-between text-black text-lg cursor-pointer font-bold dark:text-white'
      >
        <span className='flexCenter text-white text-lg cursor-pointer bg-gradientButtonFilter rounded-full w-10 h-10 material-symbols-outlined sm:w-12 sm:h-12 sm:text-2xl'>
          photo_camera
        </span>
      </label>

      <input
        id='image'
        name='image'
        type='file'
        onChange={handleUploadImage}
        className='hidden'
      />
    </button>
  )
}
