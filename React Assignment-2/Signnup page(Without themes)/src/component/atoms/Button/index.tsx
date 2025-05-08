import { Button, ButtonProps } from "@mui/material";

interface IButtonProps extends ButtonProps {
  label: string;
}

const ButtonAtom = ({ label, ...props }: IButtonProps) => {
  return <Button {...props}>{label}</Button>;
};

export default ButtonAtom;
