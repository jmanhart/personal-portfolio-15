Template.blog.rendered = function(){
	console.log('getting posts')


      Meteor.call('getTumblr', function(err, res){
      	if(!err){
			var posts = res.data.response.posts 

			console.log(posts)
      		Session.set('posts', posts)
      	}else{
      		console.log(err)
      	}
      });
        
    
}


Template.blog.helpers({
	'posts':function(){
		return Session.get('posts')
	},
	'dateFormatted':function(){
		return moment(this.date).calendar()
	}
})