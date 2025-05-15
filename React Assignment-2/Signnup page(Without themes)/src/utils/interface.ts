import { ButtonProps, DividerProps, BoxProps, TextFieldProps, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

export interface IButtonProps extends ButtonProps {
  label: string;
}

export interface IDividerProps extends DividerProps {
  myCustomProp?: string;
}

export interface IImageProps extends BoxProps {
  src: string;
  alt: string;
}

export interface IInputFieldProps extends Omit<TextFieldProps, 'value' | 'onChange'> {
  placeholder: string;
  value?: string;
  startImageSrc?: string;
  endImageSrc?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  endImageAction?: () => void;
}

export interface ITypographyProps extends TypographyProps {
  text: string;
}

export interface SignupPageTemplateProps {
  leftComponent: ReactNode;
  rightComponent: ReactNode;
}