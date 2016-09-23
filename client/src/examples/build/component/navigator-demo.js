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

	var __weex_template__ = __webpack_require__(28)
	var __weex_script__ = __webpack_require__(29)

	__weex_define__('@weex-component/b61c889e8b46c55f4d9373e71beced64', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	})

	__weex_bootstrap__('@weex-component/b61c889e8b46c55f4d9373e71beced64',undefined,undefined)

/***/ },

/***/ 4:
/***/ function(module, exports) {

	

/***/ },

/***/ 28:
/***/ function(module, exports) {

	module.exports = {
	  "type": "wxc-navpage",
	  "attr": {
	    "dataRole": "none",
	    "height": function () {return this.navBarHeight},
	    "backgroundColor": "#ff5898",
	    "title": function () {return this.title},
	    "titleColor": "white",
	    "leftItemTitle": "More",
	    "leftItemColor": "white",
	    "rightItemSrc": "http://gtms02.alicdn.com/tps/i2/TB1ED7iMpXXXXXEXXXXWA_BHXXX-48-48.png"
	  },
	  "children": [
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "push a new page"
	      },
	      "children": [
	        {
	          "type": "wxc-button",
	          "attr": {
	            "type": "primary",
	            "size": "small",
	            "value": "push"
	          },
	          "events": {
	            "click": "push"
	          }
	        }
	      ]
	    },
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "pop to the last page"
	      },
	      "children": [
	        {
	          "type": "wxc-button",
	          "attr": {
	            "type": "success",
	            "size": "small",
	            "value": "pop"
	          },
	          "events": {
	            "click": "pop"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var _typeof2 = __webpack_require__(30);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(4);
	module.exports = {
	  data: function () {return {
	    navBarHeight: 88,
	    title: 'Navigator',
	    dir: 'examples',
	    baseURL: ''
	  }},
	  created: function created() {
	    this.$getConfig(function (config) {
	      var env = config.env;
	      if (env.platform == 'iOS') {
	        var scale = env.scale;
	        var deviceWidth = env.deviceWidth / scale;
	        this.navBarHeight = 64.0 * 750.0 / deviceWidth;
	      }
	    }.bind(this));

	    this.$on('naviBar.rightItem.click', function (e) {
	      duration = 2;
	      this.$call('modal', 'toast', {
	        'message': 'naviBar.rightItem.click',
	        'duration': duration
	      });
	    });

	    this.$on('naviBar.leftItem.click', function (e) {
	      duration = 2;
	      this.$call('modal', 'toast', {
	        'message': 'naviBar.leftItem.click',
	        'duration': duration
	      });
	    });

	    var bundleUrl = this.$getConfig().bundleUrl;
	    bundleUrl = new String(bundleUrl);
	    console.log('hit', bundleUrl);
	    var nativeBase;
	    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

	    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
	    if (isAndroidAssets) {
	      nativeBase = 'file://assets/';
	    } else if (isiOSAssets) {
	      nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	    } else {
	      var host = 'localhost:12580';
	      var matches = /\/\/([^\/]+?)\//.exec(this.$getConfig().bundleUrl);
	      if (matches && matches.length >= 2) {
	        host = matches[1];
	      }
	      nativeBase = 'http://' + host + '/' + this.dir + '/build/';
	    }
	    var h5Base = './index.html?page=./' + this.dir + '/build/';

	    var base = nativeBase;
	    if ((typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object') {
	      base = h5Base;
	    }
	    this.baseURL = base;
	  },
	  methods: {
	    push: function push() {
	      var vm = this;
	      var params = {
	        'url': this.baseURL + 'component/navigator-demo.js?test=1',
	        'animated': 'true'
	      };
	      vm.$call('navigator', 'push', params, function () {});
	    },

	    pop: function pop() {
	      var vm = this;
	      var params = {
	        'animated': 'true'
	      };
	      vm.$call('navigator', 'pop', params, function () {});
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },

/***/ 30:
/***/ function(module, exports) {

	

/***/ }

/******/ });