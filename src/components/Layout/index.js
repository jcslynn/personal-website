import Head from "next/head";
import makeStyles from "@mui/styles/makeStyles";
import { useIntl } from "react-intl";
import Navbar from "../NavBar";
import messages from "./messages";
import Footer from "../Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export default function Layout({ children, withNav }) {
  const { formatMessage } = useIntl();
  const classes = useStyles();

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>{formatMessage(messages.name)}</title>
        <meta name="title" content={formatMessage(messages.name)} />
        <meta
          name="description"
          content={formatMessage(messages.description)}
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jcslynn.com" />
        <meta property="og:title" content={formatMessage(messages.name)} />
        <meta
          property="og:description"
          content={formatMessage(messages.description)}
        />
        <meta property="og:image" content="https://www.jcslynn.com/me.jpeg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.jcslynn.com" />
        <meta property="twitter:title" content={formatMessage(messages.name)} />
        <meta
          property="twitter:description"
          content={formatMessage(messages.description)}
        />
        <meta
          property="twitter:image"
          content="https://www.jcslynn.com/me.jpeg"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>
      <div className={classes.root}>
        <Navbar />
        <main style={{ width: "100%" }}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
