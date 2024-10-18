
import { getAllFiles, getAllFilesSync } from 'get-all-files'
import * as path from 'path'
import ExifReader from 'exifreader';

let paths = [];

function normalizeForBrowser(pad){
  //F u windows :D
  return path.normalize(pad).replaceAll('\\', '/');
}

export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  for await (const filename of getAllFiles(`assets/photo/portfolio`)) {
    // Could break early on some condition and get-all-files
    // won't have unnecessarily accumulated the filenames in an array
    const tags = await ExifReader.load(filename);

    paths.push({path: normalizeForBrowser(filename), keywords: tags?.Keywords, orientation: tags?.Orientation});
  }

  eleventyConfig.addGlobalData("photoPaths", paths);

  eleventyConfig.addNunjucksTag("SVTooJSON", function (nunjucksEngine) {
    return new (function () {
      this.tags = ["SVTooJSON"];

      this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);

        return new nodes.CallExtensionAsync(this, "run", args);
      };

      this.run = function (context, myStringArg, callback) {
        //onpurpose not safe bcz else the json characters arethrere
        let ret = new nunjucksEngine.runtime.SafeString(
          JSON.stringify(myStringArg, undefined, 4)
        );
        callback(null, ret);
      };
    })();
  });


  return {
    dir: {
      input: "./site",
      output: "dist"
    }
  }
};