import { Link, Typography, IconButton } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { useIntl } from "react-intl";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import GithubIcon from "@mui/icons-material/Github";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/AlternateEmail";
import Container from "../ResponsiveContainer";

import messages from "./messages";

const useStyles = makeStyles((theme) => ({
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
  const theme = useTheme();
  const medium = useMediaQuery(theme.breakpoints.down("md"));
  const small = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <footer style={{ position: "fixed", bottom: 0, width: "100%" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: small ? "column" : "row",
          justifyContent: "space-between",
          alignItems: small ? "flex-start": "",
          marginBottom: 2,
        }}
      >
        <div className={classes.links}>
          {medium ? (
            <>
              <IconButton
                id="email"
                href="mailTo:jonathancslynn@gmail.com"
                sx={{ marginRight: 1 }}
              >
                <EmailIcon color="action" />
              </IconButton>
              <IconButton
                id="github"
                href="https://github.com/jcslynn"
                rel="noopener noreferrer"
                target="_blank"
                sx={{ marginRight: 1 }}
              >
                <GithubIcon color="action" />
              </IconButton>
              <IconButton
                id="linkedIn"
                href="https://linkedin.com/in/jonathancslynn"
                rel="noopener noreferrer"
                target="_blank"
                sx={{ marginRight: 1 }}
              >
                <LinkedInIcon color="action" />
              </IconButton>
            </>
          ) : (
            <>
              <Link
                id="email"
                underline="hover"
                variant="h3"
                href="mailTo:jonathancslynn@gmail.com"
              >
                {formatMessage(messages.email)}
              </Link>
              <Link
                id="github"
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
                id="linkedIn"
                underline="hover"
                variant="h3"
                href="https://linkedin.com/in/jonathancslynn"
                rel="noopener noreferrer"
                target="_blank"
              >
                {formatMessage(messages.linkedin)}
              </Link>
            </>
          )}
        </div>
        <Typography variant="subtitle1">
          {formatMessage(messages.copyright)}
        </Typography>
      </Container>
    </footer>
  );
}
