const date = new Date();
module.exports = function () {
  return {
    siteTitle: 'Digital Sven',
    buildYear: date.getFullYear(),
    fullDate: date.toUTCString(),
    version: process.env.npm_package_version
  };
};
