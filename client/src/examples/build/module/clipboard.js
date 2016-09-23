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

	var __weex_template__ = __webpack_require__(73)
	var __weex_script__ = __webpack_require__(74)

	__weex_define__('@weex-component/e93e729eb05598f04027627a24c804bf', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	})

	__weex_bootstrap__('@weex-component/e93e729eb05598f04027627a24c804bf',undefined,undefined)

/***/ },

/***/ 4:
/***/ function(module, exports) {

	

/***/ },

/***/ 73:
/***/ function(module, exports) {

	module.exports = {
	  "type": "scroller",
	  "children": [
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "Clipboard",
	        "type": "primary"
	      },
	      "children": [
	        {
	          "type": "wxc-panel",
	          "attr": {
	            "title": "Copy to clipboard5"
	          },
	          "children": [
	            {
	              "type": "text",
	              "style": {
	                "lineHeight": 40,
	                "fontSize": 28
	              },
	              "attr": {
	                "value": function () {return this.textToCopy}
	              }
	            },
	            {
	              "type": "wxc-button",
	              "attr": {
	                "type": "info",
	                "size": "middle",
	                "value": "Copy"
	              },
	              "events": {
	                "click": "doCopy"
	              }
	            }
	          ]
	        },
	        {
	          "type": "wxc-panel",
	          "attr": {
	            "title": "Paste from clipboard"
	          },
	          "children": [
	            {
	              "type": "text",
	              "style": {
	                "lineHeight": 40,
	                "fontSize": 28
	              },
	              "attr": {
	                "value": function () {return this.textFromPaste}
	              }
	            },
	            {
	              "type": "wxc-button",
	              "attr": {
	                "type": "info",
	                "size": "middle",
	                "value": "Paste"
	              },
	              "events": {
	                "click": "doPaste"
	              }
	            }
	          ]
	        },
	        {
	          "type": "wxc-panel",
	          "attr": {
	            "title": "Result"
	          },
	          "children": [
	            {
	              "type": "wxc-tip",
	              "style": {
	                "marginBottom": 20
	              },
	              "attr": {
	                "value": function () {return this.tips}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 74:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var _stringify = __webpack_require__(75);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(4);

	module.exports = {
	  data: function () {return {
	    textToCopy: '',
	    textFromPaste: '',
	    tips: ''
	  }},
	  ready: function ready() {
	    this.tips = "1. Just click COPY button. It will auto generate a string with random text, and copy to system clipboard. \n 2. do copy in another app, then come back and click PASTE button.";
	  },
	  methods: {
	    clicked: function clicked() {
	      var $modal = __weex_require__('@weex-module/modal');
	      $modal.toast({ 'message': 'clicked!', duration: 0.5 });
	    },

	    doCopy: function doCopy() {
	      textToCopy = "autoGenerateTextToCopy" + Math.random();

	      var $clipboard = __weex_require__('@weex-module/clipboard');
	      $clipboard.setString(textToCopy);

	      this.textToCopy = textToCopy;
	      this.tips = "copy done. Now system clipboard has string of '" + textToCopy + "', try PASTE button, or paste in another app.";
	    },

	    doPaste: function doPaste() {
	      var $clipboard = __weex_require__('@weex-module/clipboard');
	      var me = this;
	      $clipboard.getString(function (ret) {
	        console.log("paste result is " + (0, _stringify2.default)(ret));

	        me.textFromPaste = ret.data;
	        me.tips = "Paste done. Only support native(Android/iOS) NOW. according to security reason, paste in html5 is not supported.";
	      });
	    }

	  }

	};}
	/* generated by weex-loader */


/***/ },

/***/ 75:
/***/ function(module, exports) {

	

/***/ }

/******/ });