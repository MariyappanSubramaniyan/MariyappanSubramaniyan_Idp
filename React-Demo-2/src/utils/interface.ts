export interface AmountWithFiatProps {
  crypto: string
  fiat: string
}

export interface DateWithAvatarProps {
  month: string
  day: string | number
  avatarSrc: string
  avatarAlt: string
}

export interface SearchFieldProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface TextWithChipProps {
  title: string
  subtitle: string
  chipLabel: string
}

export interface TransactionRow {
  date: DateWithAvatarProps
  details: TextWithChipProps
  amount: AmountWithFiatProps
}

export interface TransactionTableProps {
  rows: TransactionRow[]
}