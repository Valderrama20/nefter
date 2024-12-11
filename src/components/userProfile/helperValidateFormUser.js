export const validateInfoUser = (value, name, error) => {
  console.log(value, name, error, 'clg')

  const isEqual = (nameInput) => name === nameInput
  const maxCharacter = (size) => `Maximum number of characters allowed: ${size}`;
  const numberRegex = /^([0-9])*$/

  if (isEqual('phone') && !numberRegex.test(value)) error[name] = 'only numbers are accepted'
  else if (isEqual('phone') && value.length > 10) error[name] = maxCharacter(10)
  else if ((isEqual('firstName') || isEqual('lastName') || isEqual('country')) && value.length > 20) error[name] = maxCharacter(20)
  else delete error[name]
  return error
}