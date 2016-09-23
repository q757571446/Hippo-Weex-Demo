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

	var __weex_template__ = __webpack_require__(31)
	var __weex_style__ = __webpack_require__(32)
	var __weex_script__ = __webpack_require__(33)

	__weex_define__('@weex-component/3999ea06e04b487185c2565d7cda9180', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/3999ea06e04b487185c2565d7cda9180',undefined,undefined)

/***/ },

/***/ 4:
/***/ function(module, exports) {

	

/***/ },

/***/ 31:
/***/ function(module, exports) {

	module.exports = {
	  "type": "scroller",
	  "classList": [
	    "list"
	  ],
	  "attr": {
	    "append＝\"tree\"": ""
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "section"
	      ],
	      "repeat": function () {return this.sections},
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "header"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "header-title"
	              ],
	              "attr": {
	                "value": function () {return this.title}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "item"
	          ],
	          "repeat": function () {return this.items},
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "item-title"
	              ],
	              "attr": {
	                "value": function () {return 'row ' + (this.id)}
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "loading",
	      "classList": [
	        "loading-view"
	      ],
	      "attr": {
	        "display": function () {return this.loading_display}
	      },
	      "events": {
	        "loading": "onloading"
	      },
	      "children": [
	        {
	          "type": "loading-indicator",
	          "style": {
	            "height": 60,
	            "width": 60
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 32:
/***/ function(module, exports) {

	module.exports = {
	  "refresh-view": {
	    "height": 120,
	    "width": 750,
	    "display": "flex",
	    "MsFlexAlign": "center",
	    "WebkitAlignItems": "center",
	    "WebkitBoxAlign": "center",
	    "alignItems": "center"
	  },
	  "refresh-arrow": {
	    "fontSize": 30,
	    "color": "#45b5f0"
	  },
	  "loading-view": {
	    "height": 80,
	    "width": 750,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "indicator": {
	    "height": 40,
	    "width": 40,
	    "color": "#45b5f0"
	  },
	  "header": {
	    "backgroundColor": "#45b5f0",
	    "padding": 20,
	    "height": 88,
	    "justifyContent": "center"
	  },
	  "header-title": {
	    "color": "#FFFFFF",
	    "fontWeight": "bold"
	  },
	  "item": {
	    "justifyContent": "center",
	    "borderBottomWidth": 2,
	    "borderBottomColor": "#c0c0c0",
	    "height": 100,
	    "padding": 20
	  }
	}

/***/ },

/***/ 33:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(4);
	module.exports = {
	  methods: {
	    onrefresh: function onrefresh(e) {
	      var self = this;
	      self.refresh_display = 'show';
	      self.refresh_display = 'hide';
	    },
	    onloading: function onloading(e) {
	      var self = this;
	      self.loading_display = 'show';
	      self.loading_display = 'hide';
	    }
	  },
	  data: function () {return {
	    refresh_display: 'hide',
	    loading_display: 'hide',
	    sections: [{
	      title: 'Header 1',
	      items: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
	    }, {
	      title: 'Header 2',
	      items: [{ id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }]
	    }],
	    moreSections: [{
	      title: 'Header 3',
	      items: [{ id: 12 }, { id: 13 }, { id: 14 }, { id: 15 }, { id: 16 }, { id: 17 }, { id: 18 }]
	    }, {
	      title: 'Header 4',
	      items: [{ id: 19 }, { id: 20 }, { id: 21 }, { id: 22 }]
	    }, {
	      title: 'Header 5',
	      items: [{ id: 23 }, { id: 24 }, { id: 25 }, { id: 26 }, { id: 27 }]
	    }, {
	      title: 'Header 6',
	      items: [{ id: 28 }, { id: 29 }, { id: 30 }, { id: 31 }, { id: 32 }]
	    }]
	  }}
	};}
	/* generated by weex-loader */


/***/ }

/******/ });