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

	;__weex_define__("@weex-component/55436a5f4fb05ebb8d27abe4706d4a88", [], function(__weex_require__, exports, __weex_module__){

	;
		__webpack_require__(37);
		__weex_module__.exports = {
			data: function () {return {
				avatar: 'android.resource://com.igoldenbeta.cloudresearch/mipmap/icon_logo',
				imageRight:'android.resource://com.igoldenbeta.cloudresearch/mipmap/icon_enter',
				textLeft: '修改头像',
				textItems: [
					'修改绑定手机',
					'修改密码',
					'修改认证信息',
				],

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
	      "type": "div",
	      "classList": [
	        "header"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "textLeft"
	          ],
	          "attr": {
	            "value": function () {return this.textLeft}
	          }
	        },
	        {
	          "type": "div",
	          "classList": [
	            "imgRight"
	          ],
	          "children": [
	            {
	              "type": "circle-image",
	              "attr": {
	                "image": function () {return this.avatar}
	              }
	            },
	            {
	              "type": "image",
	              "style": {
	                "width": 22,
	                "height": 38,
	                "resize": "contain",
	                "marginLeft": 30
	              },
	              "attr": {
	                "src": function () {return this.imageRight}
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "footer"
	      ],
	      "repeat": {
	        "expression": function () {return this.textItems},
	        "value": "v"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "textLeft"
	          ],
	          "attr": {
	            "value": function () {return this.v}
	          }
	        },
	        {
	          "type": "div",
	          "classList": [
	            "imgRight"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "style": {
	                "width": 22,
	                "height": 38,
	                "resize": "contain",
	                "marginLeft": 30
	              },
	              "attr": {
	                "src": function () {return this.imageRight}
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
	    "backgroundColor": "#f2f2f2"
	  },
	  "header": {
	    "height": 196,
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "backgroundColor": "#ffffff",
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "marginBottom": 20
	  },
	  "textLeft": {
	    "fontSize": 32,
	    "flex": 1
	  },
	  "imgRight": {
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "footer": {
	    "height": 135,
	    "alignItems": "center",
	    "borderBottomWidth": 2,
	    "borderColor": "#e5e5e5",
	    "flexDirection": "row",
	    "backgroundColor": "#ffffff",
	    "paddingLeft": 30,
	    "paddingRight": 30
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/55436a5f4fb05ebb8d27abe4706d4a88", {
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