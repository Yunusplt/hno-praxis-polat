import React from "react";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import MapIcon from "@mui/icons-material/Map";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useRouter } from "next/navigation";
import { Button, Stack, Typography } from "@mui/material";
import { styleLinksBox, styleLinksTitle } from "../../style";

const LinkSection = () => {
  //! hooks
  const router = useRouter();
  return (
    <>
      <Grid size={{ xs: 12, md: 6 }} order={1}>
        <Typography sx={styleLinksTitle} component="h2">
          Kontakt
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }} component={Paper} sx={styleLinksBox}>
        <Stack spacing={1}>
          <Typography
            variant="body1"
            component="a"
            href="tel:+0123456789"
            color="primary"
          >
            <LocalPhoneIcon /> +49123 456 789
          </Typography>
          <Typography
            variant="body1"
            component="a"
            href="mailto:info@hnopolat.com"
            color="primary"
          >
            <EmailIcon color="primary" /> info@hnopolat.com
          </Typography>
          <Typography variant="body1" component="p" color="primary">
            <MapIcon color="primary" />
            Martinstraße 11, <br /> 73728 Esslingen am Neckar
          </Typography>
          <Button
            variant="contained"
            startIcon={<CalendarMonthIcon />}
            sx={{ width: "155px", textTransform: "none" }}
            onClick={() => router.push("/online-termin")}
          >
            Online Termin
          </Button>
          <Button
            variant="contained"
            startIcon={<LocationOnIcon />}
            sx={{ width: "300px", textTransform: "none" }}
            onClick={() =>
              window.open(
                "https://www.google.com/maps/dir//Martinstraße+11,+73728+Esslingen+am+Neckar"
              )
            }
          >
            Anfahrt | Route durch Google Maps
          </Button>
        </Stack>
      </Grid>
    </>
  );
};

export default LinkSection;
