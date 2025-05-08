import { styled } from "@mui/material";
import { theme } from "../../../theme/theme";

export const SectionHeaderContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2.5, 3.75),
});

export const ButtonGroup = styled("div")({
  display: "flex",
  gap: theme.spacing(3),
  paddingLeft: theme.spacing(3.75),
  marginTop: theme.spacing(3),
});
