import { Box, Typography, Link } from "@mui/material";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import makeStyles from "@mui/styles/makeStyles";
import { useIntl } from "react-intl";
import Image from "next/image";
import Container from "../ResponsiveContainer";
import messages from "./messages";
import goToTop from "../../events/scrollToTop";

const useStyles = makeStyles((theme) => ({
  about: {
    flex: 1,
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(10),
    maxWidth: "50vh",

    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(10),
      paddingLeft: 0,
      paddingBottom: theme.spacing(4),
    },

    [theme.breakpoints.up("xl")]: {
      paddingLeft: theme.spacing(16),
    },
  },
  goUp: {
    display: "flex",
    justifyContent: "flex-end",
    cursor: "pointer",
    marginBottom: theme.spacing(15),
    marginTop: theme.spacing(5),

    [theme.breakpoints.down("md")]: {
      justifyContent: "flex-start",
    },
  },
  section: {
    marginTop: 126,
    display: "flex",
    flexDirection: "row",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
}));

export default function About() {
  const classes = useStyles();
  const { formatMessage } = useIntl();
  return (
    <Container
      id="about"
      sx={{
        width: "100%",
        minHeight: "80vh",
        background: "rgba(196, 196, 196, 0.25)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box className={classes.section}>
        <Box
          sx={{
            border: "14px #C5DBF4 solid",
            width: 336,
            height: 440,
            position: "relative",
          }}
        >
          <Image
            src="/images/me.jpeg"
            alt={formatMessage(messages.alt)}
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <Box className={classes.about}>
          <Typography variant="body1">
            {formatMessage(messages.content)}
          </Typography>
          <Box
            id="resume"
            sx={{ marginTop: 6, display: "flex", justifyContent: "flex-end" }}
          >
            <Link
              variant="h3"
              sx={{ cursor: "pointer" }}
              underline="hover"
              href="/resume.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              {formatMessage(messages.resume)}
            </Link>
          </Box>
        </Box>
      </Box>
      <Link
        id="backToTop"
        className={classes.goUp}
        variant="h3"
        underline="hover"
        onClick={goToTop}
      >
        {formatMessage(messages.top)}
        <ArrowUpward sx={{ fontSize: 20, color: "#292929", marginLeft: 0.5 }} />
      </Link>
    </Container>
  );
}
