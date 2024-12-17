import { Container } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import ServiceImage2 from "@/assets/images/services/Leistung2.jpg";
import ServiceImage3 from "@/assets/images/services/Leistung3.jpg";
import ServiceImage4 from "@/assets/images/services/Leistung4.jpg";
import ServiceImage5 from "@/assets/images/services/Leistung5.jpg";
import ServiceImage6 from "@/assets/images/services/Leistung6.jpg";
import ServiceImage7 from "@/assets/images/services/Leistung7.jpg";

const Services = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 2,
        padding: 2,
        bgcolor: "#f5f5f5",
        py: "4rem",
      }}
    >
      <Card sx={{ maxWidth: 300 }}>
        <Image
          src={ServiceImage2}
          alt="leistungen-1"
          width={300}
          height={160}
          priority
        />
        <CardContent
          sx={{
            minHeight: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" component="div" textAlign={"center"}>
            Riech- und Schmecktests
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" fullWidth>
            Mehr erfahren
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 300 }}>
        <Image
          src={ServiceImage7}
          alt="leistungen-2"
          width={300}
          height={160}
          priority
        />
        <CardContent
          sx={{
            minHeight: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" component="div" textAlign={"center"}>
            Allergietests
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" fullWidth>
            Mehr erfahren
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 300 }}>
        <Image
          src={ServiceImage3}
          alt="leistungen-3"
          width={300}
          height={160}
          priority
        />
        <CardContent
          sx={{
            minHeight: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" component="div" textAlign={"center"}>
            Gleichgewichtsuntersuchung
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" fullWidth>
            Mehr erfahren
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 300 }}>
        <Image
          src={ServiceImage4}
          alt="leistungen-4"
          width={300}
          height={160}
          priority
        />
        <CardContent
          sx={{
            minHeight: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" component="div" textAlign={"center"}>
            Hörtest
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" fullWidth>
            Mehr erfahren
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 300 }}>
        <Image
          src={ServiceImage5}
          alt="leistungen-5"
          width={300}
          height={160}
          priority
        />
        <CardContent
          sx={{
            minHeight: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" component="div">
            Hörgeräteberatung
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" fullWidth>
            Mehr erfahren
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 300 }}>
        <Image
          src={ServiceImage6}
          alt="leistungen-6"
          width={300}
          height={160}
          priority
        />
        <CardContent
          sx={{
            minHeight: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" component="div" textAlign={"center"}>
            Kehlkopf- und Stimmbanduntersuchung
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" fullWidth>
            Mehr erfahren
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Services;
