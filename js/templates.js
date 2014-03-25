Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push(" \n      <a href=\"#home\">HOME</a>\n    ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push(" \n      <a href=\"#js\">jsVANILLA</a>\n    ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push(" \n      <a href=\"#jquery\">jQUERY</a>\n    ");
  }

function program7(depth0,data) {
  
  
  data.buffer.push(" \n      <a href=\"#funk\">FUNK</a>\n    ");
  }

function program9(depth0,data) {
  
  
  data.buffer.push(" \n      <a href=\"#projects\">DINKY PROJECTS</a>\n    ");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("\n      <a href=\"#kitchen_sink\">KITCHEN SINK</a>\n    ");
  }

function program13(depth0,data) {
  
  
  data.buffer.push(" \n      <a href=\"#resources\">RESOURCES</a>\n    ");
  }

function program15(depth0,data) {
  
  
  data.buffer.push(" \n      <a href=\"#hire_me\">HIRE ME</a>\n    ");
  }

  data.buffer.push("<div id=\"header\">\n<div>\n  <img src=\"./images/icon128.png\" class=\"logo\" />\n  <h5>Code of the noobs, by the noobs, for the noobs</h5>\n</div>\n\n<nav class=\"clearfix\">\n  <ul class=\"clearfix\">\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "posts.home", options) : helperMissing.call(depth0, "link-to", "posts.home", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "js", options) : helperMissing.call(depth0, "link-to", "js", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "jquery", options) : helperMissing.call(depth0, "link-to", "jquery", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "funk", options) : helperMissing.call(depth0, "link-to", "funk", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "projects", options) : helperMissing.call(depth0, "link-to", "projects", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "kitchen_sink", options) : helperMissing.call(depth0, "link-to", "kitchen_sink", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "posts.resources", options) : helperMissing.call(depth0, "link-to", "posts.resources", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li"),
    'class': ("right")
  },hashTypes:{'tagName': "STRING",'class': "STRING"},hashContexts:{'tagName': depth0,'class': depth0},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "hire_me", options) : helperMissing.call(depth0, "link-to", "hire_me", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </ul>\n  ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.MenuView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</nav>\n</div>\n\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["funk"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "post", "post", options) : helperMissing.call(depth0, "link-to", "post", "post", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("<a href=\"#post\">");
  stack1 = helpers._triageMustache.call(depth0, "post.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>");
  return buffer;
  }

  data.buffer.push("<h3>Welcome NOOBjs Funk!</h3>\n<p>Do you like to get your funky on? At NOOBjs, we like to get funky all the time! We also like to do functional programming. Functional programming breaks complicated problems into small pieces, and isolates the problem to avoid side effects.</p>\n<p>If you&#39;ve ever played around with the <a href=\"http://underscorejs.org\">Underscore library</a>, you&#39;ve experienced a functional library. It&#39;s considered a JavaScript utility-belt library, and it does a bunch of cool things that we all wish was in the JavaScript core library. For educational purposes, We&#39;ve created a library called <a href=\"https://github.com/mmerkes/noobjs_funk\">NOOBjs Funk</a>, which is essentially a clone-from-scratch of the Underscore library. A series of articles will be written on the process of creating these methods, and the goal is to create a readable library for your everyday noob to understand.</p>\n<hr>\n<h3>Explore:</h3>\n<ul class=\"nav nav-stacked\">\n  ");
  stack1 = helpers.each.call(depth0, "post", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n");
  return buffer;
  
});

Ember.TEMPLATES["hire_me"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h3>Looking for a JavaScript developer?</h3>\n<p>If you&#39;re looking for a full-stack JavaScript developer, you&#39;ve come to the right place. I&#39;m currently available for contracting and full-time employment. I have experience with the following technologies:</p>\n<div id=\"hire_me\">\n  <ul>\n    <li>Node.js</li>\n    <li>Ember.js</li>\n    <li>Handlebars.js</li>\n    <li>Backbone.js</li>\n    <li>Grunt</li>\n    <li>MongoDB</li>\n    <li>PostgreSQL</li>\n    <li>And much more...</li>\n  </ul>\n  <p>Feel free to contact me for more information and check on my online presence:</p>\n  <ul>\n    <li><a href=\"http://www.linkedin.com/pub/matt-merkes/45/4ab/564\">LinkedIn</a></li>\n    <li><a href=\"https://twitter.com/mattmerkes\">Twitter</a></li>\n    <li><a href=\"https://github.com/mmerkes\">GitHub</a></li>\n    <li><a href=\"http://stackoverflow.com/users/2802626/emptyarsenal\">Stack Overflow</a></li>\n  </ul>\n</div>\n");
  
});

Ember.TEMPLATES["jquery"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "post", "post", options) : helperMissing.call(depth0, "link-to", "post", "post", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("<a href=\"#post\">");
  stack1 = helpers._triageMustache.call(depth0, "post.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>");
  return buffer;
  }

  data.buffer.push("<h3>Welcome the jQuery Quandaries! </h3>\n<p>Do you use jQuery? Yeah, that&#39;s kind of a dumb question because it seems really hard NOT to use jQuery. It&#39;s easy to use, and it makes a whole lot of magic happen without a lot of code. In particular, the jQuery library makes the DOM much easier to wrestle into submission.</p>\n<p>This section is dedicated to all things jQuery. Whether you&#39;re looking for some examples or deeper explanations of jQuery methods and features, you&#39;ve come to the right place! We&#39;re furiously writing new content, so stay tuned!</p>\n<hr>\n<h3>Explore:</h3>\n<ul class=\"nav nav-stacked\">\n  ");
  stack1 = helpers.each.call(depth0, "post", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n");
  return buffer;
  
});

Ember.TEMPLATES["js"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "post", "post", options) : helperMissing.call(depth0, "link-to", "post", "post", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("<a href=\"#post\">");
  stack1 = helpers._triageMustache.call(depth0, "post.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>");
  return buffer;
  }

  data.buffer.push("<h3>Welcome jsVanilla! </h3>\n<p>Do you like to take your JavaScript straight? Well, this is the page for you! We explore every facet of JavaScript - from objects to callbacks to manipulating the DOM without jQuery. Sounds scary, I know, but read on brave adventurer!</p>\n<hr>\n<h3>Explore:</h3>\n<ul class=\"nav nav-stacked\">\n  ");
  stack1 = helpers.each.call(depth0, "post", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n");
  return buffer;
  
});

Ember.TEMPLATES["kitchen_sink"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "post", "post", options) : helperMissing.call(depth0, "link-to", "post", "post", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("<a href=\"#post\">");
  stack1 = helpers._triageMustache.call(depth0, "post.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>");
  return buffer;
  }

  data.buffer.push("<h3>Welcome the Kitchen Sink! </h3>\n<p>Over at the Kitchen Sink, you&#39;ll find all of the stragglers. As a JavaScript developer, you need to use all manner of tools to get your job done. Web hosting services, HTTP routes, GIT, and tons of other tools or anything related to development.</p>\n<p>Anything that doesn&#39;t have a home anywhere else will be here. Check it out!</p>\n<hr>\n<h3>Explore:</h3>\n<ul class=\"nav nav-stacked\">\n  ");
  stack1 = helpers.each.call(depth0, "post", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n");
  return buffer;
  
});

Ember.TEMPLATES["menu"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<span class=\"icon-bar\"></span>\n<span class=\"icon-bar\"></span>\n<span class=\"icon-bar\"></span>\n");
  
});

Ember.TEMPLATES["post"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <span>");
  stack1 = helpers._triageMustache.call(depth0, "tag", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n  ");
  return buffer;
  }

  data.buffer.push("<h2>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n<div>");
  data.buffer.push(escapeExpression((helper = helpers.formatMarkdown || (depth0 && depth0.formatMarkdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "post_content", options) : helperMissing.call(depth0, "formatMarkdown", "post_content", options))));
  data.buffer.push("</div>\n<div class=\"tags\">\n  ");
  stack1 = helpers.each.call(depth0, "tag", "in", "tags", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n<p> Created ");
  data.buffer.push(escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "creationDate", options) : helperMissing.call(depth0, "formatDate", "creationDate", options))));
  data.buffer.push("</p>\n<p> By ");
  stack1 = helpers._triageMustache.call(depth0, "author", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </p>\n");
  return buffer;
  
});

Ember.TEMPLATES["posts"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "post", "post", options) : helperMissing.call(depth0, "link-to", "post", "post", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" \n        <a href=\"#post\">");
  stack1 = helpers._triageMustache.call(depth0, "post.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n      ");
  return buffer;
  }

  data.buffer.push("<div class=\"container\">\n<div class=\"content two-thirds column\">\n\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n</div>\n\n<div id=\"recent-articles\" class=\"one-third column\">\n<div id=\"about_me\">\n    <h3>About Me</h3>\n    <img src=\"images/profile_pic.jpg\" alt=\"A handsome devel\" class=\"img-rounded profile\" align=\"right\"> \n    <p>Hi there, my name is Matt Merkes, and I&#39;m a recovering JavaScript noob based out of Seattle, WA. I&#39;m a full-stack JavaScript developer who loves playing around with Node, front-end frameworks, and educating people about JavaScript.</p>\n  </div>\n  <hr>\n  <h3>Recent articles:</h3>\n  <ul>\n    ");
  stack1 = helpers.each.call(depth0, "post", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </ul>  \n</div>\n</div>\n<div id=\"footer\" class=\"sixteen columns\">\n<hr />\n<p class=\"right\">&copy; Matt Merkes</p>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["posts/all"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li"),
    'class': ("post.cssFilter")
  },hashTypes:{'tagName': "STRING",'class': "ID"},hashContexts:{'tagName': depth0,'class': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "post", "post", options) : helperMissing.call(depth0, "link-to", "post", "post", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <a href=\"#post\">");
  stack1 = helpers._triageMustache.call(depth0, "post.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n    ");
  return buffer;
  }

  data.buffer.push("<h3>Search by tag</h3>\n");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("filterText"),
    'placeholder': ("Search away!")
  },hashTypes:{'value': "ID",'placeholder': "STRING"},hashContexts:{'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n<hr>\n<ul class=\"nav nav-stacked\">\n  ");
  stack1 = helpers.each.call(depth0, "post", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n");
  return buffer;
  
});

Ember.TEMPLATES["posts/home"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  <li>\n    <h3>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("link")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "post", "post", options) : helperMissing.call(depth0, "link-to", "post", "post", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h3>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.formatMarkdown || (depth0 && depth0.formatMarkdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "post.snippet", options) : helperMissing.call(depth0, "formatMarkdown", "post.snippet", options))));
  data.buffer.push("\n  </li>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "post.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

  data.buffer.push("<div class=\"content\">\n<h2>Welcome to NOOBjs.org!</h2>\n<p>Here at NOOBjs, we&#39;re generating content for the everyday noob hoping to become a better JavaScript developer. Becoming a full-blown developer is HARD - we understand. There&#39;s a lot to learn, and while there are many resources available, where do you start? You start here.</p>\n\n<p>Our hope is to not only help eager noobs gain sweet skills and make rockstar web apps, but we write our content to also serve developers beyond noobhood as a refresher of key concepts and an introduction to new concepts and libraries. We grow with you!</p>\n</div>\n<hr>\n<ul id=\"snippets\">\n");
  stack1 = helpers.each.call(depth0, "post", "in", "limitedContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n");
  return buffer;
  
});

Ember.TEMPLATES["posts/resources"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("Welcome to the resources page!\n");
  
});

Ember.TEMPLATES["projects"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "post", "post", options) : helperMissing.call(depth0, "link-to", "post", "post", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("<a href=\"#post\">");
  stack1 = helpers._triageMustache.call(depth0, "post.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>");
  return buffer;
  }

  data.buffer.push("<h3>Welcome the Dinky Little Projects! </h3>\n<p>As a noob, we all need practice, practice, practice... That&#39;s great that you can read about something, but sometimes you just need to apply it! Dinky Little Projects is all about practice. Here, we have a set of dinky little projects that aren&#39;t meant to teach you everything about JavaScript, but they&#39;ll at least give you something to practice on.</p>\n<p>Check out a project to explore features of jQuery, Underscore, or JavaScript in general, and maybe a few other libraries, APIs, or frameworks just to mix it up. Legions of mice are working furiously at generating new content, so stay tuned for more Dinky Little Projects!</p>\n<hr>\n<h3>Explore:</h3>\n<ul class=\"nav nav-stacked\">\n  ");
  stack1 = helpers.each.call(depth0, "post", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n");
  return buffer;
  
});