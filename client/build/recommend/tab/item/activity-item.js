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

	;__weex_define__("@weex-component/d25d71198bf5c7bc80d236a65deb0c3b", [], function(__weex_require__, exports, __weex_module__){

	;
		__weex_module__.exports = {
		    data: function () {return {
		    	iconPhone: 'app://icon_phone',
		      	iconApply: 'app://icon_apply',
		      	commentImg: 'app://icon_comment',
		      	avatar: 'app://icon_logo',
		      	iconTime: 'app://icon_time',
		      	expandMore: 'app://expand_more',
		    }},
		}

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "card-view",
	  "classList": [
	    "container"
	  ],
	  "attr": {
	    "elevation": "6"
	  },
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
	            "header_top"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "header_top_left"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "style": {
	                    "width": 30,
	                    "height": 30
	                  },
	                  "attr": {
	                    "src": function () {return this.iconPhone}
	                  }
	                },
	                {
	                  "type": "text",
	                  "style": {
	                    "fontSize": 26,
	                    "color": "#ffffff",
	                    "marginLeft": 10
	                  },
	                  "attr": {
	                    "value": "电话会议"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "header_top_right"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "style": {
	                    "width": 20,
	                    "height": 20
	                  },
	                  "attr": {
	                    "src": function () {return this.iconApply}
	                  }
	                },
	                {
	                  "type": "text",
	                  "style": {
	                    "fontSize": 26,
	                    "color": "#ffffff",
	                    "marginLeft": 10
	                  },
	                  "attr": {
	                    "value": "报名中"
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "header_bottom"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "header_bottom_left"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "style": {
	                    "width": 76,
	                    "height": 76,
	                    "marginRight": 20
	                  },
	                  "attr": {
	                    "src": function () {return this.avatar}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "header_bottom_right"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "style": {
	                    "fontSize": 26,
	                    "color": "#ffffff",
	                    "lines": 1
	                  },
	                  "attr": {
	                    "value": "广发证券罗洪斌"
	                  }
	                },
	                {
	                  "type": "text",
	                  "style": {
	                    "width": 520,
	                    "fontSize": 32,
	                    "color": "#ffffff",
	                    "lines": 1
	                  },
	                  "attr": {
	                    "value": "今日十大机构论市：抓住投资机遇监管层释放重要信号"
	                  }
	                }
	              ]
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
	            "bottom_top"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "style": {
	                "width": 30,
	                "height": 30
	              },
	              "attr": {
	                "src": function () {return this.iconTime}
	              }
	            },
	            {
	              "type": "text",
	              "style": {
	                "fontSize": 30,
	                "color": "#000000",
	                "marginLeft": 10
	              },
	              "attr": {
	                "value": "6月12日 （1小时内） 15:30 - 16:10"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "bottom_bottom"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "tag"
	              ],
	              "attr": {
	                "value": "研报路演"
	              }
	            },
	            {
	              "type": "image",
	              "style": {
	                "width": 36,
	                "height": 36
	              },
	              "attr": {
	                "src": function () {return this.expandMore}
	              }
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
	    "marginTop": 10,
	    "marginBottom": 10,
	    "marginLeft": 30,
	    "marginRight": 30,
	    "borderColor": "#f2f2f2",
	    "borderTopWidth": 1.5,
	    "borderBottomWidth": 1.5
	  },
	  "header": {
	    "height": 348,
	    "padding": 24,
	    "backgroundColor": "#45666B"
	  },
	  "header_top": {
	    "flexDirection": "row",
	    "justifyContent": "space-between"
	  },
	  "header_top_left": {
	    "flexDirection": "row",
	    "backgroundColor": "#8ea3a6",
	    "height": 46,
	    "borderRadius": 23,
	    "alignItems": "center",
	    "paddingLeft": 20,
	    "paddingRight": 20,
	    "paddingTop": 10,
	    "paddingBottom": 10
	  },
	  "header_top_right": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "height": 46
	  },
	  "header_bottom": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "position": "absolute",
	    "bottom": 30
	  },
	  "header_bottom_right": {
	    "height": 90,
	    "justifyContent": "space-between"
	  },
	  "bottom": {
	    "alignItems": "center",
	    "paddingTop": 30,
	    "paddingBottom": 30
	  },
	  "bottom_top": {
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "bottom_bottom": {
	    "flexDirection": "row",
	    "marginTop": 30
	  },
	  "tag": {
	    "fontSize": 20,
	    "color": "#ff754b",
	    "height": 36,
	    "borderColor": "#ff754b",
	    "borderRadius": 18,
	    "borderWidth": 2,
	    "marginRight": 20,
	    "paddingLeft": 10,
	    "paddingRight": 10
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/d25d71198bf5c7bc80d236a65deb0c3b", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);