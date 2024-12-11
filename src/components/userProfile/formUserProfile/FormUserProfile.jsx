import React from 'react'
import { ErrorsForm } from '../../formCreate/errorsForm/ErrorsForm'
import { validateInfoUser } from '../helperValidateFormUser'

export const FormUserProfile = ({ dataFormInputs, useFormData }) => {
  const { handleChange, dataForm, error } = useFormData
  return (
    <form className='grid grid-cols-2 gap-5  '>
      {dataFormInputs.map((input, index) => (
        <div key={index}>
          <input
            type={input.type}
            name={input.name}
            value={dataForm[input.name]}
            placeholder={input.name}
            onChange={e => handleChange(e, validateInfoUser)}
            className='inputCreate'
          />
          <ErrorsForm error={error} nameError={input.name} />
        </div>
      ))}
    </form>
  )
}
