const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

/* With CSS Modules */
// module.exports = withSass(withCSS({ cssModules: true }));

/* With additional configuration on top of CSS Modules */

module.exports = withSass(
  withCSS({
    // cssModules: true,
    // webpack: function (config) {
    //   return config;
    // }
  })
);
