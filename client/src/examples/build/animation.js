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
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(1)
	var __weex_style__ = __webpack_require__(2)
	var __weex_script__ = __webpack_require__(3)

	__weex_define__('@weex-component/08f3d99ae6a6056191aa37369285037a', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/08f3d99ae6a6056191aa37369285037a',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "Transform",
	        "type": "primary"
	      },
	      "children": [
	        {
	          "type": "wxc-button",
	          "attr": {
	            "value": "Rotate",
	            "type": "primary",
	            "size": "middle"
	          },
	          "events": {
	            "click": "rotate"
	          }
	        },
	        {
	          "type": "wxc-button",
	          "attr": {
	            "value": "Scale",
	            "type": "primary",
	            "size": "middle"
	          },
	          "events": {
	            "click": "scale"
	          },
	          "style": {
	            "marginTop": 12
	          }
	        },
	        {
	          "type": "wxc-button",
	          "attr": {
	            "value": "Translate",
	            "type": "primary",
	            "size": "middle"
	          },
	          "events": {
	            "click": "translate"
	          },
	          "style": {
	            "marginTop": 12
	          }
	        },
	        {
	          "type": "wxc-button",
	          "attr": {
	            "value": "Transform",
	            "type": "success",
	            "size": "middle"
	          },
	          "events": {
	            "click": "transform"
	          },
	          "style": {
	            "marginTop": 12
	          }
	        }
	      ]
	    },
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "Others",
	        "type": "primary"
	      },
	      "children": [
	        {
	          "type": "wxc-button",
	          "attr": {
	            "value": "BgColor",
	            "type": "primary",
	            "size": "middle"
	          },
	          "events": {
	            "click": "color"
	          }
	        },
	        {
	          "type": "wxc-button",
	          "attr": {
	            "value": "Opacity",
	            "type": "primary",
	            "size": "middle"
	          },
	          "events": {
	            "click": "opacity"
	          },
	          "style": {
	            "marginTop": 12
	          }
	        },
	        {
	          "type": "wxc-button",
	          "attr": {
	            "value": "All",
	            "type": "success",
	            "size": "middle"
	          },
	          "events": {
	            "click": "composite"
	          },
	          "style": {
	            "marginTop": 12
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "id": "block",
	      "classList": [
	        "block"
	      ],
	      "style": {
	        "transformOrigin": function () {return this.transformOrigin}
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "block-txt"
	          ],
	          "attr": {
	            "value": "Anim"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "block": {
	    "position": "absolute",
	    "width": 250,
	    "height": 250,
	    "top": 300,
	    "left": 400,
	    "backgroundColor": "#F0AD4E",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "block-txt": {
	    "color": "#FFFFFF",
	    "fontSize": 70
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(4);
	module.exports = {
	  data: function () {return {
	    transformOrigin: 'center center',
	    current_rotate: 0,
	    current_scale: 1,
	    current_color: '#FF0000',
	    current_opacity: 1,
	    current_translate: '',
	    current_transform: '',
	    isStop: true
	  }},
	  methods: {
	    anim: function anim(styles, timingFunction, duration, callback) {
	      this.$call('animation', 'transition', this._ids.block.el.ref, {
	        styles: styles,
	        timingFunction: timingFunction,
	        duration: duration
	      }, callback);
	    },
	    rotate: function rotate() {
	      var self = this;
	      self.current_rotate += 90;
	      self.anim({
	        transform: 'rotate(' + self.current_rotate + 'deg)'
	      }, 'ease-in-out', 500, function () {
	        if (self.current_rotate === 360) {
	          self.current_rotate = 0;
	        } else {
	          self.rotate();
	        }
	      });
	    },
	    translate: function translate() {
	      this.current_translate = this.current_translate ? '' : 'translate(50%, 50%)';
	      this.anim({
	        transform: this.current_translate
	      }, 'ease-in', 500, function () {});
	    },
	    scale: function scale() {
	      var self = this;
	      self.current_scale = self.current_scale === 2 ? .5 : 2;
	      self.anim({
	        transform: 'scale(' + self.current_scale + ')'
	      }, 'linear', 500, function () {});
	    },
	    transform: function transform() {
	      var self = this;
	      this.current_transform = this.current_transform ? '' : 'rotate(45deg) scale(1.5)';
	      this.anim({
	        transform: this.current_transform,
	        transformOrigin: 'left top'
	      }, 'ease-out', 500, function () {
	        if (self.current_transform !== '') {
	          self.anim({
	            transform: 'rotate(-90deg) scale(1.2)',
	            transformOrigin: 'left top'
	          }, 'ease-out', 500, function () {});
	        } else {}
	      });
	    },
	    composite: function composite() {
	      var self = this;
	      self.current_transform = self.current_transform ? '' : 'rotate(45deg) scale(1.5) translate(50%, 50%)';
	      self.current_color = self.current_color === '#F0AD4E' ? '#D9534F' : '#F0AD4E';
	      self.current_opacity = self.current_opacity === 1 ? 0.1 : 1;
	      this.anim({
	        transform: this.current_transform,
	        transformOrigin: 'left top',
	        backgroundColor: self.current_color,
	        opacity: self.current_opacity
	      }, 'ease-out', 1000, function () {});
	    },
	    color: function color() {
	      var self = this;
	      self.current_color = self.current_color === '#F0AD4E' ? '#D9534F' : '#F0AD4E';
	      self.anim({
	        backgroundColor: self.current_color
	      }, 'linear', 500, function () {});
	    },
	    opacity: function opacity() {
	      var self = this;
	      self.current_opacity = self.current_opacity === 1 ? 0.1 : 1;
	      self.anim({
	        opacity: self.current_opacity
	      }, 'linear', 500, function () {});
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 4 */
/***/ function(module, exports) {

	

/***/ }
/******/ ]);