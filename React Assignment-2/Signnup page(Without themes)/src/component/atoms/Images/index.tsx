import { Box } from "@mui/material";
import { IImageProps } from "@/utils/interface";

const Image = ({ src, alt, ...props }: IImageProps) => {
  return <Box component="img" src={src} alt={alt} {...props} />;
};

export default Image;
