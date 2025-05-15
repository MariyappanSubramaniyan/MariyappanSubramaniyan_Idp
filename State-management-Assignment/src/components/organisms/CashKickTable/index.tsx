import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { CashKickTableProps } from "@utils/interfaces";

const CashKickTable = ({ rows }: CashKickTableProps) => (
  <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Type</TableCell>
          <TableCell>Per payment</TableCell>
          <TableCell>Total financed</TableCell>
          <TableCell>Total available</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>{row.type}</TableCell>
            <TableCell>{row.perPayment}</TableCell>
            <TableCell>{row.totalFinanced}</TableCell>
            <TableCell>{row.totalAvailable}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default CashKickTable;
