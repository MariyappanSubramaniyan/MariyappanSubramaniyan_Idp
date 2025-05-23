import ProcessingIcon from "../assets/Icons/processing-icon.svg"
import FailedIcon from "../assets/Icons/Failed-icon.svg"
import SuccessIcon from "../assets/Icons/Success-icon.svg"

export const ROWS = [
  {
    date: {
      month: 'FEB',
      day: 21,
      avatarSrc: ProcessingIcon,
      avatarAlt: 'User Avatar',
    },
    details: {
      title: 'Bitcoin',
      subtitle: 'From London',
      chipLabel: 'Purchased',
    },
    amount: {
      crypto: '+0.0010 BTC',
      fiat: '+$900',
    },
  },
  {
    date: {
      month: 'FEB',
      day: 22,
      avatarSrc: FailedIcon,
      avatarAlt: 'User Avatar',
    },
    details: {
      title: 'Ethereum',
      subtitle: 'From Paris',
      chipLabel: 'Received',
    },
    amount: {
      crypto: '+0.2500 ETH',
      fiat: '+$700',
    },
  },
  {
    date: {
      month: 'FEB',
      day: 23,
      avatarSrc: SuccessIcon,
      avatarAlt: 'User Avatar',
    },
    details: {
      title: 'Tether',
      subtitle: 'From Dubai',
      chipLabel: 'Purchased',
    },
    amount: {
      crypto: '-100.00 USDT',
      fiat: '-$100',
    },
  },
]

export const SEARCH_LABEL = "Search all assets"
