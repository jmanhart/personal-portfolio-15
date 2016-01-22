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
  this.route('dev', {
    path: '/work/dev',
    template: 'dev'
  });
});

Router.map(function() {
  this.route('home2', {
    path: '/work/home2',
    template: 'home2'
  });
});

Router.map(function() {
  this.route('about', {
    path: '/about',
    template: 'about'
  });
});

Router.map(function() {
  this.route('bush', {
    path: '/work/bush',
    template: 'bush'
  });
});

Router.map(function() {
  this.route('sbx', {
    path: '/work/sbx',
    template: 'sbx'
  });
});

Router.map(function() {
  this.route('sgfc', {
    path: '/work/sgfc',
    template: 'sgfc'
  });
});

Router.map(function() {
  this.route('cobb', {
    path: '/work/cobb',
    template: 'cobb'
  });
});

Router.map(function() {
  this.route('uni', {
    path: '/work/uni',
    template: 'uni'
  });
});


Router.map(function() {
  this.route('coffee', {
    path: '/coffee',
    template: 'coffee'
  });
});



