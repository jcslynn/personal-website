import { Box } from "@mui/material";

export default function YoutubeVideo({ embedId, fullWidth, title }) {
  return (
    <Box
      sx={{
        overflow: "hidden",
        position: "relative",
        width: fullWidth ? "100%" : "50%",
        "&::after": {
          paddingTop: "56.25%",
          display: "block",
          content: "''",
        },
      }}
    >
      <iframe
        style={{
          left: 0,
          top: 0,
          height: "100%",
          width: "100%",
          position: "absolute",
        }}
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
      />
    </Box>
  );
}
