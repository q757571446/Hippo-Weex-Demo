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

	var __weex_template__ = __webpack_require__(56)
	var __weex_style__ = __webpack_require__(57)
	var __weex_script__ = __webpack_require__(58)

	__weex_define__('@weex-component/1a81fb780319a63605d941949f4ff5d7', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/1a81fb780319a63605d941949f4ff5d7',undefined,undefined)

/***/ },

/***/ 4:
/***/ function(module, exports) {

	

/***/ },

/***/ 56:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "toolbar"
	      ],
	      "append": "tree",
	      "children": [
	        {
	          "type": "wxc-button",
	          "attr": {
	            "type": "primary",
	            "size": "small",
	            "value": "back"
	          },
	          "events": {
	            "click": "goback"
	          },
	          "style": {
	            "marginLeft": 30,
	            "width": 210,
	            "marginTop": 5,
	            "marginBottom": 5
	          }
	        },
	        {
	          "type": "wxc-button",
	          "attr": {
	            "type": "primary",
	            "size": "small",
	            "value": "forward"
	          },
	          "events": {
	            "click": "goforward"
	          },
	          "style": {
	            "marginLeft": 30,
	            "width": 210,
	            "marginTop": 5,
	            "marginBottom": 5
	          }
	        },
	        {
	          "type": "wxc-button",
	          "attr": {
	            "type": "primary",
	            "size": "small",
	            "value": "refresh"
	          },
	          "events": {
	            "click": "refresh"
	          },
	          "style": {
	            "marginLeft": 30,
	            "width": 210,
	            "marginTop": 5,
	            "marginBottom": 5
	          }
	        }
	      ]
	    },
	    {
	      "type": "web",
	      "classList": [
	        "content"
	      ],
	      "id": "webview",
	      "attr": {
	        "src": "https://m.taobao.com/?spm=0.0.0.0&v=0#index"
	      },
	      "events": {
	        "pagestart": "startload",
	        "pagefinish": "finishload",
	        "error": "failload"
	      }
	    }
	  ]
	}

/***/ },

/***/ 57:
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 0,
	    "marginBottom": 70
	  },
	  "toolbar": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "height": 70
	  }
	}

/***/ },

/***/ 58:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(4);

	module.exports = {
	    methods: {
	        goback: function goback() {
	            var $webview = __weex_require__('@weex-module/webview');
	            var webElement = this.$el('webview');
	            $webview.goBack(webElement.ref);
	        },
	        goforward: function goforward() {
	            var $webview = __weex_require__('@weex-module/webview');
	            var webElement = this.$el('webview');
	            $webview.goForward(webElement.ref);
	        },
	        refresh: function refresh() {
	            var $webview = __weex_require__('@weex-module/webview');
	            var webElement = this.$el('webview');
	            $webview.reload(webElement.ref);
	        },
	        startload: function startload(e) {},
	        finishload: function finishload(e) {},
	        failload: function failload(e) {}
	    }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });