App.PostsAllController = Ember.ArrayController.extend({
	sortProperties: ['title'],
	sortAscending: true,

	filterText: '',

	// thanks to http://emberjs.jsbin.com/OqowIni/1/edit for 
	// showing me how to create the filter
	filterContent: function() {
		var filterText = this.get('filterText').toLowerCase();

		if( Ember.isEmpty( filterText )) {
			this.forEach( function( post ) {
				post.set('cssFilter', 'show');
			});
		} else {
			this.forEach( function( post ) {
				if ( post.get('tags').join('').indexOf( filterText ) >= 0) {
					post.set('cssFilter', 'show');
				} else {
					post.set('cssFilter', 'hide');
				}
			});
		}
	}.observes('filterText')
});