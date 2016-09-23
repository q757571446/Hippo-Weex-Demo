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

	var __weex_template__ = __webpack_require__(83)
	var __weex_script__ = __webpack_require__(84)

	__weex_define__('@weex-component/2c445dcf67fa0895d197edb5ffa2f439', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	})

	__weex_bootstrap__('@weex-component/2c445dcf67fa0895d197edb5ffa2f439',undefined,undefined)

/***/ },

/***/ 4:
/***/ function(module, exports) {

	

/***/ },

/***/ 75:
/***/ function(module, exports) {

	

/***/ },

/***/ 83:
/***/ function(module, exports) {

	module.exports = {
	  "type": "scroller",
	  "children": [
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "stream.fetch",
	        "type": "primary"
	      },
	      "children": [
	        {
	          "type": "wxc-panel",
	          "attr": {
	            "title": "method = GET"
	          },
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.getResult}
	              }
	            }
	          ]
	        },
	        {
	          "type": "wxc-panel",
	          "attr": {
	            "title": "method = GET / type = jsonp"
	          },
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.getJsonpResult}
	              }
	            }
	          ]
	        },
	        {
	          "type": "wxc-panel",
	          "attr": {
	            "title": "method = POST"
	          },
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.postResult}
	              }
	            }
	          ]
	        },
	        {
	          "type": "wxc-panel",
	          "attr": {
	            "title": "method = PUT"
	          },
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.putResult}
	              }
	            }
	          ]
	        },
	        {
	          "type": "wxc-panel",
	          "attr": {
	            "title": "method = DELETE"
	          },
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.deleteResult}
	              }
	            }
	          ]
	        },
	        {
	          "type": "wxc-panel",
	          "attr": {
	            "title": "method = HEAD"
	          },
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.headResult}
	              }
	            }
	          ]
	        },
	        {
	          "type": "wxc-panel",
	          "attr": {
	            "title": "method = PATCH"
	          },
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.patchResult}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 84:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var _stringify = __webpack_require__(75);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(4);

	module.exports = {
	  data: function () {return {
	    getJsonpResult: 'loading...',
	    getResult: 'loading...',
	    postResult: 'loading...',
	    putResult: 'loading...',
	    deleteResult: 'loading...',
	    headResult: 'loading...',
	    patchResult: 'loading...'
	  }},
	  ready: function ready() {
	    var stream = __weex_require__('@weex-module/stream');
	    var me = this;
	    var GET_URL_JSONP = 'http://jsfiddle.net/echo/jsonp/?callback=anything&result=content_in_response';
	    var GET_URL = 'http://httpbin.org/get';
	    var POST_URL = 'http://httpbin.org/post';
	    var PUT_URL = 'http://httpbin.org/put';
	    var DELETE_URL = 'http://httpbin.org/delete';
	    var HEAD_URL = 'http://httpbin.org/status/418';
	    var PATCH_URL = 'http://httpbin.org/patch';

	    stream.fetch({
	      method: 'GET',
	      url: GET_URL_JSONP,
	      type: 'jsonp'
	    }, function (ret) {
	      if (!ret.ok) {
	        me.getJsonpResult = "request failed";
	      } else {
	        console.log('get:' + ret);
	        me.getJsonpResult = ret.data;
	      }
	    }, function (response) {
	      console.log('get jsonp in progress:' + response.length);
	      me.getJsonpResult = "bytes received:" + response.length;
	    });

	    stream.fetch({
	      method: 'GET',
	      url: GET_URL,
	      type: 'json'
	    }, function (ret) {
	      if (!ret.ok) {
	        me.getResult = "request failed";
	      } else {
	        console.log('get:' + ret);
	        me.getResult = (0, _stringify2.default)(ret.data);
	      }
	    }, function (response) {
	      console.log('get in progress:' + response.length);
	      me.getResult = "bytes received:" + response.length;
	    });

	    stream.fetch({
	      method: 'POST',
	      url: POST_URL,
	      type: 'json'
	    }, function (ret) {
	      if (!ret.ok) {
	        me.postResult = "request failed";
	      } else {
	        console.log('get:' + (0, _stringify2.default)(ret));
	        me.postResult = (0, _stringify2.default)(ret.data);
	      }
	    }, function (response) {
	      console.log('get in progress:' + response.length);
	      me.postResult = "bytes received:" + response.length;
	    });

	    stream.fetch({
	      method: 'PUT',
	      url: PUT_URL,
	      type: 'json'
	    }, function (ret) {
	      if (!ret.ok) {
	        me.putResult = "request failed";
	      } else {
	        console.log('get:' + (0, _stringify2.default)(ret));
	        me.putResult = (0, _stringify2.default)(ret.data);
	      }
	    }, function (response) {
	      console.log('get in progress:' + response.length);
	      me.putResult = "bytes received:" + response.length;
	    });

	    stream.fetch({
	      method: 'DELETE',
	      url: DELETE_URL,
	      type: 'json'
	    }, function (ret) {

	      if (!ret.ok) {
	        me.deleteResult = "request failed";
	      } else {
	        console.log('get:' + (0, _stringify2.default)(ret));
	        me.deleteResult = (0, _stringify2.default)(ret.data);
	      }
	    }, function (response) {
	      console.log('get in progress:' + response.length);
	      me.deleteResult = "bytes received:" + response.length;
	    });

	    stream.fetch({
	      method: 'HEAD',
	      url: HEAD_URL,
	      type: 'json'
	    }, function (ret) {
	      if (ret.statusText !== 'I\'m a teapot') {
	        me.headResult = "request failed";
	      } else {
	        console.log('get:' + (0, _stringify2.default)(ret));
	        me.headResult = ret.statusText;
	      }
	    }, function (response) {
	      console.log('get in progress:' + response.length);
	      me.headResult = "bytes received:" + response.length;
	    });

	    stream.fetch({
	      method: 'PATCH',
	      url: PATCH_URL,
	      type: 'json'
	    }, function (ret) {
	      if (!ret.ok) {
	        me.patchResult = "request failed";
	      } else {
	        console.log('get:' + (0, _stringify2.default)(ret));
	        me.patchResult = (0, _stringify2.default)(request.data);
	      }
	    }, function (response) {
	      console.log('get in progress:' + response.length);
	      me.patchResult = "bytes received:" + response.length;
	    });
	  }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });