client.userInfo(function (err, data) {
    data.user.blogs.forEach(function (blog) {
        console.log(blog.name);
    });
});
