import { StyledButton } from "./style";
import { AcclerationButtonProps } from "@utils/interfaces"; 

const AcclerationButton = ({ label, active, onClick }: AcclerationButtonProps) => {
  return <StyledButton label={label} active={active} onClick={onClick} />;
};

export default AcclerationButton;
