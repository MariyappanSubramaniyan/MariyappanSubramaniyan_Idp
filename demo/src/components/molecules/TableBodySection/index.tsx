import TableBodyField from "../../atoms/TableBody";
import TableRowField from "../../atoms/TableRow";
import TableCellField from "../../atoms/TableCell";
import { TableBodyContent } from "../../../utils/data";
import { styled } from "@mui/material";
import theme from "../../../theme/theme";

const StyledTableRow = styled(TableRowField)({
  "&:hover": {
    backgroundColor: theme.palette.grey[400],
  },
});

const StyledFirstColumnCell = styled(TableCellField)({
  color: theme.palette.primary.main
});

const StyledSecondColumnCell = styled(TableCellField)({
  color: theme.palette.primary.main,
  "& span": {
    display: "inline-block",
    padding: theme.spacing(0.25, 1),
    border: `1px solid ${theme.palette.grey[100]}`,
    backgroundColor: theme.palette.grey[100],
    borderRadius: theme.shape.borderRadius,
  },
});

const TableBodySection = () => (
  <TableBodyField>
    {TableBodyContent.map((row, i) => (
      <StyledTableRow key={i}>
        <StyledFirstColumnCell>{row.Name}</StyledFirstColumnCell>
        <StyledSecondColumnCell>
          <span>{row.STATUS}</span>
        </StyledSecondColumnCell>
        <TableCellField>{row.PRE_NOTICE_DATE}</TableCellField>
        <TableCellField>{row.POST_NOTICE_DATE}</TableCellField>
      </StyledTableRow>
    ))}
  </TableBodyField>
);

export default TableBodySection;
