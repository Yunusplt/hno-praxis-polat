import React from "react";
import Grid from "@mui/material/Grid2";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import { tableRows } from "./utils";
import { Typography, Box } from "@mui/material";
import { styleOpeningHoursTitle } from "../../style";

const OpeningHours = () => {
  return (
    <>
      <Grid size={{ xs: 12, md: 6 }} order={{ xs: 3, md: 2 }}>
        <Typography sx={styleOpeningHoursTitle} component="h2">
          Sprechzeiten
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }} order={4}>
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
      </Grid>
    </>
  );
};

export default OpeningHours;
