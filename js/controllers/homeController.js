App.PostsHomeController = Ember.ArrayController.extend({
	sortProperties: ['creationDate'],
	sortAscending: true,
  limitedContent: function() {
    var content = this.get('content');
    var newSet = [];
    content.forEach( function( post ) {
      newSet.unshift( post );
    });

    return newSet.slice(0, 6);
  }.property('content')
});
