import { Checkbox } from '@mui/material'
import { ICheckbox } from '@utils/interfaces'

const BaseCheckbox = (props: ICheckbox) => {
  return <Checkbox {...props} />
}

export default BaseCheckbox
