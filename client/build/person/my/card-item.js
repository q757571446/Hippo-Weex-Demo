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

	;__weex_define__("@weex-component/c4f3dc0b1d8f3e19c74bb8340ee9b799", [], function(__weex_require__, exports, __weex_module__){

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "cell",
	  "append": "tree",
	  "classList": [
	    "cell"
	  ],
	  "events": {
	    "click": "oncellclick"
	  },
	  "attr": {
	    "rownumber": function () {return this.id},
	    "scope": function () {return this.scopeValue},
	    "composite": function () {return this.composite}
	  },
	  "repeat": function () {return this.shopList},
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "shopDiv"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "cardHeader"
	          ],
	          "style": {
	            "flexDirection": "row"
	          },
	          "children": [
	            {
	              "type": "text",
	              "style": {
	                "fontSize": 32,
	                "color": "#000000"
	              },
	              "attr": {
	                "value": "今日十大机构论市：抓住投资机遇监管层释放重要信号"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "cardBody"
	          ],
	          "style": {
	            "flexDirection": "column"
	          }
	        },
	        {
	          "type": "div",
	          "classList": [
	            "cardFooter"
	          ],
	          "style": {
	            "flexDirection": "row",
	            "marginTop": 10,
	            "marginLeft": 10,
	            "justifyContent": "flex-end"
	          }
	        }
	      ]
	    }
	  ]
	})
	})
	;__weex_bootstrap__("@weex-component/c4f3dc0b1d8f3e19c74bb8340ee9b799", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);