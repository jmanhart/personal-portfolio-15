if (Meteor.isServer) {
    Meteor.methods({
        'getTumblr': function getTumblr() {
            var tumblr = Meteor.npmRequire('tumblr');

            var oauth = {
                consumer_key: 'HibIRGJAg2t8P0eu1K9ndWIiJtMnoajtO2OkUa2wpoPLxF0fDC',
                consumer_secret: 'zSNtn3fzLX4CfOApbXBRXrPVbcMUkm6WTXY1fHuyh35a43ExkS',
                token: 'CYtlvXzvWnGmNZrPgzpKRwQCrM1x99vspcRYUqbMBMybTzTPk1',
                token_secret: 'OVRdAxP5hPEKWm9gjev55LNxzMm9vjP28ShmelhGz7qDn3tK54'
            };
            var blog = new tumblr.Blog('jmanhart.tumblr.com', oauth);

            blog.text({limit: 2}, function(error, response) {
                if (error) {
                    throw new Error(error);
                }

                //TODO: return response.posts when the object isn't empty I.E. return response.posts
                console.log(response.posts);
            });


        }
    })

}