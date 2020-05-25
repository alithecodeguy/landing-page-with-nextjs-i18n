// material ui
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// components
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import { Link, withTranslation } from "../../../../i18n";

const useStyles = makeStyles(() => ({
  root: { height: "100%" },
  inner_container: { height: "100%" },
  contact_box: { height: "50px", maxHeight: "50px", padding: "0px 15px" },
  navbar_box: { height: "50px", maxHeight: "50px", padding: "0px 15px" },
  banner_image: {
    padding: "0px 20px",
    cursor: "pointer",
  },
}));

const Header = (props) => {
  const classes = useStyles(props);
  return (
    <Grid
      container
      item
      xs={12}
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid
        container
        item
        xs={8}
        justify="center"
        alignItems="center"
        className={classes.inner_container}
      >
        <Grid
          container
          item
          xs={12}
          justify="center"
          alignItems="center"
          className={classes.contact_box}
        >
          <Contact />
        </Grid>
        <Grid
          container
          item
          xs={12}
          justify="center"
          alignItems="center"
          className={classes.navbar_box}
        >
          <Navbar />
        </Grid>
      </Grid>
      <Grid container item xs={4} justify="flex-end" alignItems="center">
        <Link href="/">
          <img
            src="/static/local_resources/images/header/svg/noadlogo.svg"
            className={classes.banner_image}
            alt="main banner"
          />
        </Link>
      </Grid>
    </Grid>
  );
};

export default Header;
