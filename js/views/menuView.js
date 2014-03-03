App.MenuView = Ember.View.extend({
  templateName: 'menu',
  tagName: 'a',
  attributeBindings: ['href'],
  href: '#',
  classNames: ['pull'],
  didInsertElement: function() {
    jQuery(function() {  
      var pull        = jQuery('.pull');  
          menu        = jQuery('nav ul');  
          menuHeight  = menu.height();  
    
      jQuery(pull).on('click', function(e) {  
          e.preventDefault();  
          menu.slideToggle();  
      });  
    }); 

    // Resize menu when user leaves
    jQuery(window).resize(function(){  
      var w = jQuery(window).width();  
      if(w > 480 && menu.is(':hidden')) {  
          menu.removeAttr('style');  
      }  
    });
  }
});

