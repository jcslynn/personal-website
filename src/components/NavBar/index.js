import React, { useState } from "react";
import { useIntl } from "react-intl";
import {
  AppBar,
  Box,
  Toolbar,
  Link,
  Menu,
  IconButton,
  MenuItem,
  Typography,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import messages from "./messages";
import handleGoToWork from "../../events/scrollToWork";
import handleGoToAbout from "../../events/scrollToAbout";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    background: theme.palette.background.default,
    padding: "102px 0 48px",

    [theme.breakpoints.up("xl")]: {
      paddingLeft: 320,
      paddingRight: 320,
    },

    [theme.breakpoints.between("lg", "xl")]: {
      paddingLeft: 160,
      paddingRight: 160,
    },

    [theme.breakpoints.between("md", "lg")]: {
      paddingLeft: 120,
      paddingRight: 120,
    },

    [theme.breakpoints.down("md")]: {
      paddingLeft: 48,
      paddingRight: 48,
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 48,
    },
  },
  logo: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
  },
  links: {
    marginLeft: 32,
    cursor: "pointer",

    [theme.breakpoints.down("sm")]: {
      margin: 0,
    },
  },
}));

function MenuList({ handleClick, anchorEl, handleClose }) {
  const classes = useStyles();
  const { formatMessage } = useIntl();

  return (
    <>
      <IconButton onClick={handleClick} id="menu-btn">
        <MenuIcon sx={{ fontSize: 32, color: "#292929" }} />
      </IconButton>
      <Menu
        id="link-menu"
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorEl={anchorEl}
        sx={{ flexDirection: "column" }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem
          className={classes.links}
          variant="h3"
          onClick={handleGoToWork}
        >
          <Typography variant="h3">{formatMessage(messages.work)}</Typography>
        </MenuItem>
        <MenuItem className={classes.links} onClick={handleGoToAbout}>
          <Typography variant="h3">{formatMessage(messages.about)}</Typography>
        </MenuItem>
      </Menu>
    </>
  );
}

const Header = (props) => {
  const classes = useStyles();
  const { formatMessage } = useIntl();
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar id="nav-bar" className={classes.root}>
      <Toolbar
        cx={{
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
        }}
        disableGutters
      >
        <Box className={classes.logo}>
          <Link variant="h2" href="/" underline="none">
            JL
          </Link>
        </Box>
        {small ? (
          <MenuList
            handleClick={handleClick}
            handleClose={handleClose}
            anchorEl={anchorEl}
          />
        ) : (
          <>
            <Link
              className={classes.links}
              variant="h3"
              onClick={handleGoToWork}
              underline="hover"
            >
              {formatMessage(messages.work)}
            </Link>
            <Link
              className={classes.links}
              variant="h3"
              onClick={handleGoToAbout}
              underline="hover"
            >
              {formatMessage(messages.about)}
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
