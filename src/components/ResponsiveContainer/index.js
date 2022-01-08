import { Box } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 40,
    paddingRight: 40,

    [theme.breakpoints.up("xl")]: {
      paddingLeft: 320,
      paddingRight: 320,
    },

    [theme.breakpoints.between("lg", "xl")]: {
      paddingLeft: 160,
      paddingRight: 160,
    },

    [theme.breakpoints.between("md", "lg")]: {
      paddingLeft: 100,
      paddingRight: 100,
    },

    [theme.breakpoints.down("md")]: {
      paddingLeft: 48,
      paddingRight: 48,
    },
  },
}));

export default function Container({ sx, children, id }) {
  const classes = useStyles();
  return (
    <Box className={classes.root} sx={sx} id={id}>
      {children}
    </Box>
  );
}
