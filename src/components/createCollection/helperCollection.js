export const validateCreateCollection = (value, name, error, dataForm) => {
  const empty = "The input cannot be empty";

  const itIsOlderDate = (dateInital, finalDate) => Date.parse(dateInital) >= Date.parse(finalDate)
  const isEqual = (nameInput) => name === nameInput
  const maxCharacter = (size) => `Maximum number of characters allowed: ${size}`;
  isNaN(Number(value)) ? value : value = Number(value)
  console.log(value, name, 'valueName')
  const formDate = /^\d{4}\-\d{2}\-\d{2}$/
  if (!value) error[name] = empty
  // else if(isEqual('coverImage') )
  else if ((isEqual('category') && value.includes('category')) || (isEqual('chain') && value === 'Chain') || (isEqual('status') && value === 'Status')) error[name] = empty
  else if (isEqual('name') && value.length < 5) error[name] = maxCharacter(5)
  else if (isEqual('description') && value.length < 30) error[name] = maxCharacter(30)
  else if ((isEqual('mintDate') || isEqual('presaleDate') || isEqual('startDate') || isEqual('endDate')) && !formDate.test(value)) error[name] = 'Digite un formato de fecha valido YYYY-MM-DD'
  else if ((isEqual('mintPrice') || isEqual('maxSupply')) && typeof value !== 'number') error[name] = 'The value must be numeric'
  else if (isEqual('presaleDate')) {
    if (itIsOlderDate(dataForm?.mintDate, value)) error['presaleDate'] = 'It cannot be less than the date the NFT was mined'
    else {
      delete error['presaleDate']
      delete error['mintDate']
    }
  }
  else if (isEqual('mintDate')) {
    if (itIsOlderDate(value, dataForm?.presaleDate)) error['mintDate'] = 'Cannot be older than the date the NFT was announced'
    else {
      delete error['presaleDate']
      delete error['mintDate']
    }
  }
  else if (isEqual('endDate')) {
    if (itIsOlderDate(dataForm?.startDate, value)) error['endDate'] = 'Cannot be earlier than the date the event ends'
    else {
      delete error['endDate']
      delete error['startDate']
    }
  }
  else if (isEqual('startDate')) {
    if (itIsOlderDate(value, dataForm?.endDate)) error['startDate'] = 'Cannot be earlier than the date the event was created'
    else {
      delete error['endDate']
      delete error['startDate']
    }
  }
  else delete error[name]

  return error
}
export const inputsEmptys = (dataForm, error) => {
  const emptyText = 'The input cannot be empty'
  let err = {};
  for (let clave in dataForm) {
    if (clave === 'coverImage') {
      if (!dataForm?.coverImage?.medium) err[clave] = emptyText;
    } else {
      console.log(dataForm[clave], 'emptys')
      err = validateCreateCollection(dataForm[clave], clave, error, dataForm)
    }

  }
  return err
}
export const deleteSpaces = (dataForm) => {
  let dataTrim = {}
  for (let clave in dataForm) {
    if (typeof dataForm[clave] === 'string') {
      const data = dataForm[clave].replace(/^\s+|\s+$|\s+(?=\s)/g, "");
      dataTrim[clave] = data
    } else {
      dataTrim[clave] = dataForm[clave]
    }

  }
  return dataTrim
} 