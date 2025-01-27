"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { serviceData1, serviceData2 } from "../../utils";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function ListComponent() {
  return (
    <>
      <Box textAlign={"center"}>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          In unserer Praxis bieten wir Ihnen vollumfängliche diagnostische und
          therapeutische Behandlungsverfahren aus dem gesamten Spektrum des
          HNO-Fachgebietes, angefangen vom Kleinkind bis ins hohe Lebensalter.
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          Durch unsere regelmäßigen Fort- und Weiterbildungen sind wir in der
          Lage, Ihnen die neuesten und innovativsten Untersuchungs- und
          Behandlungsmethoden auf der Basis langjähriger fachärztlicher
          Erfahrung zu gewährleisten.
        </Typography>
      </Box>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Demo>
            <List dense={true} sx={{ p: 0 }}>
              {serviceData1.map((item, index) => (
                <ListItem key={"service-list" + index}>
                  <ListItemIcon>
                    <KeyboardArrowRightIcon />
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItem>
              ))}
            </List>
          </Demo>
        </Grid>
        <Grid item xs={12} md={6}>
          <Demo>
            <List dense={true} sx={{ p: 0 }}>
              {serviceData2.map((item, index) => (
                <ListItem key={"service-list" + index}>
                  <ListItemIcon>
                    <KeyboardArrowRightIcon />
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItem>
              ))}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </>
  );
}
