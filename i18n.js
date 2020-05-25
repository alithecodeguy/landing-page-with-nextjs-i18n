/*
  Do not copy/paste this file. It is used internally
  to manage end-to-end test suites.
*/

const NextI18Next = require("next-i18next").default;
const { localeSubpaths } = require("next/config").default().publicRuntimeConfig;

const localeSubpathVariations = {
  none: {},
  foreign: {
    fa: "fa",
  },
  all: {
    en: "en",
    fa: "fa",
  },
};

module.exports = new NextI18Next({
  defaultLanguage: "fa",
  otherLanguages: ["en"],
  localeSubpaths: localeSubpathVariations[localeSubpaths],
  // ignoreRoutes: [],
});
