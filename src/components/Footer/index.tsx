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
            <Typography variant="body2">Martinstraße 11</Typography>
            <Typography variant="body2">73728 Esslingen am Neckar</Typography>
            <Typography variant="body2">Telefon: 07115 0091363</Typography>
            <Typography variant="body2">Email: info@hnopolat.de</Typography>
          </Grid>
          <Grid item xs={12} md={4} textAlign={"center"}>
            <Typography variant="h6" gutterBottom>
              Seiten
            </Typography>
            <Link href="/" color="inherit" underline="hover" display="block">
              Home
            </Link>
            <Link
              href="/ueber-mich"
              color="inherit"
              underline="hover"
              display="block"
            >
              Über mich
            </Link>
            <Link
              href="/leistungen"
              color="inherit"
              underline="hover"
              display="block"
            >
              Leistungen
            </Link>
            <Link
              href="https://www.termed.de/arzt/9154/bahtiyar-polat"
              color="inherit"
              underline="hover"
              display="block"
            >
              Online Termin
            </Link>
            <Link
              href="/kontakt"
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
            © {new Date().getFullYear()} HNO Praxis Polat. Alle Rechte
            vorbehalten.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
