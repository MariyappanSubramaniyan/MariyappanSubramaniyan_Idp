import { Divider as MuiDivider, DividerProps } from "@mui/material";

interface IDividerProps extends DividerProps {
  myCustomProp?: string;
}

const DividerAtom = ({ myCustomProp, ...props }: IDividerProps) => {
  return <MuiDivider {...props}> {myCustomProp} </MuiDivider>;
};

export default DividerAtom;
