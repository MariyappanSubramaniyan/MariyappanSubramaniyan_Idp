import { useState } from "react";
import InputField from "../../atoms/Input";
import { styled } from "@mui/material/styles";
import NameIcon from "../../../assets/icons/smile.svg";
import EmailIcon from "../../../assets/icons/Email.svg";
import PasswordIcon from "../../../assets/icons/lock.svg";
import EyeIcon from "../../../assets/icons/eye.svg";
import ButtonAtom from "../../atoms/Button";
import DividerAtom from "../../atoms/Divider";
import SocialButtonOrganism from "../SocialButtonGroup";
import AccountLoginMolecule from "../../molecules/AccountLoginMolecule";
import SignUpMolecule from "../../molecules/SignUpHeader";

const SignUpFormContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  width: "434px",
  padding: "20px",
  boxSizing: "border-box",
  marginRight: "200px",
});

const StyledButton = styled(ButtonAtom)({
  width: "400px",
  height: "60px",
  borderRadius: "12px",
  marginTop: "20px",
  textTransform: "none",
});

const StyledDivider = styled(DividerAtom)({
  borderTopColor: "#413F4D",
  color: '#fff',
  '&::before, &::after': {
    borderTopColor: "#413F4D",
  },
});

const StyledInputField = styled(InputField)({
  width: '100%',
  backgroundColor: 'transparent',
  borderRadius: '12px',
  '& .MuiInputBase-root': {
    color: '#C9C8CC',
    borderRadius: '12px',
    padding: '0 12px',
    height: '56px',
    '& fieldset': {
      borderColor: '#413F4D',
      borderRadius: '12px',
    },
    '&:hover fieldset': {
      borderColor: '#413F4D',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#413F4D',
      boxShadow: 'none',
    },
  },
  '& .MuiInputBase-input::placeholder': {
    color: '#C9C8CC',
    opacity: 0.7,
  },
});

const SignUpFormOrganism = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isButtonDisabled = !name.trim() || !email.trim() || !password.trim();

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <SignUpFormContainer>
      <SignUpMolecule />
      <StyledInputField
        placeholder="Johndoe"
        startImageSrc={NameIcon}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <StyledInputField
        placeholder="Johndoe@gmail.com"
        startImageSrc={EmailIcon}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <StyledInputField
        placeholder="••••••••"
        startImageSrc={PasswordIcon}
        endImageSrc={EyeIcon}
        endImageAction={handleTogglePasswordVisibility}
        type={showPassword ? "text" : "password"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <StyledButton
        label="Sign Up"
        variant="contained"
        disabled={isButtonDisabled}
        style={{
          backgroundColor: isButtonDisabled ? "#5484c5" : "",
          color: "#fff",
        }}
      />
      <StyledDivider myCustomProp="Or" />
      <SocialButtonOrganism />
      <AccountLoginMolecule />
    </SignUpFormContainer>
  );
};

export default SignUpFormOrganism;
