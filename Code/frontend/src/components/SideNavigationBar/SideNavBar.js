import styles from "./SideNavBar.module.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import logo from "../../images/logo.png";
import { createTheme, ThemeProvider } from "@mui/system";
import { Avatar } from "@mui/material";

const drawerWidth = 305;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
function ListItemRawIcon(props) {
  return (
    <img
      style={{ width: "26px", height: "auto" }}
      src={require(`../../images/${props.content}.svg`)}
      alt={`${props.content}`}
    />
  );
}

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideNavBar({ list1, list2, user }) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer className={styles.Drawer} variant="permanent" open={open}>
      <DrawerHeader>
        <Toolbar
          sx={{
            ...(open && { display: "none" }),
          }}
        >
          <IconButton
            sx={{ padding: 0, marginRight: 0 }}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <div className={styles.headerFlexWrapper}>
          <Avatar
            className={styles.logo}
            alt="Avatar"
            src={logo}
            sx={{
              width: 35,
              height: 35,
              alignSelf: "center",
              ...(!open && { display: "none" }),
            }}
          />
          <Typography
            className={styles.HeaderTitle}
            variant="h8"
            noWrap
            component="div"
          >
            Procurement <br />
            Management System
          </Typography>
        </div>
        <IconButton className={styles.closeIcon} onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>

      <List>
        {list1.map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {<ListItemRawIcon content={text} />}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{ opacity: open ? 1 : 0 }}
                primaryTypographyProps={{
                  fontFamily: "Inter",
                  fontWeight: "500",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider variant="middle" />
      <List>
        {list2.map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {<ListItemRawIcon content={text} />}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{ opacity: open ? 1 : 0 }}
                primaryTypographyProps={{
                  fontFamily: "Inter",
                  fontWeight: "500",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <div className={styles.OuterLogoutUser}>
        <div style={{}}>
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {<ListItemRawIcon content={"Logout"} />}
                </ListItemIcon>
                <ListItemText
                  primary={"Logout"}
                  sx={{ opacity: open ? 1 : 0 }}
                  primaryTypographyProps={{
                    fontFamily: "Inter",
                    fontWeight: "500",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 0.5,
                }}
              >
                <Avatar
                  className={styles.logo}
                  alt="UserProfilPic"
                  src={user.profilePic}
                  sx={{ width: 31, height: 31, mr: open ? 3 : "auto" }}
                />

                <ListItemText
                  primary={`${user.firstname} ${user.lastname}`}
                  secondary={user.email}
                  sx={{ opacity: open ? 1 : 0 }}
                  primaryTypographyProps={{
                    fontFamily: "Inter",
                    fontWeight: "500",
                  }}
                  secondaryTypographyProps={{
                    fontFamily: "Inter",
                    fontWeight: "400",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
      </div>
    </Drawer>
  );
}
