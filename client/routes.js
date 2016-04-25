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

Router.map(function() {
  this.route('blog', {
    path: '/blog',
    template: 'blog'
  });
});

Router.map(function() {
  this.route('cobb', {
    path: '/cobb',
    template: 'cobb'
  });
});

Router.map(function() {
  this.route('sbx', {
    path: '/sbx',
    template: 'sbx'
  });
});

Router.map(function() {
  this.route('bush', {
    path: '/bush',
    template: 'bush'
  });
});

Router.map(function() {
  this.route('sgfc', {
    path: '/sgfc',
    template: 'sgfc'
  });
});

Router.map(function() {
<<<<<<< HEAD
  this.route('coffee', {
    path: '/coffee',
    template: 'coffee',
=======
  this.route('colophon', {
    path: '/colophon',
    template: 'colophon'
>>>>>>> df31d5f52985b6de86418c4270c47d2d54c36518
  });
});



    // waitOn: function() {
    //   Meteor.subscribe('shoplist')
    // }