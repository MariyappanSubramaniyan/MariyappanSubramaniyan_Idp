import { Paper, styled } from "@mui/material";
import TableField from "../../atoms/Table";
import TableContainerField from "../../atoms/TableContainer";
import TableHeaderSection from "../../molecules/TableHeaderSection";
import TableBodySection from "../../molecules/TableBodySection";
import { TableTitle } from "../../../utils/data";
import theme from "../../../theme/theme";
import Typography from "../../atoms/Typography";

const StyledTableContainer = styled(TableContainerField)({
    display:"flex",
    flexDirection:"column",
    maxWidth: "1056px",
    minHeight: "585px",
    overflow: "hidden",
    marginLeft:theme.spacing(2),
    marginTop:theme.spacing(2)
  });

  const HeaderText = styled(Typography)({
    fontFamily: theme.typography.fontFamily,
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0%',
    verticalAlign: 'middle',
    marginBottom: theme.spacing(2), 
    marginTop: theme.spacing(2),
    marginLeft:theme.spacing(1.5),
    color:theme.typography.subtitle1.color
  });
  

const TableSection = () => (
  <StyledTableContainer component={Paper}>
    <HeaderText text={TableTitle} variant="subtitle1"/>
    <TableField>
      <TableHeaderSection />
      <TableBodySection />
    </TableField>
  </StyledTableContainer>
);

export default TableSection;
