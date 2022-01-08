import { useIntl } from "react-intl";
import { Box } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import WorkItem from "./item";
import messages from "./messages";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "15vh",
    paddingBottom: 84,
    minHeight: "100vh",

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
}));

export default function Work() {
  const { formatMessage } = useIntl();
  const classes = useStyles();
  return (
    <Box id="work" className={classes.root}>
      <WorkItem
        key="youCodia"
        id="01"
        sx={{ borderBottom: "1.5px solid #292929" }}
        videoId="ieRDryJabtI"
        title={formatMessage(messages.youcodia)}
        content={formatMessage(messages.youcodiaContent)}
        moreLink="https://www.youcodia.com/"
      />
      <WorkItem
        key="academy"
        id="02"
        sx={{ paddingTop: 12 }}
        videoId="UK65odJSo6M"
        title={formatMessage(messages.academy)}
        content={formatMessage(messages.academyContent)}
        moreLink="https://www.projectc-ygn.org/youcodia-school"
      />
    </Box>
  );
}
