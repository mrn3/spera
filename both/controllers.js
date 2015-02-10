AppController = RouteController.extend({
  layoutTemplate: 'appLayout'
});

HomeController = AppController.extend({
  waitOn: function () {
    return Meteor.subscribe('circles');
  },
  data: function () {
    return {
      circles: Circles.find({}, {sort: {numberOfVotes: -1, name: -1}})
    };
  }
});


NotificationsController = AppController.extend({
});

ProfileController = AppController.extend({
  waitOn: function () {
    if (Meteor.userId()) {
      return Meteor.subscribe('user', Meteor.userId());
    }
  },
  data: function () {
    if (Meteor.userId()) {
      return {
        user: Meteor.user()
      }
    }
  }
});

SettingsController = AppController.extend({
  waitOn: function () {
    return Meteor.subscribe('circles');
  },
  data: function () {
    return {
      circles: Circles.find({}, {sort: {numberOfVotes: -1, name: -1}})
    };
  }
});
