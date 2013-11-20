// use moment.js to formate the creation date for the post
Ember.Handlebars.helper('formatDate', function(date) {
	return moment(date).fromNow();
});

// use showdown.js to format the post content in Markdown
var showdown = new Showdown.converter();

Ember.Handlebars.registerBoundHelper('formatMarkdown', function(post_content) {
	return new Handlebars.SafeString(showdown.makeHtml(post_content));
});

// Trim the post content for the home page and return in Markdown
Ember.Handlebars.helper('trimContent', function(post_content) {
	return new Handlebars.SafeString(showdown.makeHtml(post_content.substr(0, 250) + '...'));
});

// Limit the amount of results to iterate through, yet behave like {{#each}}
// http://stackoverflow.com/questions/10377700/limit-results-of-each-in-handlebars-js
