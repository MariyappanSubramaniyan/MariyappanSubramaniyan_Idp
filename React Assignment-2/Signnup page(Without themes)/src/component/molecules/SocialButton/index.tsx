import { Button, styled } from "@mui/material";
import Image from "../../atoms/Images";

interface ISocialButtonProps {
  imageSrc: string;
  label: string;
}

const StyledButton = styled(Button)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  width: "150px",
  height: "auto",
  borderRadius: "12px",
  padding: "16px 24px",
  textTransform: "capitalize",
  backgroundColor: "#201F24",
  color: "#C9C8CC",
  boxShadow: "none",
  fontSize: "14px",
  lineHeight: "18px",
});

const StyledButtonWithHover = styled(StyledButton)({
  "&:hover": {
    backgroundColor: "#2B292E",
  },
});

const SocialButton = ({ imageSrc, label }: ISocialButtonProps) => (
  <StyledButtonWithHover>
    <Image
      src={imageSrc}
      alt={`${label} logo`}
      style={{ width: "24px", height: "24px" }}
    />
    {label}
  </StyledButtonWithHover>
);

export default SocialButton;
