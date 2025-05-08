import { Typography as MuiTypography, TypographyProps } from '@mui/material';

interface ITypographyProps extends TypographyProps {
  text: string;
}

const Typography = ({ text, ...props }: ITypographyProps) => {
  return <MuiTypography {...props}>{text}</MuiTypography>;
};

export default Typography;