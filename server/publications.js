Meteor.publish('circles', function() {
  return Circles.find();
});

Meteor.publish('circlesSearch', function(query) {
  check(query, String);

  if (_.isEmpty(query)) {
    return this.ready();
  }

  return Circles.search(query);
});

Meteor.publishComposite('circle', function(_id) {
  return {
    find: function() {
      return Circles.find({_id: _id});
    },
    children: [
      {
        find: function(product) {
          return Meteor.users.find({_id: product.userId});
        }
      },
      {
        find: function(product) {
          return Meteor.users.find({_id: product.voterIds});
        }
      },
      {
        find: function(product) {
          return Comments.find({productId: product._id});
        },
        children: [
          {
            find: function(comment) {
              return Meteor.users.find({_id: comment.userId});
            }
          }
        ]
      }
    ]
  };
});

Meteor.publishComposite('user', function(_id) {
  return {
    find: function() {
      return Meteor.users.find({_id: _id});
    },
    children: [
      {
        find: function(user) {
          return Circles.find({_id: {$in: user.profile.votedProductIds}});
        }
      }
    ]
  };
});
