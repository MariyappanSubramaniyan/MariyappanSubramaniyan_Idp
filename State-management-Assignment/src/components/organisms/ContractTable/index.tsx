import {
  Table,
  TableHead,
  TableBody,
} from "@mui/material";
import {
  StyledTableContainer,
  StyledTableRow,
  StyledTableCell,
} from "./style";
import ContractRow from "@components/molecules/TableRow";
import BaseCheckbox from "@components/atoms/CheckBox";
import { IContractRow } from "@utils/interfaces";
import { TABLE_HEADERS } from "@utils/constants";

const ContractTable = ({
  rows,
  selectedIds,
  onToggleRow,
  onToggleAll,
  showCheckbox = true,
}: {
  rows: IContractRow[];
  selectedIds: number[];
  onToggleRow: (id: number, row: IContractRow) => void;
  onToggleAll?: () => void;
  showCheckbox?: boolean;
}) => (
  <StyledTableContainer>
    <Table>
      <TableHead>
        <StyledTableRow>
          {showCheckbox && (
            <StyledTableCell>
              <BaseCheckbox
                checked={selectedIds.length === rows.length && rows.length > 0}
                onChange={onToggleAll}
              />
            </StyledTableCell>
          )}
          {TABLE_HEADERS.map((header) => (
            <StyledTableCell key={header}>{header}</StyledTableCell>
          ))}
        </StyledTableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, i) => (
          <ContractRow
            key={i}
            row={row}
            checked={selectedIds.includes(i)}
            onCheck={() => onToggleRow(i, row)}
            showCheckbox={showCheckbox}
          />
        ))}
      </TableBody>
    </Table>
  </StyledTableContainer>
);

export default ContractTable;
