import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import HomePageImage from "@/assets/images/WZ3.jpeg";
import {
  styleLandingPageBox,
  styleLandingPageButton,
  styleLandingPageTextBox,
} from "../../style";
import InfoModal from "@/components/Modals/InfoModal";

const LandingPage = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleContinue = () => {
    window.open(
      "https://www.termed.de/arzt/9154/bahtiyar-polat",
      "_blank",
      "noopener,noreferrer"
    );
    handleCloseDialog();
  };

  return (
    <Box sx={styleLandingPageBox}>
      <Image
        src={HomePageImage}
        alt="HomePage Image"
        fill
        priority
        sizes="100%"
      />
      <Box sx={styleLandingPageTextBox}>
        <Typography variant="h2" component="h1" gutterBottom color="warning">
          Herzlich Willkommen!
        </Typography>
        <Typography variant="h6" component="p">
          Es freut uns sehr, Sie auf unserer Homepage begrüßen zu dürfen. <br />
          In unserer HNO-Praxis kümmern wir uns um Ihre Gesundheit mit größter
          Sorgfalt und Professionalität.
        </Typography>
        <Button
          variant="contained"
          sx={styleLandingPageButton}
          onClick={handleOpenDialog}
        >
          Online Termin
        </Button>
      </Box>
      <InfoModal
        open={openDialog}
        onClose={handleCloseDialog}
        onContinue={handleContinue}
      />
    </Box>
  );
};

export default LandingPage;
