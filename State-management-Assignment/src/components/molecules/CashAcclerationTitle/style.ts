import { styled } from "@mui/material";
import { theme } from "../../../theme/theme";
import BaseText from "../../atoms/Typography";
import BaseImage from "../../atoms/Image";


export const StyledText = styled(BaseText)({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.h2.fontSize,
  lineHeight: theme.typography.h2.lineHeight,
  letterSpacing: theme.typography.h2.letterSpacing,
  color: theme.typography.h2.color,
});

export const StyledImage = styled(BaseImage)({
  width: theme.spacing(2.5),
  height: theme.spacing(2.5),
});

export const CashAccelerationContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  marginTop: theme.spacing(2.5),
  marginLeft: theme.spacing(3.75),
  width: theme.spacing(27),
  height: theme.spacing(3.625),
  gap: theme.spacing(1),
});
