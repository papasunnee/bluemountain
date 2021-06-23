const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

if (typeof require !== "undefined") {
  require.extensions[".css"] = file => {};
}
/* With CSS Modules */
// module.exports = withSass(withCSS({ cssModules: true }));

/* With additional configuration on top of CSS Modules */

module.exports = withSass(
  withCSS({
    // cssModules: true,
    webpack: function(config) {
      config.node = {
        fs: "empty"
      };

      return config;
    }
  })
);
