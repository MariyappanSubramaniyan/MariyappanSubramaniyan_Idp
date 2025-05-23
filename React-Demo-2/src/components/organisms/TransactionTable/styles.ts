import { styled, TableCell, TableContainer, TableRow, Stack } from "@mui/material"
import theme from "../../../theme/theme"

export const TableWrapper = styled(Stack)({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
})

export const TopBar = styled(Stack)({
  display: 'flex',
  paddingTop: theme.spacing(2),
  paddingRight: theme.spacing(4),
  marginLeft: theme.custom.spacing.tableTopBarMarginLeft,
})

export const TableRowStack = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const LeftContent = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(theme.custom.spacing.leftContentGap),
  alignItems: 'center',
})

export const StyledTableContainer = styled(TableContainer)({
  display: 'flex',
  borderRadius: theme.custom.inputField.borderRadius,
  border: `1px solid ${theme.custom.inputField.borderColor}`,
  boxShadow: 'none',
  overflowX: 'hidden',
})

export const StyledTableRow = styled(TableRow)({
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.custom.tableRowHover,
  },
})

export const StyledTableCell = styled(TableCell)({
  padding: `${theme.spacing(1.5)} ${theme.spacing(2)}`,
  borderBottom: `1px solid ${theme.custom.inputField.borderColor}`,
})
