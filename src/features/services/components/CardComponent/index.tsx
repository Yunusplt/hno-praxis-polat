import { Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { serviceData1 } from "../../utils";

const CardComponent = () => {
  return (
    <>
      {serviceData1.map((item, index) => (
        <Card
          sx={{
            maxWidth: 300,
            "& img": {
              objectFit: "contain",
              borderBottom: "2px solid #3333",
            },
          }}
          key={"service-photos" + index}
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={300}
            height={300}
            priority
            sizes="50%"
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
              {item.title}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default CardComponent;
