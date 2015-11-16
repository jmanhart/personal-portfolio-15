if (Meteor.isServer) {
    Meteor.methods({
        'getTumblr': function() {
           return HTTP.get('http://api.tumblr.com/v2/blog/jmanhart.tumblr.com/posts?api_key=HibIRGJAg2t8P0eu1K9ndWIiJtMnoajtO2OkUa2wpoPLxF0fDC'
           )

       }
        
    })

}