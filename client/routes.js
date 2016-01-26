Router.configure({
  layoutTemplate: 'layout'
});


Router.map(function() {
  this.route('home', {
    path: '/',
    template: 'home'
  });
});


Router.map(function() {
  this.route('bush', {
    path: '/bush',
    template: 'bush'
  });
});


Router.map(function() {
  this.route('coffee', {
    path: '/coffee',
    template: 'coffee'
  });
});

Router.map(function() {
  this.route('blog', {
    path: '/blog',
    template: 'blog'
  });
});

Router.map(function() {
  this.route('bushbfpage', {
    path: '/bushbfpage',
    template: 'bushbfpage'
    
  });
});

Router.map(function() {
  this.route('bushcopage', {
    path: '/bushcopage',
    template: 'bushcopage'
  });
});

Router.map(function() {
  this.route('cobb', {
    path: '/cobb',
    template: 'cobb'
  });
});

Router.map(function() {
  this.route('sbxpage', {
    path: '/sbxpage',
    template: 'sbxpage'
  });
});


Router.map(function() {
  this.route('about', {
    path: '/about',
    template: 'about'
  });
});

Router.map(function() {
  this.route('contact', {
    path: '/contact',
    template: 'contact'
  });
});




