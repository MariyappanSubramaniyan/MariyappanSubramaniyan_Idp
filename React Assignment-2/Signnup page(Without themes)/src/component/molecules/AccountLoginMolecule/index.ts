import { styled } from "@mui/material";
import Typography from "../../atoms/Typography";

export const StyledContainer = styled("div")({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "8px",
  margin: "24px 0",
  flexWrap: "wrap",
});

export const StyledQuestion = styled(Typography)({
  fontFamily: "Gilroy",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "150%",
  letterSpacing: "0%",
  color: "#A5A5A6",
});

export const StyledLogin = styled(Typography)({
  fontFamily: "Gilroy",
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "19px",
  letterSpacing: "0%",
  color: "#B4A9FF",
  cursor: "pointer",
});
