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

	var __weex_template__ = __webpack_require__(7)
	var __weex_style__ = __webpack_require__(8)
	var __weex_script__ = __webpack_require__(9)

	__weex_define__('@weex-component/d7fb6937f4dc3cd5e71cdd30037cf729', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/d7fb6937f4dc3cd5e71cdd30037cf729',undefined,undefined)

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	

/***/ },
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "scroller",
	  "children": [
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "Countdown",
	        "type": "primary"
	      },
	      "children": [
	        {
	          "type": "wxc-countdown",
	          "id": "countdown1",
	          "attr": {
	            "remain": function () {return this.countdown1.remain}
	          },
	          "style": {
	            "width": 750,
	            "marginTop": 20,
	            "marginBottom": 20
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "ctno1"
	              ],
	              "attr": {
	                "value": function () {return this.countdown1.time.D}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "ctno1"
	              ],
	              "style": {
	                "backgroundColor": "#FFFFFF",
	                "color": "#AAAAAA"
	              },
	              "attr": {
	                "value": "day(s)"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "ctno1"
	              ],
	              "attr": {
	                "value": function () {return this.countdown1.time.hh}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "ctno1"
	              ],
	              "style": {
	                "backgroundColor": "#FFFFFF",
	                "color": "#AAAAAA"
	              },
	              "attr": {
	                "value": "hour(s)"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "ctno1"
	              ],
	              "attr": {
	                "value": function () {return this.countdown1.time.mm}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "ctno1"
	              ],
	              "style": {
	                "backgroundColor": "#FFFFFF",
	                "color": "#AAAAAA"
	              },
	              "attr": {
	                "value": "minute(s)"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "ctno1"
	              ],
	              "attr": {
	                "value": function () {return this.countdown1.time.ss}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "ctno1"
	              ],
	              "style": {
	                "backgroundColor": "#FFFFFF",
	                "color": "#AAAAAA"
	              },
	              "attr": {
	                "value": "second(s)"
	              }
	            }
	          ]
	        },
	        {
	          "type": "wxc-countdown",
	          "id": "countdown2",
	          "attr": {
	            "remain": function () {return this.countdown2.remain}
	          },
	          "style": {
	            "width": 600
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "ctno2"
	              ],
	              "attr": {
	                "value": function () {return this.countdown2.time.MM}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "ctno2"
	              ],
	              "style": {
	                "backgroundColor": "#FFFFFF",
	                "color": "#AAAAAA"
	              },
	              "attr": {
	                "value": ":"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "ctno2"
	              ],
	              "attr": {
	                "value": function () {return this.countdown2.time.ss}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {
	  "ctno1": {
	    "borderRadius": 8,
	    "paddingTop": 6,
	    "paddingBottom": 6,
	    "paddingRight": 4,
	    "paddingLeft": 4,
	    "marginLeft": 2,
	    "marginRight": 2,
	    "backgroundColor": "rgb(242,222,222)",
	    "color": "rgb(169,68,66)"
	  },
	  "ctno2": {
	    "borderRadius": 8,
	    "paddingTop": 30,
	    "paddingBottom": 30,
	    "paddingLeft": 16,
	    "paddingRight": 16,
	    "backgroundColor": "rgb(217,237,247)",
	    "color": "rgb(49,112,143)",
	    "textAlign": "center",
	    "fontSize": 40
	  }
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var _assign = __webpack_require__(10);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(4);

	module.exports = {
	  data: function () {return {
	    countdown1: {
	      remain: 5000,
	      time: {
	        D: '0',
	        hh: '00',
	        mm: '00',
	        ss: '00'
	      }
	    },
	    countdown2: {
	      remain: 5000,
	      time: {
	        MM: '0',
	        ss: '0'
	      }
	    }
	  }},
	  ready: function ready() {
	    this.initCountdown('countdown1');
	    this.initCountdown('countdown2');
	  },
	  methods: {
	    initCountdown: function initCountdown(id) {
	      var self = this;

	      var $countdown = this.$vm(id);
	      $countdown.$on('tick', function (e) {
	        (0, _assign2.default)(self[id].time, e.detail);
	      });

	      $countdown.$on('alarm', function (e) {
	        (0, _assign2.default)(self[id].time, e.detail);
	      });
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 10 */
/***/ function(module, exports) {

	

/***/ }
/******/ ]);