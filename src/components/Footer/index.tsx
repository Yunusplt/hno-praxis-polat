import React from "react";
import { Box, Grid, Typography, Link, Divider, Container } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f8f8f8",
        color: "black",
        py: 4,
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4} textAlign={"center"}>
            <Typography variant="h6" gutterBottom>
              Kontakt
            </Typography>
            <Typography variant="body2">Musterstraße 1</Typography>
            <Typography variant="body2">12345 Musterstadt</Typography>
            <Typography variant="body2">Telefon: +49 123 456789</Typography>
            <Typography variant="body2">Email: info@praxis.de</Typography>
          </Grid>
          <Grid item xs={12} md={4} textAlign={"center"}>
            <Typography variant="h6" gutterBottom>
              Seiten
            </Typography>
            <Link href="/" color="inherit" underline="hover" display="block">
              Home
            </Link>
            <Link
              href="/services"
              color="inherit"
              underline="hover"
              display="block"
            >
              Leistungen
            </Link>
            <Link
              href="/about"
              color="inherit"
              underline="hover"
              display="block"
            >
              Über Uns
            </Link>
            <Link
              href="/contact"
              color="inherit"
              underline="hover"
              display="block"
            >
              Kontakt
            </Link>
          </Grid>
          <Grid item xs={12} md={4} textAlign={"center"}>
            <Typography variant="h6" gutterBottom>
              Linken
            </Typography>
            <Link
              href="/datenschutz"
              color="inherit"
              underline="hover"
              display="block"
            >
              Datenschutz
            </Link>
            <Link
              href="/impressum"
              color="inherit"
              underline="hover"
              display="block"
            >
              Impressum
            </Link>
          </Grid>
        </Grid>

        {/* Alt Bölüm: Copyright */}
        <Divider sx={{ my: 3 }} />
        <Box textAlign="center">
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Ihre Praxis. Alle Rechte vorbehalten.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
