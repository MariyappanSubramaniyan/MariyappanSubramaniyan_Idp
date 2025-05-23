import {Typography,type TypographyProps} from "@mui/material"

const MuiTypography = ({children,...props}:TypographyProps)=>{
    return <Typography {...props}>{children}</Typography>
}
export default MuiTypography