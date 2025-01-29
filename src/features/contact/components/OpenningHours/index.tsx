import React from "react";
import Grid from "@mui/material/Grid2";

import { Typography } from "@mui/material";
import { styleOpeningHoursTitle } from "../../style";
import OpenningHoursTable from "../OpenningHoursTable";

const OpeningHours = () => {
  return (
    <>
      <Grid size={{ xs: 12, md: 6 }} order={{ xs: 3, md: 2 }}>
        <Typography sx={styleOpeningHoursTitle} component="h2">
          Sprechzeiten
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }} order={4}>
        <OpenningHoursTable />
      </Grid>
    </>
  );
};

export default OpeningHours;
