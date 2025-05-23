import { Avatar, type AvatarProps } from '@mui/material'

const MuiAvatar = ({ src, alt }: AvatarProps) => {
  return <Avatar src={src} alt={alt} />
}

export default MuiAvatar
