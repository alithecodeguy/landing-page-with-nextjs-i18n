// core libraries
import React from "react";

// material ui
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// components
import Header from "../src/components/index/header/header";
import Banner from "../src/components/index/banner/banner";
import { Link, withTranslation } from "../i18n";

const useStyles = makeStyles(() => ({
  root: (props) => {
    return {
      direction: props.i18n.language === "en" ? "ltr" : "rtl",
      fontFamily: props.i18n.language === "en" ? "inherit" : "iranYekanSajjad",
    };
  },
  header_section: {
    height: 100,
    maxHeight: 100,
  },
  banner_section: {
    backgroundColor: "blue",
    height: "calc(100vh - 100px)",
    maxHeight: "calc(100vh - 100px)",
    overflow: "hidden",
  },
  introduction_section: {},
  services_section: {},
  cooperation_section: {},
  design_section: {},
  subscribe_section: {},
  mag_section: {},
  footer_section: {},
}));

const Homepage = (props) => {
  const classes = useStyles(props);
  const { t } = props;
  return (
    <Grid container item xs={12} className={classes.root}>
      <Grid container item xs={12} className={classes.header_section}>
        <Header />
      </Grid>
      <Grid container item xs={12} className={classes.banner_section}>
        <Banner />
      </Grid>
      <Grid
        container
        item
        xs={12}
        className={classes.introduction_section}
      ></Grid>
      <Grid container item xs={12} className={classes.customers_section}></Grid>
      <Grid container item xs={12} className={classes.services_section}></Grid>
      <Grid
        container
        item
        xs={12}
        className={classes.cooperation_section}
      ></Grid>
      <Grid container item xs={12} className={classes.design_section}></Grid>
      <Grid container item xs={12} className={classes.subscribe_section}></Grid>
      <Grid container item xs={12} className={classes.mag_section}></Grid>
      <Grid container item xs={12} className={classes.footer_section}></Grid>
    </Grid>
  );
};

Homepage.getInitialProps = async () => ({
  namespacesRequired: ["contact", "navbar", "banner"],
});

export default withTranslation("common")(Homepage);
