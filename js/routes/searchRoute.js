App.PostsAllRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('posts');
	}
});