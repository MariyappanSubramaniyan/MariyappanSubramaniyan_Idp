import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import Image from '../../atoms/Images';

interface IInputFieldProps {
  placeholder: string;
  value?: string;
  startImageSrc?: string;
  endImageSrc?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  endImageAction?: () => void;
}

const InputField = ({placeholder,value,startImageSrc,endImageSrc,type = 'text',onChange,endImageAction,
  ...props}: IInputFieldProps) => {
  return (
    <TextField
      placeholder={placeholder}
      value={value}
      type={type}
      onChange={onChange}
      InputProps={{
        startAdornment: startImageSrc ? (
          <InputAdornment position="start">
            <Image src={startImageSrc} alt="Start Icon" />
          </InputAdornment>
        ) : undefined,
        endAdornment: endImageSrc ? (
          <InputAdornment position="end">
            <div onClick={endImageAction} style={{ cursor: 'pointer' }}>
              <Image src={endImageSrc} alt="End Icon" />
            </div>
          </InputAdornment>
        ) : undefined,
      }}
      {...props}
    />
  );
};

export default InputField;
