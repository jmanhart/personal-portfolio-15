// Template.quotes.rendered = function(){
// 	console.log('getting quotes')
//
//
//       Meteor.call('getQuotes', function(err, res){
//       	if(!err){
// 			var posts = res.data.response.posts
//
// 			console.log(posts)
//       		Session.set('posts', posts)
//       	}else{
//       		console.log(err)
//       	}
//       });
//
//
// }


// Template.quotes.helpers({
// 	'posts':function(){
// 		return Session.get('posts')
// 	},
// 	'dateFormatted':function(){
// 		var d = new Date (this.date)
// 		return moment(d).calendar()
// 	}
// })
