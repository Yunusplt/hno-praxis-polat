import Image from "next/image";
import * as React from "react";
import Grid from "@mui/material/Grid2";
import Carousel from "react-bootstrap/Carousel";
import DeskImage from "@/assets/images/Empfäng.jpg";
import WaitingRoamImage from "@/assets/images/Wartezimmer.jpg";
import TreatmentRoomImage from "@/assets/images/Allgemeine.jpg";
import HearingRoomImage from "@/assets/images/Hörtestzimmer.jpg";
import OpenningHoursTable from "@/features/contact/components/OpenningHoursTable";
import { Box, Container, Typography } from "@mui/material";
import {
  styleOHTGrid,
  styleOTAIGrid,
  styleOTAIImagesBox,
  styleOTAITitle,
} from "../../style";

export default function OpenningTimeAndImages() {
  return (
    <Container sx={{ my: 15 }}>
      <Grid container spacing={2} sx={styleOTAIGrid}>
        <Grid size={12} sx={styleOTAITitle}>
          <Typography variant="h4" component="h2">
            Unsere Sprechzeiten
          </Typography>
        </Grid>
        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
          sx={styleOHTGrid}
        >
          <OpenningHoursTable />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ width: "100%" }}>
          <Box sx={styleOTAIImagesBox}>
            <Carousel fade>
              <Carousel.Item interval={2000}>
                <Image src={TreatmentRoomImage} alt="Behandlungszimmer-Bild" />
                <Carousel.Caption>
                  <h3>Behandlungszimmer</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <Image src={WaitingRoamImage} alt="Wartezimmer-Bild" />
                <Carousel.Caption>
                  <h3>Wartezimmer</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <Image src={DeskImage} alt="Empfäng-Bild" />
                <Carousel.Caption>
                  <h3>Empfangsbereich</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <Image src={HearingRoomImage} alt="Hörtestzimmer-Bild" />
                <Carousel.Caption>
                  <h3>Hörtestzimmer</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
