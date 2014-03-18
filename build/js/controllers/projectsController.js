App.ProjectsController = Ember.ArrayController.extend({
	sortProperties: ['creationDate'],
	sortAscending: true
/*
	jsPosts: function() {
		var posts = this.get('model');

		return posts.filter( function( post ) {
			var tags = post.get('tags');

			if( tags.indexOf('javascript') !== -1 )
				return true;
		});
	}.property('model.@each') */
});