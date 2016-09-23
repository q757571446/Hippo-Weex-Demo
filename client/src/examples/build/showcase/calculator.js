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

	var __weex_template__ = __webpack_require__(85)
	var __weex_style__ = __webpack_require__(86)
	var __weex_script__ = __webpack_require__(87)

	__weex_define__('@weex-component/603eadccfc85e9db6c45c597933fe8fe', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/603eadccfc85e9db6c45c597933fe8fe',undefined,undefined)

/***/ },

/***/ 4:
/***/ function(module, exports) {

	

/***/ },

/***/ 85:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "style": {
	    "padding": 5
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "result"
	      ],
	      "attr": {
	        "value": function () {return this.result}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "row"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "btn"
	          ],
	          "events": {
	            "click": "input"
	          },
	          "attr": {
	            "value": "1"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "btn"
	          ],
	          "events": {
	            "click": "input"
	          },
	          "attr": {
	            "value": "2"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "btn"
	          ],
	          "events": {
	            "click": "input"
	          },
	          "attr": {
	            "value": "3"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "btn",
	            "btn-operator"
	          ],
	          "events": {
	            "click": "input"
	          },
	          "attr": {
	            "value": "+"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "row"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "btn"
	          ],
	          "events": {
	            "click": "input"
	          },
	          "attr": {
	            "value": "4"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "btn"
	          ],
	          "events": {
	            "click": "input"
	          },
	          "attr": {
	            "value": "5"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "btn"
	          ],
	          "events": {
	            "click": "input"
	          },
	          "attr": {
	            "value": "6"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "btn",
	            "btn-operator"
	          ],
	          "events": {
	            "click": "input"
	          },
	          "attr": {
	            "value": "-"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "row"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "btn"
	          ],
	          "events": {
	            "click": "input"
	          },
	          "attr": {
	            "value": "7"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "btn"
	          ],
	          "events": {
	            "click": "input"
	          },
	          "attr": {
	            "value": "8"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "btn"
	          ],
	          "events": {
	            "click": "input"
	          },
	          "attr": {
	            "value": "9"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "btn",
	            "btn-operator"
	          ],
	          "events": {
	            "click": "input"
	          },
	          "attr": {
	            "value": "*"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "row"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "btn"
	          ],
	          "events": {
	            "click": "input"
	          },
	          "attr": {
	            "value": "0"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "btn"
	          ],
	          "events": {
	            "click": "input"
	          },
	          "attr": {
	            "value": "."
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "btn"
	          ],
	          "events": {
	            "click": "clear"
	          },
	          "attr": {
	            "value": "AC"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "btn",
	            "btn-operator"
	          ],
	          "events": {
	            "click": "calculate"
	          },
	          "attr": {
	            "value": "="
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 86:
/***/ function(module, exports) {

	module.exports = {
	  "row": {
	    "flexDirection": "row"
	  },
	  "result": {
	    "textAlign": "right",
	    "backgroundColor": "#666666",
	    "fontSize": 40,
	    "color": "#FFFFFF",
	    "height": 100,
	    "padding": 30,
	    "margin": 5
	  },
	  "btn": {
	    "flex": 1,
	    "textAlign": "center",
	    "backgroundColor": "#eeeeee",
	    "fontSize": 36,
	    "height": 100,
	    "padding": 30,
	    "margin": 5
	  },
	  "btn-operator": {
	    "backgroundColor": "#666699",
	    "fontSize": 40,
	    "color": "#FFFFFF"
	  }
	}

/***/ },

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(4);
	var OP = ['+', '-', '*', '/'];
	var inputs = [];
	module.exports = {
	  data: function () {return {
	    result: ''
	  }},
	  methods: {
	    input: function input(e) {
	      var value = e.target.attr['value'];
	      var lastOne = inputs.length ? inputs[inputs.length - 1] : '';
	      if (OP.indexOf(lastOne) > -1 && OP.indexOf(value) > -1) {
	        return;
	      }

	      inputs.push(value);
	      var buf = [],
	          char;
	      for (var i = 0; i < inputs.length; i++) {
	        char = inputs[i];
	        if (OP.indexOf(char) > -1) {
	          char = ' ' + char + ' ';
	        }
	        buf.push(char);
	      }
	      this.result = buf.join('');
	    },
	    calculate: function calculate() {
	      var result = eval(this.result);
	      inputs = [result];
	      this.result = result;
	    },
	    clear: function clear() {
	      inputs = [];
	      this.result = '';
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });