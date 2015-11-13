Template.blog.helpers({

    getTumblr: function getTumblr() {
        if (Meteor.isClient) {
            return Meteor.call('getTumblr');
        }
    }
});
