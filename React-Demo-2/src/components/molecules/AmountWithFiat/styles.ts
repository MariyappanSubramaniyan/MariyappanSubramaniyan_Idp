import MuiTypography from "@components/atoms/Typography";
import { Stack, styled } from "@mui/material";
import theme from '../../../theme/theme';  

export const Root = styled(Stack)({
  width: theme.custom.dimensions.rootWidth,
  height: theme.custom.dimensions.rootHeight,
  gap: theme.custom.spacing.rootGap,
});

export const CryptoText = styled(MuiTypography)({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.custom.fontWeights.medium,
  fontSize: theme.custom.fontSizes.crypto,
  lineHeight: theme.custom.lineHeights.crypto,
  letterSpacing: '1%',
  textAlign: 'right',
  color: theme.palette.text.primary,
});

export const FiatText = styled(MuiTypography)({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.custom.fontWeights.regular,
  fontSize: theme.custom.fontSizes.fiat,
  lineHeight: theme.custom.lineHeights.fiat,
  letterSpacing: '1%',
  textAlign: 'right',
  color: theme.palette.text.secondary,
});
