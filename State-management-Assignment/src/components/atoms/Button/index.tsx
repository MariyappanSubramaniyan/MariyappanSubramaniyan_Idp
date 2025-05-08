import { Button } from '@mui/material'
import { IButton } from '@utils/interfaces'

const BaseButton = ({ label, ...props }: IButton) => {
  return <Button {...props}>{label}</Button>
}

export default BaseButton
