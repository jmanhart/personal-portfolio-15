Meteor.methods({
	addShop: function(doc) {
		var name = doc.name;

		ShopList.insert({ 
			name: name 
		});
	}
})