import { SIGNUP_HEADER } from "@utils/constants";
import { StyledContainer, StyledSignUp } from "./index";

const SignUpMolecule = () => {
  return (
    <StyledContainer>
      <StyledSignUp text={SIGNUP_HEADER} variant="h4" />
    </StyledContainer>
  );
};

export default SignUpMolecule;
