import { Box, BoxProps } from "@mui/material";

interface IImageProps extends BoxProps {
  src: string;
  alt: string;
}

const Image = ({ src, alt, ...props }: IImageProps) => {
  return <Box component="img" src={src} alt={alt} {...props} />;
};

export default Image;
