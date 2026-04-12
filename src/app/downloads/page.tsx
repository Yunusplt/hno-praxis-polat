import React from "react";
import { Box, Container, Typography, Link, Paper } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const DownloadsPage = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Downloads
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Im Folgenden stellen wir Ihnen verschiedene Unterlagen und Formulare zum
        Download zur Verfügung.
      </Typography>

      <Paper
        elevation={0}
        sx={{
          p: 2.5,
          borderRadius: 2,
          border: "1px solid",
          borderColor: "grey.300",
          display: "flex",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        <DownloadIcon color="action" />

        <Link
          href="/downloads/Datenschutzerklaerung.pdf"
          download="Datenschutzerklärung.pdf"
          underline="hover"
          sx={{ fontSize: 16, fontWeight: 500 }}
        >
          Datenschutzerklärung.pdf
        </Link>
      </Paper>
    </Container>
  );
};

export default DownloadsPage;
