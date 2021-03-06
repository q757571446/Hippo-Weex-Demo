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

	var __weex_template__ = __webpack_require__(63)
	var __weex_script__ = __webpack_require__(64)

	__weex_define__('@weex-component/677c57764d82d558f236d5241843a2a2', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	})

	__weex_bootstrap__('@weex-component/677c57764d82d558f236d5241843a2a2',undefined,undefined)

/***/ },

/***/ 4:
/***/ function(module, exports) {

	

/***/ },

/***/ 30:
/***/ function(module, exports) {

	

/***/ },

/***/ 63:
/***/ function(module, exports) {

	module.exports = {
	  "type": "example-list",
	  "attr": {
	    "items": function () {return this.items},
	    "root": function () {return this.root}
	  }
	}

/***/ },

/***/ 64:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(65);

	module.exports = {
	  data: function () {return {
	    root: 'examples',
	    items: [{ name: 'hello', title: 'Hello World' }, { name: 'syntax/index', title: 'More Syntax' }, { name: 'style/index', title: 'Common Style' }, { name: 'animation', title: 'Animation' }, { name: 'component/text-demo', title: 'Text' }, { name: 'component/image-demo', title: 'Image' }, { name: 'component/input-demo', title: 'Input' }, { name: 'component/scroller-demo', title: 'Scroller' }, { name: 'component/list/list-basic', title: 'List (Basic)' }, { name: 'component/list/list-demo', title: 'List (Advanced)' }, { name: 'component/slider/index', title: 'Slider' }, { name: 'component/a-demo', title: 'A' }, { name: 'component/video-demo', title: 'Video' }, { name: 'component/countdown-demo', title: 'Countdown' }, { name: 'component/marquee-demo', title: 'Marquee' }, { name: 'component/web-demo', title: 'Web' }, { name: 'component/navigator-demo', title: 'Navigator' }, { name: 'component/tabbar/tabbar-demo', title: 'Tabbar' }, { name: 'module/instance-api', title: 'Instance API' }, { name: 'module/modal', title: 'Modal' }, { name: 'module/stream-demo', title: 'Stream' }, { name: 'module/storage-demo', title: 'Storage' }, { name: 'module/clipboard', title: 'Clipboard' }, { name: 'showcase/new-fashion/index', title: 'Activity' }, { name: 'showcase/calculator', title: 'Calculator' }, { name: 'showcase/minesweeper', title: 'Minesweeper' }, { name: 'showcase/ui', title: 'UI Gallery' }, { name: 'showcase/dropdown/dropdown-demo', title: 'Dropdown' }]
	  }}
	};}
	/* generated by weex-loader */


/***/ },

/***/ 65:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(66)
	var __weex_template__ = __webpack_require__(70)
	var __weex_style__ = __webpack_require__(71)
	var __weex_script__ = __webpack_require__(72)

	__weex_define__('@weex-component/example-list', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(67)
	var __weex_style__ = __webpack_require__(68)
	var __weex_script__ = __webpack_require__(69)

	__weex_define__('@weex-component/example-list-item', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },

/***/ 67:
/***/ function(module, exports) {

	module.exports = {
	  "type": "wxc-list-item",
	  "events": {
	    "click": "redirect"
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "item-txt"
	      ],
	      "attr": {
	        "value": function () {return this.title}
	      }
	    }
	  ]
	}

/***/ },

/***/ 68:
/***/ function(module, exports) {

	module.exports = {
	  "item-txt": {
	    "fontSize": 48,
	    "color": "#555555"
	  }
	}

/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(4);
	__weex_require__('@weex-module/myURL');
	module.exports = {
	  data: function () {return {
	    title: '',
	    url: ''
	  }},
	  methods: {
	    redirect: function redirect() {
	      this.$openURL(this.url);
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },

/***/ 70:
/***/ function(module, exports) {

	module.exports = {
	  "type": "list",
	  "children": [
	    {
	      "type": "cell",
	      "append": "tree",
	      "repeat": function () {return this.items},
	      "children": [
	        {
	          "type": "example-list-item",
	          "attr": {
	            "title": function () {return this.title},
	            "url": function () {return this.url}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 71:
/***/ function(module, exports) {

	module.exports = {}

/***/ },

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var _typeof2 = __webpack_require__(30);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(4);
	module.exports = {
	  data: function () {return {
	    root: '',
	    items: [{ name: 'hello', title: 'Hello World', url: '' }]
	  }},
	  created: function created() {
	    var bundleUrl = this.$getConfig().bundleUrl;
	    console.log('hit', bundleUrl);
	    var dirs = this.root.split('/');
	    dirs.forEach(function (dir, index) {
	      if (!dir) dirs.splice(index, 1);
	    });
	    var root = dirs.length > 0 ? dirs[0] : '';
	    var subRoot = dirs.length > 1 ? dirs.slice(1).join('/') + '/' : '';

	    var nativeBase;
	    var isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
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
	      nativeBase = '//' + host + '/' + root + '/build/' + subRoot;
	    }
	    var h5Base = './index.html?page=./' + root + '/build/' + subRoot;

	    var base = nativeBase;
	    if ((typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object') {
	      base = h5Base;
	    }

	    for (var i in this.items) {
	      var item = this.items[i];
	      if (!item.url) {
	        item.url = base + item.name + '.js';
	      }
	    }

	    if (this.items.length) console.log('hit', this.items[0].url);
	  }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });