App.Router.map(function() {
	this.resource('posts', function() {
		this.route('home');
		this.resource('js', function() {
			this.route('post', { path: '/:post_id' });
		});
		this.resource('jquery', function() {
			this.route('post', { path: '/:post_id' });
		});
		this.resource('underscore', function() {
			this.route('post', { path: '/:post_id' });
		});
		this.resource('projects', function() {
			this.route('post', { path: '/:post_id' });
		});
		this.route('resources');
		this.resource('post', { path: '/:post_id' }, function() {
			this.route('review');
		});
	});
});