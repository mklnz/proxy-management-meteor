Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  action() {
    Router.go('/sign-in');
  }
});

Router.route('/profile', {
  name: 'profile',
  template: 'profile',
  action() {
    this.render();
  }
});

Router.route('/p/:username', {
  action() {
    this.render('Post');
  }
});

Router.route('/files/:filename', function () {

});
