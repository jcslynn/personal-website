import { useIntl } from "react-intl";
import { Box, Link, Typography } from "@mui/material";
import ArrowDiag from "@mui/icons-material/CallMade";
import YouTube from "react-youtube";
import messages from "./messages";

export default function WorkItem({ sx, videoId, title, id, content }) {
  const { formatMessage } = useIntl();

  const onReady = (e) => e.target.pauseVideo();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        paddingBottom: 12,
        ...sx,
      }}
    >
      <Box
        sx={{
          paddingRight: 16,
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
      <YouTube
        videoId={videoId}
        opts={{ height: 364, width: 640 }}
        onReady={onReady}
      />
    </Box>
  );
}
