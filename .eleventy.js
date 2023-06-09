const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");



module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./site/assets');
    eleventyConfig.addPlugin(syntaxHighlight);
    
    eleventyConfig.addCollection("techSortByDate", function(collectionApi) {

      return collectionApi.getFilteredByTag('tech').sort(function(a, b) {
        //return a.date - b.date; // sort by date - ascending
        return b.date - a.date; // sort by date - descending
        //return a.inputPath.localeCompare(b.inputPath); // sort by path - ascending
        //return b.inputPath.localeCompare(a.inputPath); // sort by path - descending
      });
    });

    eleventyConfig.addCollection("photoSortByDate", function(collectionApi) {

      return collectionApi.getFilteredByTag('photo').sort(function(a, b) {
        //return a.date - b.date; // sort by date - ascending
        return b.date - a.date; // sort by date - descending
        //return a.inputPath.localeCompare(b.inputPath); // sort by path - ascending
        //return b.inputPath.localeCompare(a.inputPath); // sort by path - descending
      });
    });

    
    
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
        input: './site',
        output: 'dist',
        includes: '_includes',
      }
    }
  };
