App.Router.map(function() {
	this.resource('posts', function() {
		this.route('home');
		this.resource('js');
		this.resource('jquery');
		this.resource('funk');
		this.resource('projects');
		this.resource('kitchen_sink');
		this.resource('hire_me');
		this.route('resources');
		this.resource('post', { path: '/:post_id' });
		this.route('all');
	});
});
