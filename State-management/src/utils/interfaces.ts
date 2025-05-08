import { ButtonProps, CheckboxProps, TypographyProps,BoxProps} from '@mui/material'

export interface IButton extends ButtonProps {
  label: string
}

export interface ICheckbox extends CheckboxProps {
  customProp?: string
}

export interface IImage extends BoxProps {
  src: string
  alt: string
}

export interface ITypography extends TypographyProps {
  text: string
}

export interface AcclerationButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export interface ContractTableRow {
  name: string;
  status: string;
  type: string;
  perPayment: string;
  totalFinanced: string;
  totalAvailable: string;
}
export interface IContractRow {
  name: string;
  status: string;
  type: string;
  perPayment: string;
  totalFinanced: string;
  totalAvailable: string;
}

export interface CashKickTableProps {
  rows: IContractRow[];
}