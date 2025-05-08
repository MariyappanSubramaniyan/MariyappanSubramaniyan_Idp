import { Typography } from '@mui/material'
import { ITypography } from '@utils/interfaces'

const BaseText = ({ text, ...props }: ITypography) => {
  return <Typography {...props}>{text}</Typography>
}

export default BaseText
