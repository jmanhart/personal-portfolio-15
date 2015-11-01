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
  this.route('about', {
    path: '/about',
    template: 'about'
  });
});

Router.map(function() {
  this.route('resume', {
    path: '/resume',
    template: 'resume'
  });
});

Router.map(function() {
  this.route('blog', {
    path: '/blog',
    template: 'blog'
  });
});

Router.map(function() {
  this.route('contact', {
    path: '/contact',
    template: 'contact'
  });
});

Router.map(function() {
  this.route('books', {
    path: '/blog/books',
    template: 'books'
  });
});

Router.map(function() {
  this.route('sketch', {
    path: '/blog/sketch',
    template: 'sketch'
  });
});
