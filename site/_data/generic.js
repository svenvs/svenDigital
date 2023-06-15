const date = new Date();
module.exports = function () {
  return {
    siteTitle: 'Sven Digital',
    buildYear: date.getFullYear(),
    fullDate: date.toUTCString(),
    version: process.env.npm_package_version
  };
};
