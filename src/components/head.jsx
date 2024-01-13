import * as React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Logo from "../assets/Screenshot 2023-10-02 161403.png";

const AppBar = styled(
  MuiAppBar,
  {}
)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));



export default function Navbar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ backgroundColor: "#F5F5F5" }}>
        <Toolbar>
            <img className="head-logo" src={Logo} alt="logo" style={{height: "50px", width: "50px"}}/>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <div className="head-buttons">
          <IconButton>
              <Link to="/">Home</Link>
            </IconButton>
          <IconButton>
              <Link to="/">About us</Link>
            </IconButton>
          <IconButton>
              <Link to="/">Contact us(don't)</Link>
            </IconButton>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
