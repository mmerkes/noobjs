App.JqueryRoute = Ember.Route.extend({
  model: function() {
    return this.store.filter('post', function( record ) { 
        return record.get('tags').contains('jquery');
    });
  }
});
