if (Meteor.isServer) {
	// Authenticate via OAuth
	var tumblr = require('tumblr.js');
	var client = tumblr.createClient({
	  consumer_key: 'HibIRGJAg2t8P0eu1K9ndWIiJtMnoajtO2OkUa2wpoPLxF0fDC',
	  consumer_secret: 'zSNtn3fzLX4CfOApbXBRXrPVbcMUkm6WTXY1fHuyh35a43ExkS',
	  token: 'CYtlvXzvWnGmNZrPgzpKRwQCrM1x99vspcRYUqbMBMybTzTPk1',
	  token_secret: 'OVRdAxP5hPEKWm9gjev55LNxzMm9vjP28ShmelhGz7qDn3tK54'
	});

		// Make the request
	client.posts('jmanhart.tumblr.com', function (err, data) {
	    {
		  "meta": {
		    "status": 200,
		    "msg": "OK"
		  },
		  "response": {
		    "blog": {
		      "title": "",
		      "name": "jmanhart",
		      "posts": 6,
		      "url": "http://jmanhart.tumblr.com/",
		      "updated": 1443800365,
		      "description": "things and such",
		      "is_nsfw": false,
		      "ask": false,
		      "ask_page_title": "Ask me anything",
		      "ask_anon": false,
		      "share_likes": true,
		      "likes": 6
		    },
		    "posts": [
		      {
		        "blog_name": "jmanhart",
		        "id": 130339530870,
		        "post_url": "http://jmanhart.tumblr.com/post/130339530870",
		        "slug": "",
		        "type": "photo",
		        "date": "2015-10-02 15:39:23 GMT",
		        "timestamp": 1443800363,
		        "state": "published",
		        "format": "html",
		        "reblog_key": "BDB9Pzeu",
		        "tags": [
		          "springfield mo",
		          "missouri"
		        ],
		        "short_url": "http://tmblr.co/Z2R_Rx1vOrsXs",
		        "recommended_source": null,
		        "recommended_color": null,
		        "highlighted": [],
		        "note_count": 1,
		        "caption": "",
		        "reblog": {
		          "tree_html": "",
		          "comment": ""
		        },
		        "trail": [],
		        "image_permalink": "http://jmanhart.tumblr.com/image/130339530870",
		        "photos": [
		          {
		            "caption": "",
		            "alt_sizes": [
		              {
		                "url": "https://38.media.tumblr.com/c8ae780b25d915ad7f19b75551ff60df/tumblr_nvlnhnW2HP1qkamv2o1_250.gif",
		                "width": 200,
		                "height": 200
		              },
		              {
		                "url": "https://38.media.tumblr.com/c8ae780b25d915ad7f19b75551ff60df/tumblr_nvlnhnW2HP1qkamv2o1_100.gif",
		                "width": 100,
		                "height": 100
		              },
		              {
		                "url": "https://33.media.tumblr.com/c8ae780b25d915ad7f19b75551ff60df/tumblr_nvlnhnW2HP1qkamv2o1_75sq.gif",
		                "width": 75,
		                "height": 75
		              }
		            ],
		            "original_size": {
		              "url": "https://38.media.tumblr.com/c8ae780b25d915ad7f19b75551ff60df/tumblr_nvlnhnW2HP1qkamv2o1_250.gif",
		              "width": 200,
		              "height": 200
		            }
		          }
		        ]
		      },
		      {
		        "blog_name": "jmanhart",
		        "id": 129823118750,
		        "post_url": "http://jmanhart.tumblr.com/post/129823118750",
		        "slug": "",
		        "type": "photo",
		        "date": "2015-09-25 03:20:03 GMT",
		        "timestamp": 1443151203,
		        "state": "published",
		        "format": "html",
		        "reblog_key": "4J8mr8vh",
		        "tags": [
		          "skull",
		          "skull and crossbones",
		          "gold",
		          "green"
		        ],
		        "short_url": "http://tmblr.co/Z2R_Rx1uw3vMU",
		        "recommended_source": null,
		        "recommended_color": null,
		        "highlighted": [],
		        "note_count": 0,
		        "caption": "",
		        "reblog": {
		          "tree_html": "",
		          "comment": ""
		        },
		        "trail": [],
		        "image_permalink": "http://jmanhart.tumblr.com/image/129823118750",
		        "photos": [
		          {
		            "caption": "",
		            "alt_sizes": [
		              {
		                "url": "https://40.media.tumblr.com/e8f6baeda2fd20c0c247697c29d620db/tumblr_nv7qlfSzeT1qkamv2o1_1280.jpg",
		                "width": 1200,
		                "height": 917
		              },
		              {
		                "url": "https://41.media.tumblr.com/e8f6baeda2fd20c0c247697c29d620db/tumblr_nv7qlfSzeT1qkamv2o1_500.jpg",
		                "width": 500,
		                "height": 382
		              },
		              {
		                "url": "https://41.media.tumblr.com/e8f6baeda2fd20c0c247697c29d620db/tumblr_nv7qlfSzeT1qkamv2o1_400.jpg",
		                "width": 400,
		                "height": 306
		              },
		              {
		                "url": "https://40.media.tumblr.com/e8f6baeda2fd20c0c247697c29d620db/tumblr_nv7qlfSzeT1qkamv2o1_250.jpg",
		                "width": 250,
		                "height": 191
		              },
		              {
		                "url": "https://41.media.tumblr.com/e8f6baeda2fd20c0c247697c29d620db/tumblr_nv7qlfSzeT1qkamv2o1_100.jpg",
		                "width": 100,
		                "height": 76
		              },
		              {
		                "url": "https://41.media.tumblr.com/e8f6baeda2fd20c0c247697c29d620db/tumblr_nv7qlfSzeT1qkamv2o1_75sq.jpg",
		                "width": 75,
		                "height": 75
		              }
		            ],
		            "original_size": {
		              "url": "https://40.media.tumblr.com/e8f6baeda2fd20c0c247697c29d620db/tumblr_nv7qlfSzeT1qkamv2o1_1280.jpg",
		              "width": 1200,
		              "height": 917
		            }
		          }
		        ]
		      },
		      {
		        "blog_name": "jmanhart",
		        "id": 129821964980,
		        "post_url": "http://jmanhart.tumblr.com/post/129821964980",
		        "slug": "",
		        "type": "photo",
		        "date": "2015-09-25 03:00:57 GMT",
		        "timestamp": 1443150057,
		        "state": "published",
		        "format": "html",
		        "reblog_key": "IuvbKyaN",
		        "tags": [
		          "missouri",
		          "springfield mo",
		          "sgf"
		        ],
		        "short_url": "http://tmblr.co/Z2R_Rx1uv-Vgq",
		        "recommended_source": null,
		        "recommended_color": null,
		        "highlighted": [],
		        "note_count": 1,
		        "caption": "",
		        "reblog": {
		          "tree_html": "",
		          "comment": ""
		        },
		        "trail": [],
		        "image_permalink": "http://jmanhart.tumblr.com/image/129821964980",
		        "photos": [
		          {
		            "caption": "",
		            "alt_sizes": [
		              {
		                "url": "https://40.media.tumblr.com/ca92bc633e61382b4db08f2865bccc32/tumblr_nv7ppl7O9C1qkamv2o1_1280.jpg",
		                "width": 1280,
		                "height": 1140
		              },
		              {
		                "url": "https://36.media.tumblr.com/ca92bc633e61382b4db08f2865bccc32/tumblr_nv7ppl7O9C1qkamv2o1_500.jpg",
		                "width": 500,
		                "height": 445
		              },
		              {
		                "url": "https://40.media.tumblr.com/ca92bc633e61382b4db08f2865bccc32/tumblr_nv7ppl7O9C1qkamv2o1_400.jpg",
		                "width": 400,
		                "height": 356
		              },
		              {
		                "url": "https://40.media.tumblr.com/ca92bc633e61382b4db08f2865bccc32/tumblr_nv7ppl7O9C1qkamv2o1_250.jpg",
		                "width": 250,
		                "height": 223
		              },
		              {
		                "url": "https://41.media.tumblr.com/ca92bc633e61382b4db08f2865bccc32/tumblr_nv7ppl7O9C1qkamv2o1_100.jpg",
		                "width": 100,
		                "height": 89
		              },
		              {
		                "url": "https://40.media.tumblr.com/ca92bc633e61382b4db08f2865bccc32/tumblr_nv7ppl7O9C1qkamv2o1_75sq.jpg",
		                "width": 75,
		                "height": 75
		              }
		            ],
		            "original_size": {
		              "url": "https://40.media.tumblr.com/ca92bc633e61382b4db08f2865bccc32/tumblr_nv7ppl7O9C1qkamv2o1_1280.jpg",
		              "width": 1280,
		              "height": 1140
		            }
		          }
		        ]
		      },
		      {
		        "blog_name": "jmanhart",
		        "id": 129589641635,
		        "post_url": "http://jmanhart.tumblr.com/post/129589641635",
		        "slug": "",
		        "type": "photo",
		        "date": "2015-09-21 20:33:14 GMT",
		        "timestamp": 1442867594,
		        "state": "published",
		        "format": "html",
		        "reblog_key": "erImTrvp",
		        "tags": [
		          "jurassic park",
		          "nedry",
		          "developer",
		          "software engineer",
		          "wayne knight",
		          "dennis nedry"
		        ],
		        "short_url": "http://tmblr.co/Z2R_Rx1ui9G6Z",
		        "recommended_source": null,
		        "recommended_color": null,
		        "highlighted": [],
		        "note_count": 0,
		        "caption": "",
		        "reblog": {
		          "tree_html": "",
		          "comment": ""
		        },
		        "trail": [],
		        "image_permalink": "http://jmanhart.tumblr.com/image/129589641635",
		        "photos": [
		          {
		            "caption": "",
		            "alt_sizes": [
		              {
		                "url": "https://41.media.tumblr.com/6602f7334f6a579387869784d4b50d20/tumblr_nv1nreLG9P1qkamv2o1_1280.jpg",
		                "width": 837,
		                "height": 604
		              },
		              {
		                "url": "https://41.media.tumblr.com/6602f7334f6a579387869784d4b50d20/tumblr_nv1nreLG9P1qkamv2o1_500.jpg",
		                "width": 500,
		                "height": 361
		              },
		              {
		                "url": "https://41.media.tumblr.com/6602f7334f6a579387869784d4b50d20/tumblr_nv1nreLG9P1qkamv2o1_400.jpg",
		                "width": 400,
		                "height": 289
		              },
		              {
		                "url": "https://40.media.tumblr.com/6602f7334f6a579387869784d4b50d20/tumblr_nv1nreLG9P1qkamv2o1_250.jpg",
		                "width": 250,
		                "height": 180
		              },
		              {
		                "url": "https://40.media.tumblr.com/6602f7334f6a579387869784d4b50d20/tumblr_nv1nreLG9P1qkamv2o1_100.jpg",
		                "width": 100,
		                "height": 72
		              },
		              {
		                "url": "https://41.media.tumblr.com/6602f7334f6a579387869784d4b50d20/tumblr_nv1nreLG9P1qkamv2o1_75sq.jpg",
		                "width": 75,
		                "height": 75
		              }
		            ],
		            "original_size": {
		              "url": "https://41.media.tumblr.com/6602f7334f6a579387869784d4b50d20/tumblr_nv1nreLG9P1qkamv2o1_1280.jpg",
		              "width": 837,
		              "height": 604
		            }
		          }
		        ]
		      },
		      {
		        "blog_name": "jmanhart",
		        "id": 129568984500,
		        "post_url": "http://jmanhart.tumblr.com/post/129568984500",
		        "slug": "",
		        "type": "photo",
		        "date": "2015-09-21 14:19:27 GMT",
		        "timestamp": 1442845167,
		        "state": "published",
		        "format": "html",
		        "reblog_key": "J0aHASzC",
		        "tags": [
		          "code",
		          "web development",
		          "type"
		        ],
		        "short_url": "http://tmblr.co/Z2R_Rx1ugwSsq",
		        "recommended_source": null,
		        "recommended_color": null,
		        "highlighted": [],
		        "note_count": 0,
		        "caption": "",
		        "reblog": {
		          "tree_html": "",
		          "comment": ""
		        },
		        "trail": [],
		        "image_permalink": "http://jmanhart.tumblr.com/image/129568984500",
		        "photos": [
		          {
		            "caption": "",
		            "alt_sizes": [
		              {
		                "url": "https://40.media.tumblr.com/21a5336fa170cfa87be947a6a2f3622a/tumblr_nv16gff7731qkamv2o1_1280.jpg",
		                "width": 1000,
		                "height": 840
		              },
		              {
		                "url": "https://40.media.tumblr.com/21a5336fa170cfa87be947a6a2f3622a/tumblr_nv16gff7731qkamv2o1_500.jpg",
		                "width": 500,
		                "height": 420
		              },
		              {
		                "url": "https://41.media.tumblr.com/21a5336fa170cfa87be947a6a2f3622a/tumblr_nv16gff7731qkamv2o1_400.jpg",
		                "width": 400,
		                "height": 336
		              },
		              {
		                "url": "https://41.media.tumblr.com/21a5336fa170cfa87be947a6a2f3622a/tumblr_nv16gff7731qkamv2o1_250.jpg",
		                "width": 250,
		                "height": 210
		              },
		              {
		                "url": "https://41.media.tumblr.com/21a5336fa170cfa87be947a6a2f3622a/tumblr_nv16gff7731qkamv2o1_100.jpg",
		                "width": 100,
		                "height": 84
		              },
		              {
		                "url": "https://36.media.tumblr.com/21a5336fa170cfa87be947a6a2f3622a/tumblr_nv16gff7731qkamv2o1_75sq.jpg",
		                "width": 75,
		                "height": 75
		              }
		            ],
		            "original_size": {
		              "url": "https://40.media.tumblr.com/21a5336fa170cfa87be947a6a2f3622a/tumblr_nv16gff7731qkamv2o1_1280.jpg",
		              "width": 1000,
		              "height": 840
		            }
		          }
		        ]
		      },
		      {
		        "blog_name": "jmanhart",
		        "id": 129565810340,
		        "post_url": "http://jmanhart.tumblr.com/post/129565810340",
		        "slug": "",
		        "type": "photo",
		        "date": "2015-09-21 13:03:45 GMT",
		        "timestamp": 1442840625,
		        "state": "published",
		        "format": "html",
		        "reblog_key": "DdVc4e4R",
		        "tags": [
		          "go away",
		          "motivationalmonday",
		          "type",
		          "grumpy"
		        ],
		        "short_url": "http://tmblr.co/Z2R_Rx1ugkLwa",
		        "recommended_source": null,
		        "recommended_color": null,
		        "highlighted": [],
		        "note_count": 0,
		        "caption": "",
		        "reblog": {
		          "tree_html": "",
		          "comment": ""
		        },
		        "trail": [],
		        "image_permalink": "http://jmanhart.tumblr.com/image/129565810340",
		        "photos": [
		          {
		            "caption": "",
		            "alt_sizes": [
		              {
		                "url": "https://41.media.tumblr.com/56f17166f012782f0cf253b9c10066fd/tumblr_nv12y9yDCO1qkamv2o1_1280.jpg",
		                "width": 1000,
		                "height": 636
		              },
		              {
		                "url": "https://40.media.tumblr.com/56f17166f012782f0cf253b9c10066fd/tumblr_nv12y9yDCO1qkamv2o1_500.jpg",
		                "width": 500,
		                "height": 318
		              },
		              {
		                "url": "https://40.media.tumblr.com/56f17166f012782f0cf253b9c10066fd/tumblr_nv12y9yDCO1qkamv2o1_400.jpg",
		                "width": 400,
		                "height": 254
		              },
		              {
		                "url": "https://41.media.tumblr.com/56f17166f012782f0cf253b9c10066fd/tumblr_nv12y9yDCO1qkamv2o1_250.jpg",
		                "width": 250,
		                "height": 159
		              },
		              {
		                "url": "https://41.media.tumblr.com/56f17166f012782f0cf253b9c10066fd/tumblr_nv12y9yDCO1qkamv2o1_100.jpg",
		                "width": 100,
		                "height": 64
		              },
		              {
		                "url": "https://40.media.tumblr.com/56f17166f012782f0cf253b9c10066fd/tumblr_nv12y9yDCO1qkamv2o1_75sq.jpg",
		                "width": 75,
		                "height": 75
		              }
		            ],
		            "original_size": {
		              "url": "https://41.media.tumblr.com/56f17166f012782f0cf253b9c10066fd/tumblr_nv12y9yDCO1qkamv2o1_1280.jpg",
		              "width": 1000,
		              "height": 636
		            }
		          }
		        ]
		      }
		    ],
		    "total_posts": 6
		  }
}
	});
}

if (Meteor.isClient) {
    Meteor.call("client.posts", function(error, results) {
        console.log(results.content); //results.data should be a JSON object
    });
}

