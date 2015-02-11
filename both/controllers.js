AppController = RouteController.extend({
  layoutTemplate: 'appLayout'
});

HomeController = AppController.extend({
  waitOn: function () {
    return Meteor.subscribe('products');
  },
  data: function () {
    return {
      products: Products.find({}, {sort: {numberOfVotes: -1, name: -1}})
    };
  }
});

CirclesController = AppController.extend({
});

NotificationsController = AppController.extend({
});

SettingsController = AppController.extend({
  waitOn: function () {
    return Meteor.subscribe('products');
  },
  data: function () {
    return {
      products: Products.find({}, {sort: {numberOfVotes: -1, name: -1}})
    };
  }
});
