module.exports = function (eleventyConfig) {
    eleventyConfig.addCollection("postSortByDate", function(collectionApi) {

      return collectionApi.getFilteredByTag('post').sort(function(a, b) {
        //return a.date - b.date; // sort by date - ascending
        return b.date - a.date; // sort by date - descending
        //return a.inputPath.localeCompare(b.inputPath); // sort by path - ascending
        //return b.inputPath.localeCompare(a.inputPath); // sort by path - descending
      });
    });
    eleventyConfig.addCollection("home", function(collectionApi) {

      return collectionApi.getFilteredByTag('post').sort(function(a, b) {
        //return a.date - b.date; // sort by date - ascending
        return b.date - a.date; // sort by date - descending
        //return a.inputPath.localeCompare(b.inputPath); // sort by path - ascending
        //return b.inputPath.localeCompare(a.inputPath); // sort by path - descending
      }).slice(0,4);
    });

    eleventyConfig.addGlobalData("globalSiteData", {
      siteTitle: 'Sven Digital',
      rootpath: '/'
    });
    return {
      dir: {
        input: '.',
        output: 'dist',
        includes: '_includes',
      }
    }
  };
