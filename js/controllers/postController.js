App.PostController = Ember.ObjectController.extend({
  formatCode: function(){
    if(this.get('content.isLoaded')){
      window.setTimeout( function() {
        $('code').addClass('prettyprint');
        prettyPrint();
        window.scrollTo(0,0);
      });
    }
  }.observes('content.isLoaded')
});
