// core libraries
import React from "react";
import PropTypes from "prop-types";

// components
import { withTranslation, Link } from "../i18n";

const SecondPage = ({ t }) => (
  <React.Fragment>
    <main>
      <Link href="/">
        <button type="button">{t("back-to-home")}</button>
      </Link>
    </main>
  </React.Fragment>
);

SecondPage.getInitialProps = async () => ({
  namespacesRequired: ["second-page", "footer"],
});

SecondPage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("second-page")(SecondPage);
