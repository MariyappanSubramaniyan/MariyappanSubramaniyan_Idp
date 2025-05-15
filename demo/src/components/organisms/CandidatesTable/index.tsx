import { styled } from '@mui/material/styles';
import {
  Table,
  TableHead,
  TableBody,
  TableContainer,
  Paper,
  TableRow as MuiTableRow,
  TableCell,
  Box
} from '@mui/material';
import TableRow from '../../molecules/TableRow';
import Typography from '../../atoms/Typography';
import { TABLE_HEADER, TABLE_BODY_CONTENT, TABLE_TITLE } from '../../../utils/constants';
import theme from '../../../theme/theme';

const StyledBox = styled(Box)({
  width: theme.custom.dimensions.CANDIDATE_TABLE_WIDTH,
  height: theme.custom.dimensions.CANDIDATE_TABLE_HEIGHT,
  top: theme.custom.position.TOP,
  left: theme.custom.position.LEFT,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
});

const StyledTypography = styled(Typography)({
  marginBottom: theme.spacing(2),
  marginLeft: theme.spacing(2),
  marginTop: theme.spacing(5),
  color: theme.palette.text.primary,
});

const CandidatesTable = () => {
  return (
    <StyledBox>
      <StyledTypography variant="candidateTitle" gutterBottom>
        {TABLE_TITLE}
      </StyledTypography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <MuiTableRow>
              {TABLE_HEADER.map((header, index) => (
                <TableCell key={index}>{header}</TableCell>
              ))}
            </MuiTableRow>
          </TableHead>
          <TableBody>
            {TABLE_BODY_CONTENT.map((candidate, index) => (
              <TableRow
                key={index}
                data={[
                  candidate.NAME,
                  candidate.STATUS,
                  candidate.PRE_NOTICE_DATE,
                  candidate.POST_NOTICE_DATE
                ]}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledBox>
  );
};

export default CandidatesTable;
