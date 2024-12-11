export const DeleteImageCollection = ({ id, deleteImage }) => {

  return (
    <div className='absolute flex justify-between w-full top-2 px-3'>
      <div className='flex items-center gap-5 w-[80%]'>
        <span className='truncate text-textNav dark:text-white'>{id}</span>
        <span className='rounded-full bg-lime700 flexCenter w-8 h-8 '>
          <i className='bi bi-check2-all text-green-300 px-2' />
        </span>
      </div>
      <span
        onClick={() => deleteImage(id)}
        className='text-red500 font-bold text-2xl cursor-pointer'
      >
        X
      </span>
    </div>
  )
}
