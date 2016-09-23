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

	;__weex_define__("@weex-component/e1b36ee52053208a5d4263c3273dfeb9", [], function(__weex_require__, exports, __weex_module__){

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "card-view",
	  "classList": [
	    "card"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "container"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "header"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "header_left"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "title"
	                  ],
	                  "attr": {
	                    "value": "标题标题标题标题标题标题标题标题标题标题标题\n标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题"
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "content"
	                  ],
	                  "attr": {
	                    "value": "内容"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "header_right"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "图片"
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "body"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "body_left"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "头像"
	                  }
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "昵称"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "body_center"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "标签"
	                  }
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "标签"
	                  }
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "标签"
	                  }
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "标签"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "body_right"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "图片"
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "bottom"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "bottom_item"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "图片"
	                  }
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "文字"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "bottom_item"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "图片"
	                  }
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "文字"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "bottom_item"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "图片"
	                  }
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "文字"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "bottom_item"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "图片"
	                  }
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "文字"
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "container": {
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "paddingLeft": 30,
	    "paddingRight": 30
	  },
	  "header": {
	    "flexDirection": "row"
	  },
	  "header_left": {
	    "flexDirection": "column"
	  },
	  "title": {
	    "fontWeight": "bold",
	    "fontSize": 30,
	    "color": "#383838",
	    "lines": 2,
	    "lineHeight": 1.3,
	    "marginTop": 18
	  },
	  "content": {
	    "color": "#878787",
	    "fontSize": 24,
	    "lineHeight": 1.5
	  },
	  "header_right": {
	    "flex": 1
	  },
	  "body": {
	    "flexDirection": "row"
	  },
	  "body_left": {
	    "flexDirection": "row"
	  },
	  "body_center": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "flex": 1
	  },
	  "bottom": {
	    "flexDirection": "row",
	    "justifyContent": "space-between"
	  },
	  "bottom_item": {
	    "flexDirection": "row"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/e1b36ee52053208a5d4263c3273dfeb9", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);