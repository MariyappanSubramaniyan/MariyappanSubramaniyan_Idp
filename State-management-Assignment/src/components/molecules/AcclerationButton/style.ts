import { styled } from "@mui/material";
import BaseButton from "../../atoms/Button";

interface StyledButtonProps {
  active: boolean;
}

export const StyledButton = styled(BaseButton)<StyledButtonProps>(({ active }) => ({
  display: "flex",
  flexDirection: "row",
  width: "147px",
  height: "43px",
  borderRadius: "12px",
  borderWidth: "1px",
  gap: "8px",
  textTransform: "none",
  color: active ? "#B4A9FF" : "#FFFFFF",
  border: `1px solid ${active ? "#B4A9FF" : "#262529"}`,
}));
