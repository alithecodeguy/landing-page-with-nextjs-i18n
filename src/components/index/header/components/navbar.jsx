import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Link, withTranslation } from "../../../../../i18n";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import TemporaryDrawer from "../../../common/TemporaryDrawer";
const useStyles = makeStyles(() => ({
  root: { height: "100%" },
  nav_item: {
    padding: "0px 5px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#ddd",
      borderRadius: 7,
    },
  },
}));

const Navbar = (props) => {
  const classes = useStyles(props);
  const { t } = props;

  return (
    <Grid container item xs={12} alignItems="center" className={classes.root}>
      <Hidden mdDown>
        <p className={classes.nav_item}>{t("websiteDesignPackages")}</p>
        <p className={classes.nav_item}>{t("startCooperation")}</p>
        <p className={classes.nav_item}>|</p>
        <Link href="/second-page">
          <p className={classes.nav_item}>{t("contactToNoad")}</p>
        </Link>
        <p className={classes.nav_item}>{t("digitalInstitute")}</p>
        <p className={classes.nav_item}>{t("newsAndEvents")}</p>
        <p className={classes.nav_item}>{t("Services")}</p>
        <p className={classes.nav_item}>{t("boiSaDesign")}</p>
      </Hidden>
    </Grid>
  );
};

export default withTranslation("navbar")(Navbar);
