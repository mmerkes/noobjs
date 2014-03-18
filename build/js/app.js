window.App = Ember.Application.create();

/*
App.PullView = Ember.View.extend({
  click: function(evt) {
    $(function() {  
      var pull        = $('#pull');  
          menu        = $('nav ul');  
          menuHeight  = menu.height();  
    
      $(pull).on('click', function(e) {  
          e.preventDefault();  
          menu.slideToggle();  
      });  
    }); 

    // Resize menu when user leaves
    $(window).resize(function(){  
      var w = $(window).width();  
      if(w > 480 && menu.is(':hidden')) {  
          menu.removeAttr('style');  
      }  
    });
  }
});
*/
