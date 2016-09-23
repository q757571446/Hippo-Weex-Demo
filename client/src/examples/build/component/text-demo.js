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

	var __weex_template__ = __webpack_require__(50)
	var __weex_style__ = __webpack_require__(51)
	var __weex_script__ = __webpack_require__(52)

	__weex_define__('@weex-component/c0ea4ed580d5c38f82bd25b5602f26fe', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/c0ea4ed580d5c38f82bd25b5602f26fe',undefined,undefined)

/***/ },

/***/ 4:
/***/ function(module, exports) {

	

/***/ },

/***/ 50:
/***/ function(module, exports) {

	module.exports = {
	  "type": "scroller",
	  "children": [
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "color",
	        "type": "primary"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "txt"
	          ],
	          "attr": {
	            "value": "default is black"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "txt"
	          ],
	          "style": {
	            "color": "#286090"
	          },
	          "attr": {
	            "value": "#286090"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "txt"
	          ],
	          "style": {
	            "color": "#00ff00"
	          },
	          "attr": {
	            "value": "#0f0"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "txt"
	          ],
	          "style": {
	            "color": "#FF0000"
	          },
	          "attr": {
	            "value": "keyword"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "txt"
	          ],
	          "style": {
	            "color": "rgb(238,162,54)"
	          },
	          "attr": {
	            "value": "rgb(238, 162, 54)"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "txt"
	          ],
	          "style": {
	            "color": "rgba(238,162,54,0.5)"
	          },
	          "attr": {
	            "value": "rgba(238, 162, 54, 0.5)"
	          }
	        }
	      ]
	    },
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "font-size",
	        "type": "primary"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "txt"
	          ],
	          "style": {
	            "fontSize": 32
	          },
	          "attr": {
	            "value": "32"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "txt"
	          ],
	          "style": {
	            "fontSize": 64
	          },
	          "attr": {
	            "value": "64"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "txt"
	          ],
	          "style": {
	            "fontSize": 100
	          },
	          "attr": {
	            "value": "100"
	          }
	        }
	      ]
	    },
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "font-style",
	        "type": "primary"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "txt"
	          ],
	          "style": {
	            "fontStyle": "normal"
	          },
	          "attr": {
	            "value": "normal"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "txt"
	          ],
	          "style": {
	            "fontStyle": "italic"
	          },
	          "attr": {
	            "value": "italic"
	          }
	        }
	      ]
	    },
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "font-weight",
	        "type": "primary"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "txt"
	          ],
	          "style": {
	            "fontWeight": "normal"
	          },
	          "attr": {
	            "value": "normal"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "txt"
	          ],
	          "style": {
	            "fontWeight": "bold"
	          },
	          "attr": {
	            "value": "bold"
	          }
	        }
	      ]
	    },
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "text-decoration",
	        "type": "primary"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "txt"
	          ],
	          "style": {
	            "textDecoration": "none"
	          },
	          "attr": {
	            "value": "none"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "txt"
	          ],
	          "style": {
	            "textDecoration": "underline"
	          },
	          "attr": {
	            "value": "underline"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "txt"
	          ],
	          "style": {
	            "textDecoration": "line-through"
	          },
	          "attr": {
	            "value": "line-through"
	          }
	        }
	      ]
	    },
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "text-align",
	        "type": "primary"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "txt"
	          ],
	          "style": {
	            "textAlign": "left"
	          },
	          "attr": {
	            "value": "left"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "txt"
	          ],
	          "style": {
	            "textAlign": "center"
	          },
	          "attr": {
	            "value": "center"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "txt"
	          ],
	          "style": {
	            "textAlign": "right"
	          },
	          "attr": {
	            "value": "right"
	          }
	        }
	      ]
	    },
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "text-overflow",
	        "type": "primary"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "txt"
	          ],
	          "style": {
	            "lines": 1
	          },
	          "attr": {
	            "value": "no text-overflow, no text-overflow"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "txt"
	          ],
	          "style": {
	            "textOverflow": "clip",
	            "width": 450,
	            "lines": 1
	          },
	          "attr": {
	            "value": "text-overflow: clip, text-overflow: clip"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "txt"
	          ],
	          "style": {
	            "textOverflow": "ellipsis",
	            "width": 450,
	            "lines": 1
	          },
	          "attr": {
	            "value": "text-overflow: ellipsis, text-overflow: ellipsis"
	          }
	        }
	      ]
	    },
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "line-height",
	        "type": "primary"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "txt"
	          ],
	          "attr": {
	            "value": "no lineheight setting"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "txt"
	          ],
	          "style": {
	            "lineHeight": 50
	          },
	          "attr": {
	            "value": "lineheight 50"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "txt"
	          ],
	          "style": {
	            "lineHeight": 80
	          },
	          "attr": {
	            "value": "lineheight 80"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 51:
/***/ function(module, exports) {

	module.exports = {
	  "txt": {
	    "marginBottom": 12,
	    "fontSize": 40
	  }
	}

/***/ },

/***/ 52:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(4);}
	/* generated by weex-loader */


/***/ }

/******/ });