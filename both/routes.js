Router.route('/', {
  name: 'home'
});

Router.route('/circles', {
  name: 'circles'
});

Router.route('/products/:_id', {
  name: 'products.show'
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
