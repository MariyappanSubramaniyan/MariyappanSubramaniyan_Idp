import { Root,Container,MonthText,DayText } from './styles';
import MuiAvatar from '@components/atoms/Avatar'
import type { DateWithAvatarProps } from '@utils/interface';

const DateWithAvatar = ({ month, day, avatarSrc, avatarAlt }: DateWithAvatarProps) => (
  <Root>
    <Container>
      <MonthText variant="caption">{month}</MonthText>
      <DayText variant="subtitle2">{day}</DayText>
    </Container>
    <MuiAvatar src={avatarSrc} alt={avatarAlt} />
  </Root>
)

export default DateWithAvatar
