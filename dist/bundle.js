/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const data = __webpack_require__(1);

	console.log(data);
	// console.log('hello');

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
		"apps": [
			{
				"Graphics editors": [
					{
						"title": "Canva",
						"description": "<span class=\"badge\">free</span><span class=\"badge\">premium</span><span class=\"badge\">easy</span>",
						"url": "https://www.canva.com"
					},
					{
						"title": "Pixlr",
						"description": "<span class=\"badge\">free</span><span class=\"badge\">advanced</span>",
						"url": "https://pixlr.com"
					},
					{
						"title": "PicMonkey",
						"description": "<span class=\"badge\">free</span><span class=\"badge\">premium</span><span class=\"badge\">easy</span>",
						"url": "http://www.picmonkey.com"
					},
					{
						"title": "BeFunky",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">premium</span> < span class = \"badge\">easy</span>",
						"url": "http://www.befunky.com"
					},
					{
						"title": "iPiccy",
						"description": "<span class=\"badge\">free</span>< span class = \"badge\">medium</span>",
						"url": "http://ipiccy.com"
					},
					{
						"title": "Picadilo",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">easy</span>",
						"url": "http://www.picadilo.com"
					}
				],
				"Infographics": [
					{
						"title": "infogr.am",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">premium</span> < span class = \"badge\">easy</span>",
						"url": "https://infogr.am"
					},
					{
						"title": "easel.ly",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">premium</span> < span class = \"badge\">easy</span>",
						"url": "http://www.easel.ly"
					},
					{
						"title": "Venngage",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">premium</span> < span class = \"badge\">easy</span>",
						"url": "https://venngage.com"
					},
					{
						"title": "Infoactive",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">premium</span> < span class = \"badge\">easy</span> < span class = \"badge\">desctop</span>",
						"url": "https://infoactive.co"
					}
				],
				"Quotes": [
					{
						"title": "Behappy.me",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">easy</span>",
						"url": "http://behappy.me/generator"
					},
					{
						"title": "Recite",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">easy</span>",
						"url": "http://recitethis.com"
					},
					{
						"title": "Quozio",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">easy</span>",
						"url": "http://quozio.com"
					},
					{
						"title": "Quotes cover",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">easy</span>",
						"url": "http://www.quotescover.com"
					}
				],
				"Memes": [
					{
						"title": "Memebuilder",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">easy</span>",
						"url": "http://www.memecenter.com/memebuilder"
					},
					{
						"title": "imgflip",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">easy</span>",
						"url": "https://imgflip.com/memegenerator"
					},
					{
						"title": "Quickmeme",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">easy</span>",
						"url": "http://www.quickmeme.com/caption"
					}
				],
				"Cover & Profile Photo": [
					{
						"title": "Profile picture maker",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">easy</span>",
						"url": "http://profilepicturemaker.com"
					},
					{
						"title": "Easy cover maker",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">easy</span>",
						"url": "http://www.easycovermaker.com"
					},
					{
						"title": "Social media image maker",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">easy</span>",
						"url": "http://www.autreplanete.com/ap-social-media-image-maker/"
					}
				],
				"Screenshots": [
					{
						"title": "Awsome screenshot",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">easy</span>",
						"url": "http://awesomescreenshot.com/"
					},
					{
						"title": "screenSHU",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">premium</span> < span class = \"badge\">easy</span>",
						"url": "http://screenshu.com"
					},
					{
						"title": "Jing",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">easy</span>",
						"url": "http://www.techsmith.com/download/jing/"
					},
					{
						"title": "Skitch",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">easy</span>",
						"url": "http://evernote.com/intl/pl/skitch/"
					}
				],
				"Collages": [
					{
						"title": "Photovisi",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">premium</span> < span class = \"badge\">easy</span>",
						"url": "http://www.photovisi.com"
					},
					{
						"title": "Fotor",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">premium</span> < span class = \"badge\">easy</span>",
						"url": "http://www.fotor.com/features/collage.html"
					},
					{
						"title": "Smilebox",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">premium</span> < span class = \"badge\">easy</span>",
						"url": "http://www.smilebox.com"
					}
				],
				"GIF makers": [
					{
						"title": "GIFMaker.me",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">easy</span>",
						"url": "http://gifmaker.me/"
					},
					{
						"title": "Imgflip",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">easy</span>",
						"url": "https://imgflip.com/gifgenerator"
					},
					{
						"title": "Memecenter",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">easy</span>",
						"url": "http://www.memecenter.com/gifmaker"
					},
					{
						"title": "Phhhoto",
						"description": "<span class=\"badge\">free</span>",
						"url": "http://phhhoto.com"
					}
				],
				"Logo makers": [
					{
						"title": "Logo Graden",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">easy</span>",
						"url": "http://www.logogarden.com"
					},
					{
						"title": "LogotypeMaker",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">premium</span> < span class = \"badge\">easy</span>",
						"url": "http://logotypemaker.com"
					}
				],
				"Icons": [
					{
						"title": "Iconfinder",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">premium</span> < span class = \"badge\">commercial use</span>",
						"url": "https://www.iconfinder.com"
					},
					{
						"title": "Flaticon",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">commercial use</span>",
						"url": "http://www.flaticon.com"
					}
				],
				"Photos": [
					{
						"title": "Gratisography",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">commercial use</span>",
						"url": "http://www.gratisography.com"
					},
					{
						"title": "Free Pixels",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">commercial use</span>",
						"url": "http://www.freepixels.com"
					},
					{
						"title": "Picjumbo",
						"description": "<span class=\"badge\">free</span>  < span class = \"badge\">commercial use</span>",
						"url": "http://picjumbo.com"
					},
					{
						"title": "Little Visuals",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">commercial use</span>",
						"url": "http://littlevisuals.co"
					},
					{
						"title": "Unsplash",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">commercial use</span>",
						"url": "https://unsplash.com"
					},
					{
						"title": "Split Shire",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">commercial use</span>",
						"url": "http://splitshire.com"
					},
					{
						"title": "Foodie's Feed",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">commercial use</span>",
						"url": "http://foodiesfeed.com"
					},
					{
						"title": "New Old Stock",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">commercial use</span>",
						"url": "http://nos.twnsnd.co"
					},
					{
						"title": "Getrefe",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">commercial use</span>",
						"url": "http://getrefe.tumblr.com"
					},
					{
						"title": "Pixabay",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">commercial use</span>",
						"url": "http://pixabay.com"
					},
					{
						"title": "Life Of Pix",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">commercial use</span>",
						"url": "http://www.lifeofpix.com"
					},
					{
						"title": "Picup Image",
						"description": "<span class=\"badge\">free</span>  < span class = \"badge\">commercial use</span>",
						"url": "http://pickupimage.com"
					},
					{
						"title": "Superfamous",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">commercial use</span>",
						"url": "http://superfamous.com"
					}
				],
				"Image resizing tools": [
					{
						"title": "Social Image Resizer Tool",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">easy</span>",
						"url": "http://www.internetmarketingninjas.com/seo-tools/favicon-generator-crop-images/"
					},
					{
						"title": "Simple Image Resizer",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">easy</span>",
						"url": "http://www.simpleimageresizer.com"
					},
					{
						"title": "Presize",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">easy</span>",
						"url": "http://www.picresize.com"
					}
				],
				"Social media analytics tools": [
					{
						"title": "SumAll",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">premium</span> < span class = \"badge\">facebook</span> < span class = \"badge\">twitter</span> < span class = \"badge\">instagram</span> < span class = \"badge\">email</span>",
						"url": "https://sumall.com"
					},
					{
						"title": "Followerwonk",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">twitter</span>",
						"url": "https://followerwonk.com/analyze"
					},
					{
						"title": "My Top Tweet",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">twitter</span>",
						"url": "https://mytoptweet.com"
					},
					{
						"title": "Twitonomy",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">premium</span> < span class = \"badge\">twitter</span>",
						"url": "http://www.twitonomy.com"
					}
				],
				"Social media management": [
					{
						"title": "Hootsuite",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">premium</span>",
						"url": "https://hootsuite.com"
					},
					{
						"title": "Buffer",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">premium</span> < span class = \"badge\">facebook</span> < span class = \"badge\">twitter</span> < span class = \"badge\">g+</span> < span class = \"badge\">linkedin</span>",
						"url": "http://bufferapp.com"
					},
					{
						"title": "Sproutsocial",
						"description": "<span class=\"badge\">free trial</span> < span class = \"badge\">premium</span> < span class = \"badge\">facebook</span> < span class = \"badge\">twitter</span> < span class = \"badge\">g+</span> < span class = \"badge\">linkedin</span>",
						"url": "http://sproutsocial.com"
					}
				],
				"URL Shortening And Tracking Tool": [
					{
						"title": "Bitly",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">premium</span>",
						"url": "https://bitly.com"
					},
					{
						"title": "Tiny",
						"description": "<span class=\"badge\">free</span>",
						"url": "http://tiny.cc"
					},
					{
						"title": "Google url shortener",
						"description": "<span class=\"badge\">free</span>",
						"url": "https://goo.gl"
					},
					{
						"title": "Ow.ly",
						"description": "<span class=\"badge\">free</span>",
						"url": "http://ow.ly/url/shorten-url"
					}
				],
				"Blog topic generator": [
					{
						"title": "Blog topic generator",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">english</span> < span class = \"badge\">headline inspiration</span>",
						"url": "http://www.hubspot.com/blog-topic-generator"
					},
					{
						"title": "Portent",
						"description": "<span class=\"badge\">free</span><span class=\"badge\">english</span><span class=\"badge\">headline inspiration</span>",
						"url": "http://www.portent.com/tools/title-maker"
					},
					{
						"title": "Content ideator",
						"description": "<span class=\"badge\">free</span><span class=\"badge\">english</span><span class=\"badge\">headline inspiration</span>",
						"url": "http://ideas.contentforest.com"
					},
					{
						"title": "Content row",
						"description": "<span class=\"badge\">free</span><span class=\"badge\">english</span><span class=\"badge\">headline inspiration</span>",
						"url": "http://www.contentrow.com/tools/link-bait-title-generator"
					}
				],
				"Social Media Monitoring": [
					{
						"title": "Sociamention",
						"description": "<span class=\"badge\">free</span>",
						"url": "http://www.socialmention.com"
					},
					{
						"title": "Buzzsumo",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">premium</span>",
						"url": "http://buzzsumo.com"
					},
					{
						"title": "HowSociable",
						"description": "<span class=\"badge\">free</span> < span class = \"badge\">premium</span>",
						"url": "http://www.howsociable.com"
					},
					{
						"title": "Topsy",
						"description": "<span class=\"badge\">free</span>",
						"url": "http://topsy.com"
					}
				]
			}
		]
	};

/***/ }
/******/ ]);