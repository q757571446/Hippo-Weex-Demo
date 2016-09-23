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

	;__weex_define__("@weex-component/b33d339836b50d8a2a21ed37d0b497d4", [], function(__weex_require__, exports, __weex_module__){

	;
		__weex_module__.exports = {
		    data: function () {return {
		    	leftText: '',
		    	rightText: {
		    		share: '分享',
		    		edit: '编辑',
		    	},
		    	shareImg: 'android.resource://com.igoldenbeta.cloudresearch/mipmap/icon_share',
		    	editImg: 'android.resource://com.igoldenbeta.cloudresearch/mipmap/icon_edit_gray',
		    }},
		}


	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "container",
	  "style": {
	    "paddingLeft": 30,
	    "backgroundColor": "#ffffff"
	  },
	  "children": [
	    {
	      "type": "div",
	      "style": {
	        "flexDirection": "row",
	        "height": 98,
	        "alignItems": "center",
	        "justifyContent": "space-between",
	        "paddingRight": 30
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "darkText"
	          ],
	          "attr": {
	            "value": function () {return this.leftText}
	          }
	        },
	        {
	          "type": "div",
	          "style": {
	            "flexDirection": "row"
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "icon"
	              ],
	              "attr": {
	                "src": function () {return this.shareImg}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "grayText"
	              ],
	              "attr": {
	                "value": function () {return this.rightText.share}
	              }
	            },
	            {
	              "type": "image",
	              "classList": [
	                "icon",
	                "edit"
	              ],
	              "attr": {
	                "src": function () {return this.editImg}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "grayText"
	              ],
	              "attr": {
	                "value": function () {return this.rightText.edit}
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "style": {
	        "backgroundColor": "#f2f2f2",
	        "width": 750,
	        "height": 2
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "darkText": {
	    "fontSize": 32,
	    "color": "#000000"
	  },
	  "grayText": {
	    "fontSize": 28,
	    "color": "#878787"
	  },
	  "icon": {
	    "width": 32,
	    "height": 32,
	    "marginRight": 12
	  },
	  "edit": {
	    "marginLeft": 40
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/b33d339836b50d8a2a21ed37d0b497d4", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);