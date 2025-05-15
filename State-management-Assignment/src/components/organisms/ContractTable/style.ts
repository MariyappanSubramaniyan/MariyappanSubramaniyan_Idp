import { styled, TableCell, TableRow, TableContainer } from "@mui/material";
import { theme } from "../../../theme/theme";

export const StyledTableContainer = styled(TableContainer)({
  backgroundColor: theme.palette.background.default
});

export const StyledTableRow = styled(TableRow)({
  borderBottom: "none",
});

export const StyledTableCell = styled(TableCell)({
  color: theme.palette.text.primary,
  borderBottom: "none",
});
