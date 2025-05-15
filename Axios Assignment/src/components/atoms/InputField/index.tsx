import { TextField } from '@mui/material'
import type { InputFieldProps } from '@utils/interfaces'

function InputField({ label, value, onChange, error, type = 'text' }: Readonly<InputFieldProps>) {
  return (
    <TextField label={label}
      value={value}
      onChange={onChange}
      error={error}
      helperText={error ? `${label} is required` : ''}
      type={type}
      fullWidth
    />
  )
}

export default InputField