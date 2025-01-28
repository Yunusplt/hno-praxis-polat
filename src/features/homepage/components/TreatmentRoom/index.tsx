import * as React from "react";
// import { styled } from "@mui/material/styles";

// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { Box, Container, Typography } from "@mui/material";

import OpenningHoursTable from "@/features/contact/components/OpenningHoursTable";
import Image from "next/image";
import TreatmentRoomImage from "@/assets/images/Allgemeine.jpg";
import WaitingRoamImage from "@/assets/images/Wartezimmer.jpg";
import DeskImage from "@/assets/images/Empfäng.jpg";
import Carousel from "react-bootstrap/Carousel";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
//   ...theme.applyStyles("dark", {
//     backgroundColor: "#1A2027",
//   }),
// }));

export default function TreatmentRoom() {
  return (
    <Container sx={{ my: 15 }}>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          size={12}
          textAlign={{
            xs: "center",
            md: "left",
          }}
        >
          <Typography variant="h4" component="h2">
            Unsere Sprechzeiten
          </Typography>
        </Grid>
        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            "& div": {
              backgroundColor: "#f8f8f8",
              width: "100%",
            },
            "& h2": {
              mb: 2,
            },
          }}
        >
          <OpenningHoursTable />
        </Grid>
        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
          sx={{
            width: "100%",
          }}
        >
          {/* <Box
            sx={{
              position: "relative",
              height: "570px",
              width: "320px",
              borderRadius: 3,
              overflow: "hidden",
            }}
          >
           
          </Box> */}
          <Box
            sx={{
              "& img": {
                borderRadius: 3,
                height: {
                  xs: "250px",
                  sm: "320px",
                  md: "280px",
                  lg: "320px",
                },
                width: {
                  xs: "100%",
                  md: "570",
                },
              },
            }}
          >
            <Carousel fade>
              <Carousel.Item interval={2000}>
                <Image src={TreatmentRoomImage} alt="Behandlungszimmer-Bild" />
                <Carousel.Caption>
                  <h3>Behandlungzimmer</h3>
                  {/* <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <Image src={WaitingRoamImage} alt="Wartezimmer-Bild" />
                <Carousel.Caption>
                  <h3>Wartezimmer</h3>
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <Image src={DeskImage} alt="Empfäng-Bild" />
                <Carousel.Caption>
                  <h3>Empfangsbereich</h3>
                  {/* <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
