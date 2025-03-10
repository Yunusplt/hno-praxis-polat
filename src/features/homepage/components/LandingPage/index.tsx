import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import HomePageImage from "@/assets/images/WZ3.jpeg";
import { useRouter } from "next/navigation";
import {
  styleLandingPageBox,
  styleLandingPageButton,
  styleLandingPageTextBox,
} from "../../style";

const LandingPage = () => {
  const router = useRouter();
  return (
    <Box sx={styleLandingPageBox}>
      {/* Background Image */}
      <Image
        src={HomePageImage}
        alt="HomePage Image"
        fill
        priority
        sizes="100%"
      />
      {/* Text */}
      <Box sx={styleLandingPageTextBox}>
        <Typography variant="h2" component="h1" gutterBottom color="warning">
          Herzlich Willkommen!
        </Typography>
        <Typography variant="h6" component="p">
          Es freut uns sehr, Sie auf unserer Homepage begrüßen zu dürfen. <br />{" "}
          In unserer HNO-Praxis kümmern wir uns um Ihre Gesundheit mit größter
          Sorgfalt und Professionalität.
        </Typography>
        <Button
          variant="contained"
          sx={styleLandingPageButton}
          onClick={() =>
            router.push("https://www.termed.de/arzt/9154/bahtiyar-polat")
          }
        >
          Online Termin
        </Button>
      </Box>
    </Box>
  );
};

export default LandingPage;
