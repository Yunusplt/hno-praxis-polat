import React from "react";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import { tableRows } from "../OpenningHours/utils";
import { Box } from "@mui/material";

const OpenningHoursTable = () => {
  return (
    <Box>
      <TableContainer component={Paper} sx={{ p: 2 }}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>vormittags</TableCell>
              <TableCell>nachmittags</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRows.map((row) => (
              <TableRow key={row.day}>
                <TableCell component="th" scope="row">
                  {row.day}
                </TableCell>
                <TableCell>{row.morning}</TableCell>
                <TableCell>{row.afternoon}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OpenningHoursTable;
