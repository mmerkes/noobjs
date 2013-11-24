App.UnderscoreController = Ember.ArrayController.extend({
	sortProperties: ['creationDate'],
	sortAscending: true,

	underscorePosts: function() {
		var posts = this.get('model');

		return posts.filter( function( post ) {
			var tags = post.get('tags');

			if( tags.indexOf('underscore') === 0 )
				return true;
		});
	}.property('model.@each')
});