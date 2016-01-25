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
  this.route('bushbreak', {
    path: '/bushbreak',
    template: 'bushbreak'
    
  });
});

Router.map(function() {
  this.route('bushco', {
    path: '/bushco',
    template: 'bushco'
  });
});





