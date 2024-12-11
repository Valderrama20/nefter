import React from 'react'
import { ErrorsForm } from '../errorsForm/ErrorsForm'
import { validateCreateCollection } from '../../createCollection/helperCollection'

export const FormInputs = ({ dataFormInputs, dataFormCreate }) => {
  const { dataForm, handleChange, error, setDataForm } = dataFormCreate

  return (
    <>
      {dataFormInputs.map(input => (
        <div key={input.name} className={`${input.class} w-full`}>
          {input.type === 'date' && (
            <label className='text-gray500 capitalize font-bold ml-4 text-lg dark:text-white'>
              {input.name} 📆
            </label>
          )}
          {input.type === 'select' ? (
            <select
              className='inputCreate'
              name={input.name}
              value={dataForm[input.name]}
              onChange={e => handleChange(e, validateCreateCollection)}
            >
              {input.option.map(opt => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          ) : input.type === 'textArea' ? (
            <textarea
              type={input.type}
              name={input.name}
              value={dataForm[input.name]}
              placeholder={input.name}
              onChange={e => handleChange(e, validateCreateCollection)}
              className='inputCreate'
            />
          ) : (
            <input
              type={input.type}
              name={input.name}
              value={dataForm[input.name]}
              placeholder={input.name}
              onChange={e => handleChange(e, validateCreateCollection)}
              className='inputCreate'
            />
          )}

          <ErrorsForm error={error} nameError={input.name} />
        </div>
      ))}
      <input
        type='submit'
        className={`col-span-2 bg-bgSubmitCollection bg-bgSizeSubmitCollection rounded-full p-4 font-bold cursor-pointer`}
        value={'Create'}
      />
    </>
  )
}
