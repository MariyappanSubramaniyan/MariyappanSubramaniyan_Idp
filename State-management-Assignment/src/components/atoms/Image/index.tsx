import { Box } from '@mui/material'
import { IImage } from '@utils/interfaces'

const BaseImage = ({ src, alt, ...props }: IImage) => {
  return <Box component="img" src={src} alt={alt} {...props} />
}

export default BaseImage