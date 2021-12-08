import React, { useState } from "react";
import { useIntl } from "react-intl";
import { AppBar, Box, Toolbar, Link } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import messages from "./messages";
import handleGoToWork from "../../events/scrollToWork";
import handleGoToAbout from "../../events/scrollToAbout";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    background: theme.palette.background.default,
    padding: "102px 0 48px",

    [theme.breakpoints.up("lg")]: {
      paddingLeft: 160,
      paddingRight: 160,
    },

    [theme.breakpoints.between("sm", "lg")]: {
      paddingLeft: 138,
      paddingRight: 138,
    },

    [theme.breakpoints.down("sm")]: {
      paddingLeft: 18,
      paddingRight: 18,
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
  },
  links: {
    marginLeft: 32,
    cursor: "pointer",
  },
}));

const Header = (props) => {
  const { formatMessage } = useIntl();
  const classes = useStyles();

  return (
    <AppBar id="nav-bar" className={classes.root}>
      <Toolbar className={classes.toolbar} disableGutters>
        <Box className={classes.logo}>
          <Link variant="h2" href="/" underline="none">
            JL
          </Link>
        </Box>
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
