import { styled } from "@mui/material";
import { theme } from "../../../theme/theme";
import BaseText from "../../atoms/Typography";
import BaseImage from "../../atoms/Image";


export const StyledText = styled(BaseText)({
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.body2.fontSize,
  lineHeight: theme.typography.body2.lineHeight,
  letterSpacing: theme.typography.body2.letterSpacing,
  color: theme.palette.secondary.main,
});

export const StyledImage = styled(BaseImage)({
  display: "flex",
  flexDirection: "row",
  width: theme.spacing(2.5),
  height: theme.spacing(2.5),
});

export const RefreshContainer = styled("div")({
  marginTop: theme.spacing(2.5),
  marginLeft: theme.spacing(70),
  display: "flex",
  flexDirection: "row",
  width: theme.spacing(16.5),
  height: theme.spacing(3.625),
  gap: theme.spacing(1),
  alignItems: "flex-end",
});
