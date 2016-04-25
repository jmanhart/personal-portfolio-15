<<<<<<< HEAD
Meteor.startup(function() {
    if(ShopList.find().count() < 1) {
        ShopList.insert({
            "name": "name here",
            "location": "location here",
            "description": "the description would go here",
            "rating": 4
        });
        ShopList.insert({
            "name": "Other name here",
            "location": "Other location here",
            "description": "the description would go here",
            "rating": 4
        })
    }    
})
=======
// Meteor.startup(function() {
//     if(ShopList.find().count() < 1) {
//         ShopList.insert({
//             "name": "name here",
//             "location": "location here",
//             "description": "the description would go here",
//             "rating": 4
//         });
//         ShopList.insert({
//             "name": "Other name here",
//             "location": "Other location here",
//             "description": "the description would go here",
//             "rating": 4
//         })
//     }    
// })
>>>>>>> df31d5f52985b6de86418c4270c47d2d54c36518
