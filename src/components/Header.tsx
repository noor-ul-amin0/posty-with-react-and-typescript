import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import SideDrawer from "./SideDrawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import PeopleIcon from "@mui/icons-material/People";
import { Button, Menu, MenuItem } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import MarkunreadMailboxIcon from "@mui/icons-material/MarkunreadMailbox";
import { Item } from "../types/Types";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  GoogleLogout,
} from "react-google-login";
import { OAuthConfig } from "../config";

const items: Item[] = [
  { id: 1, title: "Posts", icon: <MarkunreadMailboxIcon />, link: "/posts" },
  { id: 2, title: "Users", icon: <PeopleIcon />, link: "/users" },
  { id: 3, title: "Send email", icon: <InboxIcon /> },
];
export default function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const toggleDrawer =
    (state: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsDrawerOpen(state);
    };
  const navigate = useNavigate();
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    navigate("/profile");
  };
  const successResponseGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    console.log(response);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              onClick={() => navigate("/")}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <span style={{ cursor: "pointer" }}>Posty</span>
            </Typography>
            <Button color="inherit" onClick={() => {}}>
              Login
            </Button>
            {/* <GoogleLogin
              clientId={OAuthConfig.web.client_id}
              buttonText="Login"
              onSuccess={successResponseGoogle}
              onFailure={() => alert("Something went wrong, please try again.")}
              cookiePolicy={"single_host_origin"}
            /> */}
            <>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  Logout
                  {/* <GoogleLogout
                    clientId={OAuthConfig.web.client_id}
                    buttonText="Logout"
                    onLogoutSuccess={() => navigate("/")}
                  ></GoogleLogout> */}
                </MenuItem>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
              </Menu>
            </>
          </Toolbar>
        </AppBar>
      </Box>
      <SideDrawer
        sideItems={items}
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
      />
    </>
  );
}
