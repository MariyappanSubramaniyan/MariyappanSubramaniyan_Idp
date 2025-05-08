import { StyledTableRow, StyledTableCell } from "./style";
import BaseCheckbox from "@components/atoms/CheckBox";
import { IContractRow } from "@utils/interfaces";

const ContractRow = ({row,checked,onCheck,showCheckbox = true,}: {
  row: IContractRow;
  checked: boolean;
  onCheck: () => void;
  showCheckbox?: boolean;}) => (
    
  <StyledTableRow>
    {showCheckbox && (
      <StyledTableCell>
        <BaseCheckbox checked={checked} onChange={onCheck} />
      </StyledTableCell>
    )}
    <StyledTableCell>{row.name}</StyledTableCell>
    <StyledTableCell>{row.status}</StyledTableCell>
    <StyledTableCell>{row.type}</StyledTableCell>
    <StyledTableCell>{row.perPayment}</StyledTableCell>
    <StyledTableCell>{row.totalFinanced}</StyledTableCell>
    <StyledTableCell>{row.totalAvailable}</StyledTableCell>
  </StyledTableRow>
);

export default ContractRow;
