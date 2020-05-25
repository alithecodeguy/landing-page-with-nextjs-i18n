import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { withTranslation } from "../../../i18n";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  drawerListItemText: (props) => {
    return {
      textAlign: props.i18n.language === "en" ? "left" : "right",
      fontFamily: props.i18n.language === "en" ? "inherit" : "iranYekanSajjad",
    };
  },
});

const TemporaryDrawer = (props) => {
  const classes = useStyles(props);
  const { t } = props;
  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor={props.i18n.language === "en" ? "left" : "right"}
          open={props.isDrawerOpen}
          onClose={() => props.toggleDrawer(false)}
        >
          {[
            "websiteDesignPackages",
            "startCooperation",
            "contactToNoad",
            "digitalInstitute",
            "newsAndEvents",
            "Services",
            "boiSaDesign",
          ].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText
                classes={{
                  // root: classes.root, // class name, e.g. `classes-nesting-root-x`
                  primary: classes.drawerListItemText, // class name, e.g. `classes-nesting-label-x`
                }}
                primary={t(text)}
              />
            </ListItem>
          ))}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default withTranslation("navbar")(TemporaryDrawer);
