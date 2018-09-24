const withSass = require('@zeit/next-sass')
/* Without CSS Modules, with PostCSS */
module.exports = withSass()

/* With CSS Modules */
// module.exports = withCSS({ cssModules: true })

/* With additional configuration on top of CSS Modules */
/*
module.exports = withCSS({
  cssModules: true,
  webpack: function (config) {
    return config;
  }
});
*/