import { Button, styled } from "@mui/material";

export const BaseButton = styled(Button)({
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

export const HoverButton = styled(BaseButton)({
  "&:hover": {
    backgroundColor: "#2B292E",
  },
});
