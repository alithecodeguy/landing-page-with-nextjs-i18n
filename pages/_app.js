import React from "react";
import App from "next/app";
// import _JSXStyle from "styled-jsx/style";
import { create } from "jss";
import rtl from "jss-rtl";
import { SnackbarProvider } from "notistack";

// material ui
import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider, jssPreset } from "@material-ui/styles";
import { ThemeProvider } from "@material-ui/styles";

// statics
import theme from "../src/utils/themes/main_theme";
import { appWithTranslation } from "../i18n";

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <StylesProvider jss={jss}>
          <ThemeProvider theme={theme}>
            <SnackbarProvider
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Component {...pageProps} />
            </SnackbarProvider>
          </ThemeProvider>
        </StylesProvider>
        <style jsx global>{`
          @font-face {
            font-family: "IRANSans";
            font-style: normal;
            font-weight: normal;
            src: url("/static/fonts/iranSans/eot/IRANSansWeb.eot");
            src: url("/static/fonts/iranSans/eot/IRANSansWeb.eot?#iefix")
                format("embedded-opentype"),
              /* IE6-8 */ url("/static/fonts/iranSans/woff2/IRANSansWeb.woff2")
                format("woff2"),
              /* Chrome36+, Opera24+*/
                url("/static/fonts/iranSans/woff/IRANSansWeb.woff")
                format("woff"),
              /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
                url("/static/fonts/iranSans/ttf/IRANSansWeb.ttf")
                format("truetype");
          }
          @font-face {
            font-family: "iranYekanSajjad";
            font-style: normal;
            font-weight: normal;
            src: url("/static/fonts/iranYekanSajjad/iranYekanSajjad.eot");
            src: url("/static/fonts/iranYekanSajjad/iranYekanSajjad.eot?#iefix")
                format("embedded-opentype"),
              /* IE6-8 */
                url("/static/fonts/iranYekanSajjad/iranYekanSajjad.woff2")
                format("woff2"),
              /* Chrome36+, Opera24+*/
                url("/static/fonts/iranYekanSajjad/iranYekanSajjad.woff")
                format("woff"),
              /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
                url("/static/fonts/iranYekanSajjad/iranYekanSajjad.ttf")
                format("truetype");
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default appWithTranslation(MyApp);
