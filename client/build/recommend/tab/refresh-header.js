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
/***/ function(module, exports) {

	;__weex_define__("@weex-component/39ffbdbae381ba7e34443164a994e004", [], function(__weex_require__, exports, __weex_module__){

	;
		__weex_module__.exports = {
			data: function () {return {
				loading_display : 'hide',
				refresh_display : 'hide',
			}},

			methods: {
				onloading: function (e) {
			        this.loading_display = true
			        setTimeout(function () {
			          this.loading_display = 'hide'
			        }.bind(this), 1000)
			    }
			}

		}

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "refresh",
	  "classList": [
	    "refresh-view"
	  ],
	  "attr": {
	    "display": function () {return this.loading_display}
	  },
	  "events": {
	    "refresh": "onloading"
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "refresh-arrow"
	      ],
	      "style": {
	        "textAlign": "center",
	        "color": "rgb(238,162,54)"
	      },
	      "shown": function () {return (this.refresh_display==='hide')},
	      "attr": {
	        "value": "Load more"
	      }
	    },
	    {
	      "type": "loading-indicator",
	      "style": {
	        "height": 60,
	        "width": 60,
	        "color": "#3192e1"
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "refresh-view": {
	    "height": 120,
	    "width": 750,
	    "display": "flex",
	    "MsFlexAlign": "center",
	    "WebkitAlignItems": "center",
	    "WebkitBoxAlign": "center",
	    "alignItems": "center"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/39ffbdbae381ba7e34443164a994e004", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);