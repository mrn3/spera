Router.route('/', {
  name: 'home'
});

Router.route('/circles/:_id', {
  name: 'circles.show'
});

Router.route('/users/:_id', {
  name: 'users.show'
});

Router.route('/notifications', {
  name: 'notifications'
});

Router.route('/settings', {
  name: 'settings'
});
