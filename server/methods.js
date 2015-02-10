Meteor.methods({
  'Circles.vote': function (_id) {
    if (!Meteor.user()) {
      return;
    }

    if (_(Meteor.user().profile.votedCircleIds).include(_id)) {
      return;
    }

    Circles.update({_id: _id}, {$inc: {numberOfVotes: 1}, $addToSet: {voterIds: this.userId}});
    Meteor.users.update({_id: this.userId}, {$addToSet: {'profile.votedCircleIds': _id}});
  }
});
