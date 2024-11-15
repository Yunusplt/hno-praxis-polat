import { Box } from "@mui/material";
import Image from "next/image";
import HomePageImage from "@/assets/images/HomePageImage.jpg";

export default async function Home() {
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
    </main>
  );
}
