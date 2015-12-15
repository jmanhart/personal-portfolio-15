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
  this.route('work', {
    path: '/work',
    template: 'work'
  });
});

Router.map(function() {
  this.route('blog', {
    path: '/blog',
    template: 'blog'
  });
});

Router.map(function() {
  this.route('design', {
    path: '/work/design',
    template: 'design'
  });
});

Router.map(function() {
  this.route('dev', {
    path: '/work/dev',
    template: 'dev'
  });
});


Router.map(function() {
  this.route('coffee', {
    path: '/coffee',
    template: 'coffee',
  });
});



    // waitOn: function() {
    //   Meteor.subscribe('shoplist')
    // }