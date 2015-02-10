Meteor.startup(function() {
  ServiceConfiguration.configurations.remove({service: 'meteor-developer'});
  ServiceConfiguration.configurations.insert({
    service: 'meteor-developer',
    //clientId: Meteor.settings.meteorDeveloper.clientId,
    //secret: Meteor.settings.meteorDeveloper.secret
    clientId: "AF8xkkHmgaDuKot2y",
    secret: "G5m7WnHqya2RJSgoBEPnBDMZmdkH6NsPHj"
  });
});

Accounts.onCreateUser(function(options, user) {
  user.emails = user.services['meteor-developer'].emails;
  user.profile = options.profile;
  return user;
});
