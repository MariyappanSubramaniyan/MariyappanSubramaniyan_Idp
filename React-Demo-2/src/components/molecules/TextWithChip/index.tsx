import type { TextWithChipProps } from '@utils/interface'
import { Root, Title, Subtitle, StyledChip, InnerStack } from './styles'

const TextWithChip = ({ title, subtitle, chipLabel }: TextWithChipProps) => (
  <Root>
    <Title variant="subtitle1">{title}</Title>
    <InnerStack>
      <Subtitle variant="caption">{subtitle}</Subtitle>
      <StyledChip label={chipLabel} size="small" />
    </InnerStack>
  </Root>
)

export default TextWithChip
