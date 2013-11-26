App.Router.map(function() {
	this.resource('posts', function() {
		this.route('home');
		this.resource('js');
		this.resource('jquery');
		this.resource('underscore');
		this.resource('projects');
		this.route('resources');
		this.resource('post', { path: '/:post_id' });
		this.route('all');
	});
});