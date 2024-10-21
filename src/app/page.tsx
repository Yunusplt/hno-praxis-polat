import { Box, Typography } from "@mui/material";
import Image from "next/image";
import HomePageImage from "@/assets/images/HomePageImage.jpg";

async function getData() {
  const response = await fetch(process.env.BASE_URL + "/api/appointments");
  const appointments = await response.json();
  console.log(appointments);
  return appointments;
}

export default async function Home() {
  const appointments = await getData();
  return (
    <main>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",

          "& img": {
            objectFit: "cover",
            objectPosition: "center",
          },
        }}
      >
        <Image src={HomePageImage} alt="Logo" fill priority sizes="100%" />
      </Box>

      <Box>
        <Typography variant="h1" align="center" height="100vh">
          HNO Praxis Esslingen | Dr. Bahtiyar Polat
        </Typography>
        <Typography variant="h2" align="center">
          {JSON.stringify(appointments)}
        </Typography>
      </Box>
    </main>
  );
}
