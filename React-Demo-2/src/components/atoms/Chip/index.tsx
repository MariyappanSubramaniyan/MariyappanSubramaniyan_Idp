import {Chip, type ChipProps} from "@mui/material"

const MuiChip =({label,...props}:ChipProps)=>{
    return <Chip label={label} {...props}/>
}

export default MuiChip