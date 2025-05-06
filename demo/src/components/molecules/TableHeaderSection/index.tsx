import TableHeaderField from "../../atoms/TableHeader";
import TableRowField from "../../atoms/TableRow";
import TableCellField from "../../atoms/TableCell";
import { TableHeader } from "../../../utils/data";
import theme from "../../../theme/theme";
import { styled } from "@mui/material";

const StyledTableHeader = styled(TableHeaderField)({
  backgroundColor: theme.palette.background.default,
});

const TableHeaderSection = () => (
  <StyledTableHeader>
    <TableRowField>
      {TableHeader.map((head, i) => (
        <TableCellField key={i}>{head}</TableCellField>
      ))}
    </TableRowField>
  </StyledTableHeader>
);

export default TableHeaderSection;
