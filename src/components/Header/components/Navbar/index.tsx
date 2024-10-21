"use client";
import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Logo from "@/assets/images/logo2.png";
import Image from "next/image";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/navigation";

const drawerWidth = 240;
// const pages = ["Kontakt", "Über mich", "Leistungen"];
const pages = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Kontakt",
    href: "/kontakt",
  },
  {
    title: "Über mich",
    href: "/ueber-mich",
  },
  {
    title: "Leistungen",
    href: "/leistungen",
  },
];

// const navItems = ["Home", "Kontakt", "Über mich", "Leistungen"];
const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Kontakt",
    href: "/kontakt",
  },
  {
    title: "Über mich",
    href: "/ueber-mich",
  },
  {
    title: "Leistungen",
    href: "/leistungen",
  },
];

function Navbar() {
  //! States
  const [mobileOpen, setMobileOpen] = React.useState(false);

  //! hooks
  const router = useRouter();

  //! Functions
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Container maxWidth="lg">
      <Toolbar disableGutters>
        {/* LOGO */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexGrow: 1,
          }}
        >
          <Image src={Logo} alt="Logo" height={75} width={250} />
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
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              color: "black",
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
              <Image src={Logo} alt="Logo" height={50} width={150} />
              <Divider />
              <List>
                {navItems.map((item) => (
                  <ListItem key={item.title} disablePadding>
                    <ListItemButton
                      sx={{ textAlign: "center" }}
                      onClick={() => router.push(item.href)}
                    >
                      <ListItemText primary={item.title} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </Box>
        {/* MOBILE LOGO */}
        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
          }}
        >
          <Image src={Logo} alt="Logo" height={50} width={150} />
        </Box>
        {/* DESKTOP VIEW PAGES */}
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page.title}
              sx={{ my: 2, color: "black", display: "block", fontWeight: 600 }}
              onClick={() => router.push(page.href)}
            >
              {page.title}
            </Button>
          ))}
        </Box>
        <Box sx={{ flexGrow: 0 }}></Box>
      </Toolbar>
    </Container>
  );
}
export default Navbar;
