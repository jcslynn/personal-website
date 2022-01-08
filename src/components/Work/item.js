import { useIntl } from "react-intl";
import { Box, Link, Typography } from "@mui/material";
import ArrowDiag from "@mui/icons-material/CallMade";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import messages from "./messages";
import YoutubeVideo from "../YoutubeVideo";

export default function WorkItem({
  sx,
  videoId,
  title,
  id,
  content,
  moreLink,
}) {
  const { formatMessage } = useIntl();
  const theme = useTheme();
  const medium = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: medium ? "column" : "row",
        alignItems: medium ? "center" : "",
        paddingBottom: 12,
        ...sx,
      }}
    >
      <Box
        sx={{
          paddingRight: medium ? 0 : 16,
          paddingBottom: medium ? 10 : 0,
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 500 }}>
          {id} / {title}
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 400, padding: "20px 0" }}>
          {content}
        </Typography>
        <Link
          variant="h3"
          href={moreLink}
          target="_blank"
          rel="noreferrer noopener"
          sx={{
            cursor: "pointer",
            flex: 1,
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          {formatMessage(messages.more)}
          <ArrowDiag
            sx={{
              fontSize: 20,
              color: "#292929",
              marginLeft: 0.5,
            }}
          />
        </Link>
      </Box>
      <YoutubeVideo fullWidth={medium} title={title} embedId={videoId} />
    </Box>
  );
}
