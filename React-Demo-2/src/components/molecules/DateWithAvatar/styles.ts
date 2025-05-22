import MuiTypography from "@components/atoms/Typography";
import { Stack, styled } from "@mui/material";
import theme from '../../../theme/theme';

export const Root = styled(Stack)({
  alignItems: "center",
  flexDirection: "row",
  gap: theme.custom.spacing.rootGapRow,
  maxWidth: theme.custom.dimensions.rootMaxWidth,
  minHeight: theme.custom.dimensions.rootMinHeight,
});

export const Container = styled(Stack)({
  minWidth: theme.custom.dimensions.containerMinWidth,
  minHeight: theme.custom.dimensions.containerMinHeight,
  gap: theme.custom.spacing.containerGap,
});

export const MonthText = styled(MuiTypography)({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.custom.fontWeights.regular,
  fontSize: theme.custom.fontSizes.month,
  lineHeight: theme.custom.lineHeights.month,
  letterSpacing: theme.custom.letterSpacing.cryptoFiat,
  textAlign: 'left',
  color: theme.palette.text.secondary,
});

export const DayText = styled(MuiTypography)({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.custom.fontWeights.medium,
  fontSize: theme.custom.fontSizes.day,
  lineHeight: theme.custom.lineHeights.day,
  letterSpacing: theme.custom.letterSpacing.day,
  textAlign: 'left',
  color: theme.palette.text.primary,
});
