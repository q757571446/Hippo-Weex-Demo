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

	;__weex_define__("@weex-component/6459b0dbcc9d344f872693756d98d523", [], function(__weex_require__, exports, __weex_module__){

	;
		__webpack_require__(37);
		__weex_module__.exports = {
		    data: function () {return {
		    	
		    }},
		}

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "children": [
	    {
	      "type": "circle-image",
	      "attr": {
	        "radius": "43",
	        "image": function () {return this.avatar}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "content"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "style": {
	            "fontSize": 32,
	            "color": "#000000"
	          },
	          "attr": {
	            "value": function () {return this.name}
	          }
	        },
	        {
	          "type": "text",
	          "style": {
	            "width": 450,
	            "lines": 1,
	            "fontSize": 28
	          },
	          "attr": {
	            "value": function () {return this.company+this.jobTitle}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "subscribe"
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "container": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "padding": 30,
	    "borderColor": "#f2f2f2",
	    "borderTopWidth": 1.5,
	    "borderBottomWidth": 1.5
	  },
	  "content": {
	    "height": 90,
	    "marginLeft": 20,
	    "justifyContent": "space-between"
	  },
	  "subscribe": {
	    "backgroundColor": "#f39c12",
	    "width": 90,
	    "height": 50,
	    "position": "absolute",
	    "right": 30,
	    "top": 44,
	    "bottom": 44,
	    "borderRadius": 5
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/6459b0dbcc9d344f872693756d98d523", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },

/***/ 37:
/***/ function(module, exports) {

	;__weex_define__("@weex-component/circle-image", [], function(__weex_require__, exports, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	            radius: 66,
	            image: 'app://icon_logo',
	        }},

	        created: function(e){
	            console.log('image', this.image);
	        }
	    }


	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "container",
	  "children": [
	    {
	      "type": "image",
	      "style": {
	        "borderRadius": function () {return this.radius},
	        "width": function () {return this.radius*2},
	        "height": function () {return this.radius*2}
	      },
	      "attr": {
	        "src": function () {return this.image}
	      }
	    },
	    {
	      "type": "container"
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {})
	})

/***/ }

/******/ });