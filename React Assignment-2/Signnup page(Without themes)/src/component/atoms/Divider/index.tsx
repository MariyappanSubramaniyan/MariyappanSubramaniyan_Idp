import { Divider as MuiDivider } from "@mui/material";
import { IDividerProps } from "@/utils/interface";

const DividerAtom = ({ myCustomProp, ...props }: IDividerProps) => {
  return <MuiDivider {...props}>{myCustomProp}</MuiDivider>;
};

export default DividerAtom;
