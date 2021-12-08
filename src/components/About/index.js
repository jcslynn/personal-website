import { Box, Grid, Typography, Link } from "@mui/material";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import makeStyles from "@mui/styles/makeStyles";
import { useIntl } from "react-intl";
import Image from "next/image";
import messages from "./messages";
import handleGoToTop from "../../events/scrollToTop";
import image from '../../../public/images/me.jpeg'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "80vh",
    background: "rgba(196, 196, 196, 0.25)",
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "space-between",

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
  sectionItem: {
    padding: "0 59px 143px",
    maxWidth: 532,

    [theme.breakpoints.down("xl")]: {
      padding: "0 24px 143px",
    },
  },
  section: {
    marginTop: 126,
    display: "flex",
    flexDirection: "row",
  },
}));

export default function About() {
  const classes = useStyles();
  const { formatMessage } = useIntl();
  return (
    <Box className={classes.root} id="about">
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
        <Box sx={{ flex: 1, paddingTop: 4, paddingLeft: 10, maxWidth: "50vh" }}>
          <Typography variant="body1">
            {formatMessage(messages.content)}
          </Typography>
          <Box
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
        variant="h3"
        underline="hover"
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          cursor: "pointer",
          marginBottom: 10,
        }}
        onClick={handleGoToTop}
      >
        {formatMessage(messages.top)}
        <ArrowUpward sx={{ fontSize: 20, color: "#292929", marginLeft: 0.5 }} />
      </Link>
    </Box>
  );
}
