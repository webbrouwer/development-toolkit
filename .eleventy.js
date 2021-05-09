const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
	
	// Add navigation plugin
	eleventyConfig.addPlugin(eleventyNavigationPlugin);	

	// Add syntaxHighlight plugin
	eleventyConfig.addPlugin(syntaxHighlight);	

	eleventyConfig.addPassthroughCopy('./src/assets/css/style.css');

	// Make 11ty watch dist and start template engine
	return {
	    htmlTemplateEngine: 'njk',		
		dir: {
			input: 'src',
			output: 'dist'
		}
	};	

};