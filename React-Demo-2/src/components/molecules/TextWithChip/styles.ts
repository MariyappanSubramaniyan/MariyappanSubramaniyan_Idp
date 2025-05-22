import MuiChip from "@components/atoms/Chip"
import MuiTypography from "@components/atoms/Typography"
import { Stack, styled } from "@mui/material"
import theme from "../../../theme/theme"

export const Root = styled(Stack)({
  width: theme.custom.dimensions.textWithChipWidth,
  height: theme.custom.dimensions.textWithChipHeight,
  gap: theme.custom.spacing.rootGapRow,
})

export const Title = styled(MuiTypography)({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.custom.fontWeights.medium,
  fontSize: theme.custom.fontSizes.crypto,
  lineHeight: theme.custom.lineHeights.crypto,
  letterSpacing: theme.custom.letterSpacing.cryptoFiat,
  textAlign: 'left',
  color: theme.palette.text.primary,
})

export const Subtitle = styled(MuiTypography)({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.custom.fontWeights.regular,
  fontSize: theme.custom.fontSizes.fiat,
  lineHeight: theme.custom.lineHeights.fiat,
  letterSpacing: theme.custom.letterSpacing.cryptoFiat,
  textAlign: 'left',
  color: theme.palette.text.secondary,
})

export const StyledChip = styled(MuiChip)({
  width: theme.custom.dimensions.chipWidth,
  height: theme.custom.dimensions.chipHeight,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.custom.fontWeights.regular,
  fontSize: theme.custom.fontSizes.fiat,
  lineHeight: theme.custom.lineHeights.fiat,
  letterSpacing: theme.custom.letterSpacing.cryptoFiat,
  color: theme.palette.custom.chipText,
  padding: 0,
})

export const InnerStack = styled(Stack)({
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  columnGap: theme.spacing(1),
})
