// material ui
import { createMuiTheme } from "@material-ui/core/styles";

// components
import createBreakpoints from "../themes/functions/createBreakpoints";

//sizing constant
const $pagehorizontalGapPercent = 70;

// color constants
export const $colors = {
  searchBoxActionButton: "rgb(255, 119, 0)",
  searchBoxActionButtonHover: "rgb(199, 102, 18)",
  searchBoxGroupedButtonSelectedButtonText: "white",
  searchBoxGroupedButtonUnselectedButtonText: "black",
  searchBoxGroupedButton: "rgb(255, 119, 0)",
  searchBoxGroupedButtonHover: "rgb(255, 119, 0)",
  searchSectionDeleteRowButton: "white",
  calendarTitleBox: "#356ad8",
  calendarTitleText: "white",
  calendarFooterBox: "#356ad8",
  calendarFooterText: "white",
  mainBgColor: "#f5f5f5",
  secondBgColor: "white",
  background: "#eff3f8",
  lightForColor: "#7d9fe5",
  headingColor: "#356ad8",
  selectedButtonBgColor: "#356ad8",
  inputeBackground: "#f4f5f9",
  title: "#151515",
  purchaseTicketBackground: "#78c7c5",
  buttonBackground: "#f65a3a",
  red: "#f24137",
  gray: "#777",
  grayDark: "#e4e5ec",
  white: "#FFF",
  menuBlue: "#356ad8",
  mainPageTitlesHover: "rgba(255, 165, 0,1)",
  mainPageTitleSelected: "orange",
  mainPageTitleItemDefaultColor: "white",
  footerBackgroundColor: "#002366",
  footerTextColor: "white",
  bottomBoxBackgroundColor: "#ddd",
};

// urls
export const $urls = {
  mainPageHeaderBackground: "/static/images/header-img1.jpg",
  flag_icon: "/static/icons/flag.png",
  dollar_icon: "/static/icons/dollar.svg",
  sairo_logo: "/static/images/LOGO.svg",
  sairo_logo_black: "/static/images/LOGOblack.png",
  enter_icon: "/static/icons/enter.svg",
  login_icon: "/static/icons/login.svg",
  telephone_icon: "/static/icons/telephone.svg",
  hamburgerMenu_icon: "/static/icons/hamburger-menu.svg",
  airlineLogo1: "/static/airline-logo/tk.png",
  airlineLogo2: "/static/airline-logo/j-21.png",
  barcode_vertical: "/static/airline-logo/barcode_vertical.png",
  footerIcon_1: "/static/images/footerIcon_1.png",
  footerIcon_2: "/static/images/footerIcon_2.png",
  footerIcon_3: "/static/images/footerIcon_3.png",
  footerIcon_4: "/static/images/footerIcon_4.png",
  footerIcon_5: "/static/images/footerIcon_5.png",
  footerIcon_6: "/static/images/footerIcon_6.png",
  quick_access_background: "/static/images/quick_access_background.jpeg",
  mainPageHeaderBackground_0: "/static/images/header-img0.png",
  mainPageHeaderBackground_1: "/static/images/header-img1.jpg",
  mainPageHeaderBackground_2: "/static/images/header-img2.jpeg",
  mainPageHeaderBackground_3: "/static/images/header-img3.jpg",
  mainPageHeaderBackground_4: "/static/images/header-img4.jpg",
  mainPageHeaderBackground_5: "/static/images/header-img5.jpg",
  mainPageHeaderBackground_6: "/static/images/header-img6.jpg",
  mainPageHeaderBackground_7: "/static/images/header-img7.jpg",
  quick_access_background: "/static/images/quick_access_background.jpeg",
  world_map: "/static/images/world_map.png",
};

//general Button
const $generalbutton = {
  color: $colors.white,
  backColor: $colors.menuBlue,
  borderRadius: 4,
  fontSize: 13,
};

const theme = createMuiTheme({
  $colors: $colors,
  $urls: $urls,
  // changing material ui default breakpoints
  breakpoints: createBreakpoints({
    values: {
      xxs: 0,
      xs: 320,
      sm: 480,
      md: 768,
      lg: 1280,
      xl: 1920,
    },
  }),

  // overrides: {
  //   MuiButton: {
  //     root: {
  //       fontWeight: 'bold',
  //       backgroundColor: 'inherit',
  //       margin: '10px',
  //       '&:hover': {
  //         backgroundColor: 'inherit',
  //       },
  //     },
  //   },
  // },

  spacing: 4,

  //custom css
  $general__button: {
    borderRadius: $generalbutton.borderRadius,
    backgroundColor: $generalbutton.backColor,
    color: $generalbutton.color,
    fontSize: $generalbutton.fontSize,
  },
  $container: {
    maxWidth: `${$pagehorizontalGapPercent}%`,
  },
  $mainContainerStyle: {
    backgroundColor: $colors.mainBgColor,
  },
  $alternativeContainerStyle: {
    backgroundColor: $colors.secondBgColor,
  },
});

export default theme;
