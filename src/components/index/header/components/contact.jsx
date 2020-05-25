// material ui
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Phone from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";

// components
import { i18n, withTranslation } from "../../../../../i18n";
import TemporaryDrawer from "../../../common/TemporaryDrawer";

const useStyles = makeStyles(() => ({
  root: { height: "100%" },
  change_language_button: {
    width: 30,
    height: "100%",
    backgroundColor: "#eee",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    borderRadius: "0px 0px 7px 7px",
    "&:hover": {
      color: "white",
      backgroundColor: "red",
    },
  },
  phone_box: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 10px",
    direction: "ltr",
  },
  email_box: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 10px",
    direction: "ltr",
  },
  search_box: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 10px",
  },
  menu_icon: {
    fontSize: 35,
    cursor: "pointer",
  },
  phone_icon: { direction: "ltr" },
  email_icon: { direction: "ltr" },
}));

const Contact = (props) => {
  const classes = useStyles(props);
  const { t } = props;
  const [state, setState] = React.useState({
    isDrawerOpen: false,
  });

  const toggleDrawer = (status) => {
    setState((prevState) => ({ ...prevState, isDrawerOpen: status }));
  };
  return (
    <Grid container item xs={12} alignItems="center" className={classes.root}>
      <div
        className={classes.change_language_button}
        onClick={() =>
          i18n.changeLanguage(i18n.language === "en" ? "fa" : "en")
        }
      >
        {i18n.language === "en" ? "fa" : "en"}
      </div>
      <Hidden lgUp>
        <TemporaryDrawer
          toggleDrawer={toggleDrawer}
          isDrawerOpen={state.isDrawerOpen}
        />
        <MenuIcon
          onClick={() => toggleDrawer(true)}
          className={classes.menu_icon}
        />
      </Hidden>
      <Hidden mdDown>
        <div className={classes.phone_box}>
          <Phone className={classes.phone_icon} />
          <span>{t("phoneNumber")}</span>
        </div>
        <div className={classes.email_box}>
          <EmailIcon className={classes.email_icon} />
          <span>info@noad.digital</span>
        </div>
      </Hidden>
    </Grid>
  );
};

export default withTranslation("contact")(Contact);
