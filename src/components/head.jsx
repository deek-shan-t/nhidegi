import * as React from "react";
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "C:/Volume D/HTML CSS/nhidegi/node_modules/@mui/material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import AccountCircle from "@mui/icons-material/AccountCircle";
// import MailIcon from "@mui/icons-material/Mail";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import MoreIcon from "@mui/icons-material/MoreVert";
import { useAppStore } from "../appStore";
import { yellow } from "@mui/material/colors";
// import { Link } from "react-router-dom";

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
      <AppBar position="fixed" color="inherit" style={{backdropFilter: "blur(3px)",
    }} elevation={1}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => updateOpen(!dopen)}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >

            <Link to="/">
              <div className="grid grid-cols-4">
                <div className="mx-auto"><img src={Logo} alt="logo" width="50px" /></div>
                <div className="col-span-3 my-auto">Student WellBeing Commitee</div>
              </div>
              
              
              <p></p>
            </Link>

          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
          
          <IconButton
              size="small"
              color="inherit"
            >
              <Link to="/">Home</Link>
            </IconButton>

          <IconButton
              size="small"
              edge="end"
              aria-label="account of current user"
            //   aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              Teams
            </IconButton>
            <IconButton
              size="small"
              color="inherit"
            >
              <Link to="https://yourdost.com/">YourDost</Link>
            </IconButton>
            
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
