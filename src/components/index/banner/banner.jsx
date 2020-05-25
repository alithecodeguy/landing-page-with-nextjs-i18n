// material ui
import Grid from "@material-ui/core/Grid";

// components
import { makeStyles } from "@material-ui/core/styles";
import { withTranslation } from "../../../../i18n";

const useStyles = makeStyles(() => ({
  root: { height: "100%" },
  background_image: {
    width: "100%",
    height: "calc(100vh - 100px)",
    opacity: 1,
    background: `linear-gradient(
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0)
        ), url(${"/static/local_resources/images/banner/banner.jpg"})  no-repeat fixed center`,
    backgroundSize: "cover",
    position: "absolute",
    backgroundAttachment: "scroll",
  },
  text_box: { color: "white", zIndex: 1 },
  title_text: { fontSize: "3.9vw" },
  description_text: { fontSize: "1.7vw" },
}));

const Banner = (props) => {
  const { t } = props;
  const classes = useStyles();
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
        xs={12}
        justify="center"
        alignItems="center"
        className={classes.background_image}
      />
      <Grid
        container
        item
        xs={12}
        justify="center"
        alignItems="center"
        direction="column"
        className={classes.text_box}
      >
        <p className={classes.title_text}>{t("title")}</p>
        <p className={classes.description_text}>{t("description")}</p>
      </Grid>
    </Grid>
  );
};

export default withTranslation("banner")(Banner);
