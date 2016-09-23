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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/2498b8d006306e8fadf34556eff6e3cc", [], function(__weex_require__, exports, __weex_module__){
	__webpack_require__(43);

	;
	  __weex_module__.exports = {
	    data: function () {return {
	    	middle: [
	    		{
	    			image: "app://icon_daca",
	    			content: "新闻聚合",
	    		},
	    		{
	    			image: "app://icon_daca",
	    			content: "投研大咖说",
	    		},
				{
	    			image: "app://icon_daca",
	    			content: "热点专题",
	    		}
	    	],
	    	bottom: [
	    		{
	    			image: "app://group_cloud",
	    			content: "聚合研报",
	    		},
	    		{
	    			image: "app://group_cloud",
	    			content: "组合推荐",
	    		},
	    	]
	    }}
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "banner"
	    },
	    {
	      "type": "div",
	      "style": {
	        "paddingTop": 20,
	        "paddingBottom": 30,
	        "borderBottomWidth": 3,
	        "borderColor": "#f2f2f2"
	      },
	      "classList": [
	        "item"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "style": {
	            "flex": 1,
	            "alignItems": "center"
	          },
	          "repeat": {
	            "expression": function () {return this.middle},
	            "value": "v"
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "headerImg"
	              ],
	              "attr": {
	                "src": function () {return this.v.image}
	              }
	            },
	            {
	              "type": "text",
	              "style": {
	                "marginTop": 20
	              },
	              "classList": [
	                "content"
	              ],
	              "attr": {
	                "value": function () {return this.v.content}
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "style": {
	        "paddingTop": 33,
	        "paddingBottom": 33,
	        "borderBottomWidth": 3,
	        "borderColor": "#f2f2f2"
	      },
	      "classList": [
	        "item"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "style": {
	            "flex": 1,
	            "justifyContent": "center"
	          },
	          "classList": [
	            "item"
	          ],
	          "repeat": {
	            "expression": function () {return this.bottom},
	            "value": "v"
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "leftImg"
	              ],
	              "attr": {
	                "src": function () {return this.v.image}
	              }
	            },
	            {
	              "type": "text",
	              "style": {
	                "marginLeft": 20
	              },
	              "classList": [
	                "content"
	              ],
	              "attr": {
	                "value": function () {return this.v.content}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "item": {
	    "flexDirection": "row"
	  },
	  "content": {
	    "fontSize": 28
	  },
	  "headerImg": {
	    "width": 90,
	    "height": 90
	  },
	  "leftImg": {
	    "width": 40,
	    "height": 40
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/2498b8d006306e8fadf34556eff6e3cc", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },

/***/ 43:
/***/ function(module, exports) {

	;__weex_define__("@weex-component/banner", [], function(__weex_require__, exports, __weex_module__){

	;
	  __weex_module__.exports = {
	    methods: {
	      
	    },

	    data: function () {return {
	      sliderPages: [
	      	{link: 'http://scimg.jb51.net/allimg/160815/103-160Q509544OC.jpg'},
	      	{link: 'http://scimg.jb51.net/allimg/160815/103-160Q509544OC.jpg'},
	      	{link: 'http://scimg.jb51.net/allimg/160815/103-160Q509544OC.jpg'},
	      	{link: 'http://scimg.jb51.net/allimg/160815/103-160Q509544OC.jpg'},
	      	{link: 'http://scimg.jb51.net/allimg/160815/103-160Q509544OC.jpg'},
	      ],
	    }}
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "slider",
	  "classList": [
	    "pager"
	  ],
	  "children": [
	    {
	      "type": "indicator",
	      "classList": [
	        "indicator"
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "pager"
	      ],
	      "repeat": function () {return this.sliderPages},
	      "children": [
	        {
	          "type": "image",
	          "style": {
	            "width": 750,
	            "height": 230
	          },
	          "attr": {
	            "src": function () {return this.link}
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "indicator": {
	    "position": "absolute",
	    "width": 750,
	    "height": 20,
	    "top": 190,
	    "itemSize": 20,
	    "itemColor": "#58336d",
	    "itemSelectedColor": "#fff"
	  },
	  "pager": {
	    "width": 750,
	    "height": 230
	  }
	})
	})

/***/ }

/******/ });