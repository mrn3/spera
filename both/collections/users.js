Meteor.users.before.insert(function (userId, doc) {
  doc.profile.votedProductIds = [];
});

Meteor.users.helpers({
  votedCircles: function () {
    return Circles.find({_id: {$in: this.profile.votedProductIds}});
  }
});
