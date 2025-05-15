import { useState } from "react";
import {
  SignUpFormContainer,
  SignUpButton,
  SignUpDivider,
  SignUpInputField,
} from "./index";
import SocialButtonOrganism from "@component/organisms/SocialButtonGroup";
import AccountLoginMolecule from "@component/molecules/AccountLoginMolecule";
import SignUpHeaderMolecule from "@component/molecules/SignUpHeader";
import NameIcon from "@assets/icons/smile.svg";
import EmailIcon from "@assets/icons/Email.svg";
import PasswordIcon from "@assets/icons/lock.svg";
import EyeIcon from "@assets/icons/eye.svg";

import { SIGNUP_PLACEHOLDERS } from "@utils/constants";

const SignUpFormOrganism = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isButtonDisabled = !name.trim() || !email.trim() || !password.trim();

  return (
    <SignUpFormContainer>
      <SignUpHeaderMolecule />
      <SignUpInputField
        placeholder={SIGNUP_PLACEHOLDERS.name}
        startImageSrc={NameIcon}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <SignUpInputField
        placeholder={SIGNUP_PLACEHOLDERS.email}
        startImageSrc={EmailIcon}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <SignUpInputField
        placeholder={SIGNUP_PLACEHOLDERS.password}
        startImageSrc={PasswordIcon}
        endImageSrc={EyeIcon}
        type={showPassword ? "text" : "password"}
        endImageAction={() => setShowPassword((prev) => !prev)}
        onChange={(e) => setPassword(e.target.value)}
      />
      <SignUpButton
        label="Sign Up"
        variant="contained"
        disabled={isButtonDisabled}
        style={{
          backgroundColor: isButtonDisabled ? "#5484c5" : "",
          color: "#fff",
        }}
      />
      <SignUpDivider myCustomProp="Or" />
      <SocialButtonOrganism />
      <AccountLoginMolecule />
    </SignUpFormContainer>
  );
};

export default SignUpFormOrganism;
