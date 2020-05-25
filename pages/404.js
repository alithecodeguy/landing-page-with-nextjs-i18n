// import { withTranslation } from "../i18n";

const Custom404 = ({ t }) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div>
        <img
          src="/static/local_resources/images/errorPages/svg/error404.svg"
          style={{ width: 200, height: 200 }}
        />
        <div>صفحه مورد نظر یافت نشد</div>
      </div>
    </div>
  );
};

// can not use i18n in here. it's i18n conflict with nextjs. it's an open issue on official website
// Custom404.getInitialProps = async () => ({
//   namespacesRequired: ["custome404"],
// });

// export default withTranslation("common")(Custom404);

export default Custom404;
