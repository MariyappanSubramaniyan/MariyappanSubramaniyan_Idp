import type { AmountWithFiatProps } from '@utils/interface'
import { Root,CryptoText,FiatText } from './styles'

const AmountWithFiat = ({ crypto, fiat }: AmountWithFiatProps) => (
  <Root>
    <CryptoText variant="body1">{crypto}</CryptoText>
    <FiatText variant="caption">{fiat}</FiatText>
  </Root>
)

export default AmountWithFiat
