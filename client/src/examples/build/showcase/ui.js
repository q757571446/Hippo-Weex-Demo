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

	var __weex_template__ = __webpack_require__(149)
	var __weex_style__ = __webpack_require__(150)
	var __weex_script__ = __webpack_require__(151)

	__weex_define__('@weex-component/045f40e22d4b6e9c9f36354367812ecd', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/045f40e22d4b6e9c9f36354367812ecd',undefined,undefined)

/***/ },

/***/ 4:
/***/ function(module, exports) {

	

/***/ },

/***/ 149:
/***/ function(module, exports) {

	module.exports = {
	  "type": "scroller",
	  "children": [
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "Title Levels",
	        "type": "primary"
	      },
	      "children": [
	        {
	          "type": "wxc-hn",
	          "repeat": function () {return this.levels},
	          "attr": {
	            "level": function () {return this.level},
	            "value": function () {return 'H' + (this.level) + ', Level ' + (this.level)}
	          }
	        }
	      ]
	    },
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "Buttons",
	        "type": "primary"
	      },
	      "append": "tree",
	      "children": [
	        {
	          "type": "div",
	          "style": {
	            "flexDirection": "row",
	            "marginTop": 12
	          },
	          "repeat": function () {return this.buttons},
	          "children": [
	            {
	              "type": "wxc-button",
	              "attr": {
	                "type": function () {return this.type},
	                "size": "large",
	                "value": function () {return this.type}
	              },
	              "events": {
	                "click": "clicked"
	              }
	            },
	            {
	              "type": "wxc-button",
	              "attr": {
	                "type": function () {return this.type},
	                "size": "middle",
	                "value": function () {return this.type}
	              },
	              "events": {
	                "click": "clicked"
	              },
	              "style": {
	                "marginLeft": 5,
	                "width": 210
	              }
	            },
	            {
	              "type": "wxc-button",
	              "attr": {
	                "type": function () {return this.type},
	                "size": "small",
	                "value": function () {return this.type}
	              },
	              "events": {
	                "click": "clicked"
	              },
	              "style": {
	                "marginLeft": 5
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "Panels",
	        "type": "primary"
	      },
	      "children": [
	        {
	          "type": "wxc-panel",
	          "repeat": function () {return this.panels},
	          "attr": {
	            "title": function () {return 'Panels-' + (this.type)},
	            "type": function () {return this.type},
	            "border": "1"
	          },
	          "style": {
	            "marginLeft": 12,
	            "marginRight": 12
	          },
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return 'Panels ' + (this.type) + ' content. Panels ' + (this.type) + ' content. Panels ' + (this.type) + ' content.'}
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "List",
	        "type": "primary"
	      },
	      "children": [
	        {
	          "type": "wxc-list-item",
	          "repeat": function () {return this.tips},
	          "events": {
	            "click": "clicked"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "item-txt"
	              ],
	              "attr": {
	                "value": function () {return this.type}
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "Tips",
	        "type": "primary"
	      },
	      "children": [
	        {
	          "type": "wxc-tip",
	          "repeat": function () {return this.tips},
	          "style": {
	            "marginBottom": 20
	          },
	          "attr": {
	            "value": function () {return 'Panels ' + (this.type) + ' content. Panels ' + (this.type) + ' content. Panels ' + (this.type) + ' content.'}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 150:
/***/ function(module, exports) {

	module.exports = {
	  "item-txt": {
	    "fontSize": 48,
	    "color": "#555555"
	  }
	}

/***/ },

/***/ 151:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(4);

	module.exports = {
	  data: function () {return {
	    levels: [{ level: 1 }, { level: 2 }, { level: 3 }],
	    buttons: [{ type: 'default' }, { type: 'primary' }, { type: 'success' }, { type: 'info' }, { type: 'warning' }, { type: 'danger' }, { type: 'link' }],
	    panels: [{ type: 'default' }, { type: 'primary' }, { type: 'success' }, { type: 'info' }, { type: 'warning' }, { type: 'danger' }],
	    tips: [{ type: 'success' }, { type: 'info' }, { type: 'warning' }, { type: 'danger' }]
	  }},
	  methods: {
	    clicked: function clicked() {
	      var $modal = __weex_require__('@weex-module/modal');
	      $modal.toast({ 'message': 'clicked!', duration: 0.5 });
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });