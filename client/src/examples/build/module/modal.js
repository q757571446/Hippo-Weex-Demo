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

	var __weex_template__ = __webpack_require__(78)
	var __weex_style__ = __webpack_require__(79)
	var __weex_script__ = __webpack_require__(80)

	__weex_define__('@weex-component/3e30f1e2562a57b329ab7ebd1387f07b', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/3e30f1e2562a57b329ab7ebd1387f07b',undefined,undefined)

/***/ },

/***/ 4:
/***/ function(module, exports) {

	

/***/ },

/***/ 78:
/***/ function(module, exports) {

	module.exports = {
	  "type": "scroller",
	  "children": [
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "Toast",
	        "type": "primary"
	      },
	      "children": [
	        {
	          "type": "wxc-button",
	          "attr": {
	            "type": "primary",
	            "value": "Toast"
	          },
	          "events": {
	            "click": "toast"
	          }
	        }
	      ]
	    },
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "Dialog",
	        "type": "primary"
	      },
	      "children": [
	        {
	          "type": "wxc-button",
	          "attr": {
	            "type": "success",
	            "value": "Alert"
	          },
	          "events": {
	            "click": "alert"
	          },
	          "style": {
	            "marginBottom": 20
	          }
	        },
	        {
	          "type": "wxc-button",
	          "attr": {
	            "type": "primary",
	            "value": "Confirm"
	          },
	          "events": {
	            "click": "confirm"
	          },
	          "style": {
	            "marginBottom": 20
	          }
	        },
	        {
	          "type": "wxc-button",
	          "attr": {
	            "type": "warning",
	            "value": "Prompt"
	          },
	          "events": {
	            "click": "prompt"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 79:
/***/ function(module, exports) {

	module.exports = {}

/***/ },

/***/ 80:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(4);
	module.exports = {
	  data: function () {return {}},
	  methods: {
	    toast: function toast(msg, duration) {
	      if (!msg || typeof msg !== 'string') {
	        msg = 'I am Toast show!';
	      }

	      duration = duration || 2;
	      var modal = __weex_require__('@weex-module/modal');
	      modal.toast({
	        'message': msg,
	        'duration': duration
	      });
	    },
	    alert: function alert(msg, okTitle, cancelTitle) {
	      var self = this;
	      if (!msg || typeof msg !== 'string') {
	        msg = "I am Alert!";
	      }
	      var modal = __weex_require__('@weex-module/modal');
	      modal.alert({
	        'message': msg,
	        'okTitle': okTitle,
	        'cancelTitle': cancelTitle
	      }, function () {
	        self.toast("Click Alert OK Bnt!!");
	      });
	    },
	    confirm: function confirm(msg, okTitle, cancelTitle) {
	      var self = this;
	      if (!msg || typeof msg !== 'string') {
	        msg = "I am Confirm!";
	      }
	      var modal = __weex_require__('@weex-module/modal');
	      okTitle = okTitle || "OK";
	      cancelTitle = cancelTitle || "Cancel";
	      modal.confirm({
	        'message': msg,
	        'okTitle': okTitle,
	        'cancelTitle': cancelTitle
	      }, function (result) {
	        self.toast("Click Confirm  " + result);
	      });
	    },
	    prompt: function prompt() {
	      var self = this;
	      var modal = __weex_require__('@weex-module/modal');
	      modal.prompt({
	        'message': 'I am Prompt!',
	        'okTitle': 'ok',
	        'cancelTitle': 'cancel'
	      }, function (result) {
	        self.toast("Click Prompt  " + result);
	      });
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });