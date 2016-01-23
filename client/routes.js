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





