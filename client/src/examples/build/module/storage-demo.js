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

	var __weex_template__ = __webpack_require__(81)
	var __weex_script__ = __webpack_require__(82)

	__weex_define__('@weex-component/6f110d391fd7b90c9a19583f6ee1a7cf', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	})

	__weex_bootstrap__('@weex-component/6f110d391fd7b90c9a19583f6ee1a7cf',undefined,undefined)

/***/ },

/***/ 4:
/***/ function(module, exports) {

	

/***/ },

/***/ 75:
/***/ function(module, exports) {

	

/***/ },

/***/ 81:
/***/ function(module, exports) {

	module.exports = {
	  "type": "scroller",
	  "children": [
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "storage API",
	        "type": "primary"
	      },
	      "children": [
	        {
	          "type": "wxc-panel",
	          "attr": {
	            "title": "setItem"
	          },
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.setItemResult}
	              }
	            }
	          ]
	        },
	        {
	          "type": "wxc-panel",
	          "attr": {
	            "title": "getItem"
	          },
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.getItemResult}
	              }
	            }
	          ]
	        },
	        {
	          "type": "wxc-panel",
	          "attr": {
	            "title": "length"
	          },
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.lengthResult}
	              }
	            }
	          ]
	        },
	        {
	          "type": "wxc-panel",
	          "attr": {
	            "title": "getAllKeys"
	          },
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.getAllKeysResult}
	              }
	            }
	          ]
	        },
	        {
	          "type": "wxc-panel",
	          "attr": {
	            "title": "removeItem"
	          },
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.removeItemResult}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var _stringify = __webpack_require__(75);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(4);
	module.exports = {
	  data: function () {return {
	    setItemResult: 'loading',
	    getItemResult: 'loading',
	    removeItemResult: 'loading',
	    lengthResult: 'loading',
	    getAllKeysResult: 'loading'
	  }},
	  ready: function ready() {
	    var storage = __weex_require__('@weex-module/storage');
	    var me = this;

	    storage.setItem('foo', 'foo-value', function (e) {
	      console.log('set [foo<->foo-value]:' + (0, _stringify2.default)(e));
	      me.setItemResult = 'foo:' + (0, _stringify2.default)(e) + '\n';
	    });
	    storage.setItem('bar', 'bar-value', function (e) {
	      console.log('set [bar<->bar-value]:' + (0, _stringify2.default)(e));
	      me.setItemResult = me.setItemResult + 'bar:' + (0, _stringify2.default)(e);
	    });

	    storage.getItem('foo', function (e) {
	      console.log('get foo result:' + (0, _stringify2.default)(e));
	      me.getItemResult = 'get foo,value is ' + e.data + '\n';
	    });
	    storage.getItem('bar', function (e) {
	      console.log('get bar result:' + (0, _stringify2.default)(e));
	      me.getItemResult += 'get bar,value is ' + e.data;
	    });

	    storage.length(function (e) {
	      console.log('length:' + (0, _stringify2.default)(e));
	      me.lengthResult = 'current length is ' + e.data;
	    });

	    storage.getAllKeys(function (e) {
	      console.log('getAllKeys:' + (0, _stringify2.default)(e));
	      me.getAllKeysResult = e.data;
	    });

	    storage.removeItem('foo', function (e) {
	      console.log('remove foo:' + (0, _stringify2.default)(e));
	      me.removeItemResult = 'remove item foo ' + e.result;
	    });
	  }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });