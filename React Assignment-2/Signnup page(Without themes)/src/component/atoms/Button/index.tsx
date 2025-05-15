import { Button } from "@mui/material";
import { IButtonProps } from "@/utils/interface";

const ButtonAtom = ({ label, ...props }: IButtonProps) => {
  return <Button {...props}>{label}</Button>;
};

export default ButtonAtom;
