import { TableRow as MuiTableRow, TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';
import Chip from '../../atoms/Chip';  // Assuming you have a reusable Chip component
import theme from '../../../theme/theme';

const StyledTableRow = styled(MuiTableRow)(() => ({
  '&:hover': {
    backgroundColor: theme.custom.colors.ROW_HOVER_COLOR, 
  },
}));

const StyledChip = styled(Chip)(() => ({
  minWidth: theme.custom.chipStyle.MIN_WIDTH,
  minHeight: theme.custom.chipStyle.MIN_HEIGHT,
  borderRadius: theme.custom.chipStyle.BORDER_RADIUS,
  backgroundColor: theme.custom.colors.CHIP_BACKGROUND_COLOR, // Background from theme
  padding: `${theme.custom.chipStyle.PADDING_Y}px ${theme.custom.chipStyle.PADDING_X}px`,
  fontWeight: 500,
  fontSize: '0.875rem',
  lineHeight: 1.5,
  color: theme.custom.colors.CHIP_TEXT_COLOR, // Text color from theme
}));

interface TableRowProps {
  data: string[];
}

const TableRow = ({ data }: TableRowProps) => {
  return (
    <StyledTableRow>
      {data.map((value, index) => (
        <TableCell
          key={index}
          style={index === 0 ? { color: theme.custom.colors.FIRST_COLUMN_TEXT_COLOR } : {}}
        >
          {index === 1 ? <StyledChip label={value} /> : value}
        </TableCell>
      ))}
    </StyledTableRow>
  );
};

export default TableRow;
