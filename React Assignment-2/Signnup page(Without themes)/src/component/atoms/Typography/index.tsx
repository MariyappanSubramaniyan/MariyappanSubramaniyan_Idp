import { Typography as MuiTypography } from '@mui/material';
import { ITypographyProps } from '@/utils/interface';

const Typography = ({ text, ...props }: ITypographyProps) => {
  return <MuiTypography {...props}>{text}</MuiTypography>;
};

export default Typography;
