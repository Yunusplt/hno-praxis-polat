"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Logo from "@/assets/images/logos/HNOPolatLogo.png";
import { pages } from "../../utils/pages";
import { useRouter } from "next/navigation";
import {
  List,
  Drawer,
  Divider,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import {
  styleDrawer,
  styleLogoMobileView,
  styleLogoDesktopView,
} from "../style";
import InfoModal from "@/components/Modals/InfoModal";

function Navbar() {
  //! States
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  //! hooks
  const router = useRouter();

  //! Functions
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

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

  const handleNavigation = (href: string, title: string) => {
    if (title === "Online Termin") {
      handleOpenDialog();
      return;
    }

    router.push(href);
  };

  return (
    <Container maxWidth="lg">
      <Toolbar disableGutters>
        {/* Desktop LOGO */}
        <Box onClick={() => router.push("/")} sx={styleLogoDesktopView}>
          <Image src={Logo} alt="Logo" />
        </Box>
        {/* MOBILE VIEW */}
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            color="success"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={styleDrawer}
          >
            <Box sx={{ textAlign: "center", mt: 1 }}>
              <Box onClick={() => router.push("/")}>
                <Image src={Logo} alt="Logo" height={50} width={150} />
              </Box>
              <Divider />
              <List>
                {pages.map((item) => (
                  <Fragment key={item.title}>
                    <ListItem disablePadding>
                      <ListItemButton
                        sx={{ textAlign: "center" }}
                        onClick={() => {
                          handleDrawerToggle();
                          handleNavigation(item.href, item.title);
                        }}
                      >
                        <ListItemText primary={item.title} />
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                  </Fragment>
                ))}
              </List>
            </Box>
          </Drawer>
        </Box>
        {/* MOBILE LOGO */}
        <Box onClick={() => router.push("/")} sx={styleLogoMobileView}>
          <Image src={Logo} alt="Logo" height={50} width={150} />
        </Box>
        {/* DESKTOP VIEW PAGES */}
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page.title}
              sx={{ my: 2, color: "black", display: "block", fontWeight: 600 }}
              onClick={() => handleNavigation(page.href, page.title)}
            >
              {page.title}
            </Button>
          ))}
        </Box>
        <Box sx={{ flexGrow: 0 }} />
        <InfoModal
          open={openDialog}
          onClose={handleCloseDialog}
          onContinue={handleContinue}
        />
      </Toolbar>
    </Container>
  );
}

export default Navbar;
