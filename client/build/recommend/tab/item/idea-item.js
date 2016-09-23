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

	;__weex_define__("@weex-component/47b8e9df472d40baa74fbbc47c997e35", [], function(__weex_require__, exports, __weex_module__){

	;
		__webpack_require__(37);
		__weex_module__.exports = {
		    data: function () {return {
		    	itemAvatar: 'app://idea_avatar',
		      	shareImg: 'app://icon_share',
		      	commentImg: 'app://icon_comment',
		    }},
		}

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "header"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "header_left"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "style": {
	                "fontSize": 32,
	                "color": "#000000",
	                "lines": 2
	              },
	              "attr": {
	                "value": function () {return this.title}
	              }
	            },
	            {
	              "type": "text",
	              "style": {
	                "fontSize": 26,
	                "color": "#8c8c8c",
	                "lines": 3,
	                "marginTop": 22,
	                "marginBottom": 22
	              },
	              "attr": {
	                "value": function () {return this.body}
	              }
	            }
	          ]
	        },
	        {
	          "type": "image",
	          "style": {
	            "width": 170,
	            "height": 170,
	            "backgroundColor": "#e0eadb"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "bottom"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "bottom",
	            "left"
	          ],
	          "children": [
	            {
	              "type": "circle-image",
	              "attr": {
	                "radius": "30",
	                "image": function () {return this.authorPhotoUrl}
	              }
	            },
	            {
	              "type": "text",
	              "style": {
	                "fontSize": 26,
	                "color": "#878787",
	                "marginLeft": 20
	              },
	              "attr": {
	                "value": function () {return this.authorName}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "bottom",
	            "right"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "textImg"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "smallImg"
	                  ],
	                  "attr": {
	                    "src": function () {return this.shareImg}
	                  }
	                },
	                {
	                  "type": "text",
	                  "style": {
	                    "fontSize": 26,
	                    "color": "#878787",
	                    "marginLeft": 12
	                  },
	                  "attr": {
	                    "value": function () {return this.readTimes}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "textImg"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "smallImg"
	                  ],
	                  "attr": {
	                    "src": function () {return this.commentImg}
	                  }
	                },
	                {
	                  "type": "text",
	                  "style": {
	                    "fontSize": 26,
	                    "color": "#878787",
	                    "marginLeft": 12
	                  },
	                  "attr": {
	                    "value": function () {return this.effection}
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "container": {
	    "width": 750,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "paddingTop": 22,
	    "paddingBottom": 22,
	    "borderColor": "#f2f2f2",
	    "borderTopWidth": 1.5,
	    "borderBottomWidth": 1.5
	  },
	  "header": {
	    "flexDirection": "row",
	    "justifyContent": "space-between"
	  },
	  "header_left": {
	    "width": 505
	  },
	  "bottom": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center"
	  },
	  "avatar": {
	    "width": 60,
	    "height": 60
	  },
	  "textImg": {
	    "flexDirection": "row",
	    "marginLeft": 40
	  },
	  "smallImg": {
	    "width": 32,
	    "height": 32
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/47b8e9df472d40baa74fbbc47c997e35", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },

/***/ 37:
/***/ function(module, exports) {

	;__weex_define__("@weex-component/circle-image", [], function(__weex_require__, exports, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	            radius: 66,
	            image: 'app://icon_logo',
	        }},

	        created: function(e){
	            console.log('image', this.image);
	        }
	    }


	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "container",
	  "children": [
	    {
	      "type": "image",
	      "style": {
	        "borderRadius": function () {return this.radius},
	        "width": function () {return this.radius*2},
	        "height": function () {return this.radius*2}
	      },
	      "attr": {
	        "src": function () {return this.image}
	      }
	    },
	    {
	      "type": "container"
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {})
	})

/***/ }

/******/ });