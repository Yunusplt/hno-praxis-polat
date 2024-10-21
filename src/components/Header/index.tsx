import React from "react";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import AppBar from "@mui/material/AppBar";

const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "white",
      }}
    >
      <Topbar />
      <Navbar />
    </AppBar>
  );
};

export default Header;
