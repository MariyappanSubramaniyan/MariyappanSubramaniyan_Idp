import Typography from "../../atoms/Typography";
import { styled } from "@mui/material";

const StyledContainer = styled("div")({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "8px",
  margin: "24px 0", 
  flexWrap: "wrap",
});

const StyledQuestion = styled(Typography)({
  fontFamily: "Gilroy",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "150%",
  letterSpacing: "0%",
  color: "#A5A5A6",
});

const StyledLogin = styled(Typography)({
  fontFamily: "Gilroy",
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "19px",
  letterSpacing: "0%",
  color: "#B4A9FF",
  cursor: "pointer",
});

const AccountLoginMolecule = () => {
  return (
    <StyledContainer>
      <StyledQuestion text="Already have an account?" variant="body2" />
      <StyledLogin text="Login" variant="body2" />
    </StyledContainer>
  );
};

export default AccountLoginMolecule;