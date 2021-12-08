import { Link, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { useIntl } from "react-intl";

import messages from "./messages";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,

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
  links: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  middleLink: {
    margin: "0 56px",
  },
}));

export default function Footer() {
  const { formatMessage } = useIntl();
  const classes = useStyles();

  return (
    <footer style={{ position: "fixed", bottom: 0, width: "100%" }}>
      <div className={classes.root}>
        <div className={classes.links}>
          <Link
            underline="hover"
            variant="h3"
            href="mailTo:jonathancslynn@gmail.com"
          >
            {formatMessage(messages.email)}
          </Link>
          <Link
            underline="hover"
            variant="h3"
            href="https://github.com/jcslynn"
            rel="noopener noreferrer"
            target="_blank"
            className={classes.middleLink}
          >
            {formatMessage(messages.github)}
          </Link>
          <Link
            underline="hover"
            variant="h3"
            href="https://linkedin.com/in/jonathansclynn"
            rel="noopener noreferrer"
            target="_blank"
          >
            {formatMessage(messages.linkedin)}
          </Link>
        </div>
        <Typography variant="subtitle1">
          {formatMessage(messages.copyright)}
        </Typography>
      </div>
    </footer>
  );
}
