import React from "react";
import Navbar from "./components/Navbar";
import AppBar from "@mui/material/AppBar";

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#f8f8f8" }}>
      <Navbar />
    </AppBar>
  );
};

export default Header;
