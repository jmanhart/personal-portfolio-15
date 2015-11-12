client.blogInfo('jmanhart.tumblr.com', function (err, data) {
    data.blogs.forEach(function (blog) {
        console.log(blog.name);
    });
});
