import { Typography,TypographyProps } from "@mui/material";

interface ITypography extends TypographyProps{
    text:string
}

const TextField= ({text,...props}:ITypography)=>{
    return<Typography {...props}>{text} </Typography>
};

export default TextField;