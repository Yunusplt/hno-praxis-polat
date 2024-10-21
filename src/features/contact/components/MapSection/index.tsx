import React from "react";
import Grid from "@mui/material/Grid2";
import { iframeUrl } from "./utils";
import { Typography } from "@mui/material";
import { styleMapTitle } from "../../style";

const MapSection = () => {
  return (
    <>
      <Grid size={12} order={6}>
        <Typography sx={styleMapTitle} component="h2">
          Unser Standort
        </Typography>
        <iframe
          src={iframeUrl}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          width="100%"
          height="400"
        ></iframe>
      </Grid>
    </>
  );
};

export default MapSection;
