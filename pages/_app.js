import { useEffect } from "react";
import { IntlProvider } from "react-intl";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "../src/theme";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <IntlProvider locale="en">
          <CssBaseline />
          <Component {...pageProps} />
        </IntlProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default MyApp;
