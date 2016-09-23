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

	var __weex_template__ = __webpack_require__(11)
	var __weex_style__ = __webpack_require__(12)
	var __weex_script__ = __webpack_require__(13)

	__weex_define__('@weex-component/edbf120a9d73e4b4dc26be7677e984ea', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/edbf120a9d73e4b4dc26be7677e984ea',undefined,undefined)

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	

/***/ },
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "scroller",
	  "children": [
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "width x height",
	        "type": "primary"
	      },
	      "children": [
	        {
	          "type": "wxc-tip",
	          "attr": {
	            "type": "warning",
	            "value": "Weex screen width is 750"
	          },
	          "style": {
	            "marginBottom": 20
	          }
	        },
	        {
	          "type": "wxc-panel",
	          "attr": {
	            "title": "400 X 400"
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "img"
	              ],
	              "style": {
	                "width": 400,
	                "height": 400
	              },
	              "attr": {
	                "src": function () {return this.img}
	              }
	            }
	          ]
	        },
	        {
	          "type": "wxc-panel",
	          "attr": {
	            "title": "200 x 200"
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "img"
	              ],
	              "style": {
	                "width": 200,
	                "height": 200
	              },
	              "attr": {
	                "src": function () {return this.img}
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "resize",
	        "type": "primary"
	      },
	      "children": [
	        {
	          "type": "wxc-panel",
	          "attr": {
	            "title": "resize=stretch(default) 600 X 200"
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "img"
	              ],
	              "style": {
	                "width": 600,
	                "height": 200,
	                "borderStyle": "solid",
	                "borderWidth": 1,
	                "borderColor": "#333333"
	              },
	              "attr": {
	                "src": function () {return this.img},
	                "resize": "stretch"
	              }
	            }
	          ]
	        },
	        {
	          "type": "wxc-panel",
	          "attr": {
	            "title": "resize=contain 600 X 200"
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "img"
	              ],
	              "style": {
	                "width": 600,
	                "height": 200,
	                "borderStyle": "solid",
	                "borderWidth": 1,
	                "borderColor": "#333333"
	              },
	              "attr": {
	                "src": function () {return this.img},
	                "resize": "contain"
	              }
	            }
	          ]
	        },
	        {
	          "type": "wxc-panel",
	          "attr": {
	            "title": "resize=cover 600 X 200"
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "img"
	              ],
	              "style": {
	                "width": 600,
	                "height": 200,
	                "borderStyle": "solid",
	                "borderWidth": 1,
	                "borderColor": "#333333"
	              },
	              "attr": {
	                "src": function () {return this.img},
	                "resize": "cover"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = {
	  "img": {
	    "marginBottom": 20
	  }
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(4);
	module.exports = {
	  data: function () {return {
	    img: '//gw.alicdn.com/tps/i2/TB1DpsmMpXXXXabaXXX20ySQVXX-512-512.png_400x400.jpg'
	  }}
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);