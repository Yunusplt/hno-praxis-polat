import { Box, Container, Typography, Link } from "@mui/material";
import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Topbar = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", py: "5px" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            color: "#888",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              justifyContent: { xs: "center", sm: "flex-start" },
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            {/* Phone */}
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <LocalPhoneIcon fontSize="small" />
              <Link
                href="tel:071150091363"
                sx={{ textDecoration: "none", color: "black" }}
              >
                071150091363
              </Link>
            </Typography>
            {/* Mail  */}
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <EmailIcon fontSize="small" />
              <Link
                href="mailto:info@hnopolat.de"
                sx={{ textDecoration: "none", color: "black" }}
              >
                info@hnopolat.de
              </Link>
            </Typography>
          </Box>
          {/* Online Reservation */}
          <Typography
            variant="body1"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <CalendarMonthIcon fontSize="small" />
            <Link
              href="/online-termin"
              sx={{ textDecoration: "none", color: "black" }}
            >
              Online Termin
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Topbar;
