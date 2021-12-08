import { useIntl } from "react-intl";
import makeStyles from "@mui/styles/makeStyles";
import { Box, Link, Typography } from "@mui/material";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import messages from "./messages";
import handleGoToWork from "../../events/scrollToWork";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 240,
    minHeight: "calc(85vh - 240px)",
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",

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

export default function Heading() {
  const { formatMessage } = useIntl();
  const classes = useStyles();

  return (
    <div className={classes.root} id="heading">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h1">{formatMessage(messages.name)}</Typography>
        <Typography variant="subtitle1">
          {formatMessage(messages.title)}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          paddingTop: '30vh',
        }}
      >
        <Link
          id="work-header"
          underline="hover"
          sx={{ display: "flex", cursor: "pointer" }}
          onClick={handleGoToWork}
        >
          <Typography variant="h2">{formatMessage(messages.myWork)}</Typography>
          <ArrowDownward
            sx={{ fontSize: 40, color: "#292929", marginLeft: 1 }}
          />
        </Link>
      </Box>
    </div>
  );
}
