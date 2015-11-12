
var tumblr = require('tumblr.js');
var client = tumblr.createClient({
      consumer_key: 'HibIRGJAg2t8P0eu1K9ndWIiJtMnoajtO2OkUa2wpoPLxF0fDC',
  	  consumer_secret: 'zSNtn3fzLX4CfOApbXBRXrPVbcMUkm6WTXY1fHuyh35a43ExkS',
  	  token: 'CYtlvXzvWnGmNZrPgzpKRwQCrM1x99vspcRYUqbMBMybTzTPk1',
  	  token_secret: 'OVRdAxP5hPEKWm9gjev55LNxzMm9vjP28ShmelhGz7qDn3tK54'
});


client.blogInfo('jmanhart.tumblr.com', function (err, data) {
    data.blogs.forEach(function (blog) {
        console.log(blog.name);
    });
});
