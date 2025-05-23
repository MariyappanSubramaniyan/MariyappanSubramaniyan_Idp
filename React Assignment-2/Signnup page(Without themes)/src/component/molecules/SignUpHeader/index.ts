import { styled } from "@mui/material";
import Typography from "@component/atoms/Typography";

export const StyledContainer = styled("div")({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  boxSizing: "border-box",
});

export const StyledSignUp = styled(Typography)({
  fontFamily: "Gilroy, sans-serif",
  fontWeight: 600,
  fontSize: "32px",
  lineHeight: "1.2",
  letterSpacing: "0.02em",
  color: "#E8E7F0",
  textAlign: "center",
});
