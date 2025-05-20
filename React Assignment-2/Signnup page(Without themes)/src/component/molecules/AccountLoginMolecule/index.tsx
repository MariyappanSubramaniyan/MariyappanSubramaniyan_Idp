import { StyledContainer, StyledQuestion, StyledLogin } from "./index";
import { ACCOUNT_QUESTION, ACCOUNT_LOGIN_TEXT } from "@utils/constants";

const AccountLoginMolecule = () => {
  return (
    <StyledContainer>
      <StyledQuestion text={ACCOUNT_QUESTION} variant="body2" />
      <StyledLogin text={ACCOUNT_LOGIN_TEXT} variant="body2" />
    </StyledContainer>
  );
};

export default AccountLoginMolecule;
