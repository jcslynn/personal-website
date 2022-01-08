import { useIntl } from "react-intl";
import { Box, Link, Typography } from "@mui/material";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import Container from "../ResponsiveContainer";
import messages from "./messages";
import goToWork from "../../events/scrollToWork";

export default function Heading() {
  const { formatMessage } = useIntl();

  return (
    <Container
      id="heading"
      sx={{
        marginTop: "240px",
        minHeight: "calc(85vh - 240px)",
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "column",
      }}
    >
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
          paddingTop: "30vh",
        }}
      >
        <Link
          id="work-header"
          underline="hover"
          sx={{ display: "flex", cursor: "pointer" }}
          onClick={goToWork}
        >
          <Typography variant="h2">{formatMessage(messages.myWork)}</Typography>
          <ArrowDownward
            sx={{ fontSize: 40, color: "#292929", marginLeft: 1 }}
          />
        </Link>
      </Box>
    </Container>
  );
}
