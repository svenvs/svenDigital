const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const Image = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./site/assets');
    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.addShortcode("image", async function(src, alt, sizes, gallery) {
      let metadata = await Image(src, {
        widths: [300, 600],
        outputDir: "./dist/img/",
        //formats: ["webp"],
        sharpOptions: {
          quality:100,
        }
      });
  
      let imageAttributes = {
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
        class: "img-fluid",
       // height: "null",
      };

      if (gallery){
        // hack for masonary height is messing the pictures up this for sure is gonne bite me one day :D
        return Image.generateHTML(metadata, imageAttributes);
      } else {
        return Image.generateHTML(metadata, imageAttributes);
      }
      
    });
    
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
