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

	;__weex_define__("@weex-component/c7a761fdc945a09fadbf6a173e14b15b", [], function(__weex_require__, exports, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      dir: 'examples',
	      baseURL: '',
	      refresh_display : 'hide',
	      loading_display : 'hide',
	      backgroundColor: 'red',
	      composite: 'false',
	      shareImg: 'android.resource://com.igoldenbeta.cloudresearch/mipmap/icon_share',
	      editImg: 'android.resource://com.igoldenbeta.cloudresearch/mipmap/icon_edit_gray',
	      delImg: 'android.resource://com.igoldenbeta.cloudresearch/mipmap/icon_delete',
	      shopList: [
	        {
	          id: 1,
	          scopeValue: 1,
	          PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	          PersonName: 'Mendeleyev',
	          PersonVisitTime: 'today',
	          shopDesc: 'Genius only means hard-working all one\'s life',
	          shopImgList: [{
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd2.alicdn.com/bao/uploaded/i2/TB1rtOnHpXXXXXLaXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd4.alicdn.com/bao/uploaded/i4/TB15KrfFVXXXXXJXXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd2.alicdn.com/bao/uploaded/i2/TB1t5YBGVXXXXXcaXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	          }],
	          shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopLikeText: '6',
	          shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopCommentText: '97',
	          shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	          shopLookText: '1003',
	          shareText: "10",

	        },
	        {
	          id: 2,
	          scopeValue: 2,
	          PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	          PersonName: 'Napoleon',
	          PersonVisitTime: 'yesterday',
	          shopDesc: 'The man who has made up his mind to win will never say "impossible "',
	          shopImgList: [{
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd1.alicdn.com/imgextra/i1/2655929383/TB2.qITjpXXXXcIXXXXXXXXXXXX_!!2655929383.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd3.alicdn.com/imgextra/i3/2655929383/TB2eWwZjpXXXXbHXXXXXXXXXXXX_!!2655929383.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd2.alicdn.com/imgextra/i2/2655929383/TB2tgQWjpXXXXbZXXXXXXXXXXXX_!!2655929383.jpg_220x220.jpg'
	          }],
	          shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopLikeText: '6',
	          shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopCommentText: '97',
	          shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	          shopLookText: '1003',
	          shareText: "10",

	        },
	        {
	          id: 3,
	          scopeValue: 3,
	          PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	          PersonName: 'Balzac',
	          PersonVisitTime: 'yesterday',
	          shopDesc: 'There is no such thing as a great talent without great will - power',
	          shopImgList: [{
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd1.alicdn.com/imgextra/i1/TB1AFz9LXXXXXbrXVXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd2.alicdn.com/imgextra/i2/2557954751/TB2is2njXXXXXatXpXXXXXXXXXX_!!2557954751.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd2.alicdn.com/imgextra/i2/2557954751/TB2PNYGjXXXXXbXXXXXXXXXXXXX_!!2557954751.jpg_220x220.jpg'
	          }],
	          shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopLikeText: '6',
	          shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopCommentText: '97',
	          shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	          shopLookText: '1003',
	          shareText: "10",

	        },
	        {
	          id: 4,
	          scopeValue: 4,
	          PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	          PersonName: 'Thomas Carlyle',
	          PersonVisitTime: '3 day ago',
	          shopDesc: 'Cease to struggle and you cease to live',
	          shopImgList: [{
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd4.alicdn.com/imgextra/i4/69426324/TB2zbwdfXXXXXa4XpXXXXXXXXXX_!!69426324.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd4.alicdn.com/imgextra/i4/69426324/TB2L7ZAfXXXXXXOXXXXXXXXXXXX_!!69426324.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd4.alicdn.com/imgextra/i4/69426324/TB2p9wufXXXXXbiXXXXXXXXXXXX_!!69426324.jpg_220x220.jpg'
	          }],
	          shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopLikeText: '6',
	          shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopCommentText: '97',
	          shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	          shopLookText: '1003',
	          shareText: "10",

	        },
	        {
	          id: 5,
	          scopeValue: 5,
	          PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	          PersonName: 'Addison',
	          PersonVisitTime: 'yesterday',
	          shopDesc: 'A strong man will struggle with the storms of fate',
	          shopImgList: [{
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1MQ8_KVXXXXaLXVXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd2.alicdn.com/imgextra/i2/53218032/TB2bGSqiXXXXXXyXpXXXXXXXXXX_!!53218032.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd2.alicdn.com/bao/uploaded/i2/TB1kP2zKFXXXXbIXXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	          }],
	          shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopLikeText: '6',
	          shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopCommentText: '97',
	          shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	          shopLookText: '1003',
	          shareText: "10",

	        },
	        {
	          id: 6,
	          scopeValue: 1,
	          PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	          PersonName: 'Ruskin',
	          PersonVisitTime: 'yesterday',
	          shopDesc: 'Living without an aim is like sailing without a compass',
	          shopImgList: [{
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd4.alicdn.com/bao/uploaded/i4/TB11yFnHXXXXXakaXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd4.alicdn.com/imgextra/i4/32720628/TB2CRJUcXXXXXXwXpXXXXXXXXXX_!!32720628.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd2.alicdn.com/bao/uploaded/i2/TB17LUzHXXXXXcEaXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	          }],
	          shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopLikeText: '6',
	          shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopCommentText: '97',
	          shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	          shopLookText: '1003',
	          shareText: "10",

	        },
	        {
	          id: 7,
	          scopeValue: 2,
	          PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	          PersonName: 'Yiming',
	          PersonVisitTime: 'today',
	          shopDesc: 'Live a noble and honest life. Reviving past times in your old age will help you to enjoy your life again',
	          shopImgList: [{
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd4.alicdn.com/bao/uploaded/i4/TB1hvNoJXXXXXaMaXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd4.alicdn.com/imgextra/i4/2058567235/TB2V8iygFXXXXaRXpXXXXXXXXXX_!!2058567235.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd2.alicdn.com/imgextra/i2/2058567235/TB2im1QgFXXXXX8XXXXXXXXXXXX_!!2058567235.jpg_220x220.jpg'
	          }],
	          shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopLikeText: '6',
	          shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopCommentText: '97',
	          shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	          shopLookText: '1003',
	          shareText: "10",

	        },
	        {
	          id: 8,
	          scopeValue: 3,
	          PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	          PersonName: 'Brown',
	          PersonVisitTime: 'yesterday',
	          shopDesc: 'Behind every successful man there\'s a lot u unsuccessful years',
	          shopImgList: [{
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd1.alicdn.com/bao/uploaded/i1/TB18BZ2KFXXXXb8XFXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd1.alicdn.com/imgextra/i1/2775383848/TB2r012jVXXXXXHXpXXXXXXXXXX_!!2775383848.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd3.alicdn.com/imgextra/i3/2775383848/TB2iI9VjVXXXXaoXpXXXXXXXXXX_!!2775383848.jpg_220x220.jpg'
	          }],
	          shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopLikeText: '6',
	          shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopCommentText: '97',
	          shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	          shopLookText: '1003',
	          shareText: "10",

	        },
	        {
	          id: 9,
	          scopeValue: 4,
	          PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	          PersonName: 'YIMING',
	          PersonVisitTime: 'today',
	          shopDesc: 'Enrich your life today,. yesterday is history.tomorrow is mystery',
	          shopImgList: [{
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1JB.rLpXXXXXLXXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd4.alicdn.com/imgextra/i4/2702739128/TB2JdvmjVXXXXXjXXXXXXXXXXXX_!!2702739128.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd2.alicdn.com/imgextra/i2/2702739128/TB2A.e6jVXXXXXGXpXXXXXXXXXX_!!2702739128.jpg_220x220.jpg'
	          }],
	          shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopLikeText: '6',
	          shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopCommentText: '97',
	          shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	          shopLookText: '1003',
	          shareText: "10",

	        },
	        {
	          id: 10,
	          scopeValue: 5,
	          PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	          PersonName: 'YIMING',
	          PersonVisitTime: 'yesterday',
	          shopDesc: 'The secret of success is constancy to purpose',
	          shopImgList: [{
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd3.alicdn.com/bao/uploaded/i3/TB17zXOGXXXXXbEXVXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd1.alicdn.com/imgextra/i1/2265445951/TB22ACTbFXXXXXBXXXXXXXXXXXX_!!2265445951.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd3.alicdn.com/imgextra/i3/2265445951/TB2oXqUbFXXXXXIXXXXXXXXXXXX_!!2265445951.jpg_220x220.jpg'
	          }],
	          shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopLikeText: '6',
	          shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopCommentText: '97',
	          shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	          shopLookText: '1003',
	          shareText: "10",
	        }
	      ],
	    }},

	    created: function() {
	      var  nativeBase;

	      var bundleUrl = this.$getConfig().bundleUrl;
	      var appName = this.$getConfig().env.appName;
	      //安卓
	      this.classBase = 'android.class://' + appName + '/';
	      this.resBase = 'android.resource://' + appName + '/';

	      var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;
	      var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
	      if (isAndroidAssets) {
	        nativeBase = 'file://assets/';
	      }
	      else if (isiOSAssets) {
	        nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	      }
	      else {
	        var host = 'localhost:12580';
	        var matches = /\/\/([^\/]+?)\//.exec(this.$getConfig().bundleUrl);
	        if (matches && matches.length >= 2) {
	          host = matches[1];
	        }
	        nativeBase = 'http://' + host + '/' + this.dir + '/build/';
	      }

	      var h5Base = './index.html?page=./' + this.dir + '/build/';

	       // in Native
	      var base = nativeBase;
	      if (typeof window === 'object') {
	        // in Browser or WebView
	        base = h5Base;
	      }

	      this.baseURL = base;  
	    },

	    methods: {
	      oncellclick: function(e) {
	        // this.$call('modal', 'toast', {
	        //   'message': 'row ' + e.target.attr.rownumber + ' clicked',
	        //   'duration': 2.0
	        // });
	        var params = {
	          url: this.baseURL + 'demo/my/list-cloud-search.js?title=测试界面',
	        }
	        var navigator = __weex_require__('@weex-module/WeexNavigator');
	        navigator.push(params, function(){});
	      },
	      onfixedclick: function(e) {
	        if (e.target.style.backgroundColor == 'red') {
	          this.backgroundColor = 'green';
	          this.composite = true;
	        }
	        else {
	          this.backgroundColor = 'red';
	          this.composite = false;
	        }
	      },
	      onloading: function (e) {
	        this.loading_display = true
	        setTimeout(function () {
	          this.loading_display = 'hide'
	        }.bind(this), 1000)
	      }
	    }

	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "list",
	  "classList": [
	    "list"
	  ],
	  "attr": {
	    "loadmoreoffset": "2000"
	  },
	  "children": [
	    {
	      "type": "refresh",
	      "classList": [
	        "refresh-view"
	      ],
	      "attr": {
	        "display": function () {return this.loading_display}
	      },
	      "events": {
	        "refresh": "onloading"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "refresh-arrow"
	          ],
	          "style": {
	            "textAlign": "center",
	            "color": "rgb(238,162,54)"
	          },
	          "shown": function () {return (this.refresh_display==='hide')},
	          "attr": {
	            "value": "Load more"
	          }
	        },
	        {
	          "type": "loading-indicator",
	          "style": {
	            "height": 60,
	            "width": 60,
	            "color": "#3192e1"
	          }
	        }
	      ]
	    },
	    {
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
	          "type": "card-view",
	          "style": {
	            "marginBottom": 10,
	            "marginTop": 10,
	            "backgroundColor": "#fafafa"
	          },
	          "attr": {
	            "elevation": "6"
	          },
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
	                    "marginTop": 30,
	                    "marginBottom": 20
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
	                  "children": [
	                    {
	                      "type": "text",
	                      "style": {
	                        "fontSize": 28,
	                        "color": "#878787",
	                        "lines": 3
	                      },
	                      "attr": {
	                        "value": "今日十大机构论市：抓住投资机遇监管层释放重要信号,今日十大机构论市：抓住投资机遇监管层释放重要信号,今日十大机构论市：抓住投资机遇监管层释放重要信号,今日十大机构论市：抓住投资机遇监管层释放重要信号,今日十大机构论市：抓住投资机遇监管层释放重要信号,今日十大机构论市：抓住投资机遇监管层释放重要信号,今日十大机构论市：抓住投资机遇监管层释放重要信号,今日十大机构论市：抓住投资机遇监管层释放重要信号"
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "cardFooter"
	                  ],
	                  "style": {
	                    "justifyContent": "space-between",
	                    "marginTop": 26,
	                    "alignItems": "center"
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "classList": [
	                        "footerLeft"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "style": {
	                            "fontSize": 24,
	                            "color": "#878787"
	                          },
	                          "attr": {
	                            "value": "2016.06.18 17:30:00"
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "footerRight"
	                      ],
	                      "style": {
	                        "flexDirection": "row",
	                        "alingItems": "center"
	                      },
	                      "children": [
	                        {
	                          "type": "div",
	                          "classList": [
	                            "textImg"
	                          ],
	                          "children": [
	                            {
	                              "type": "image",
	                              "classList": [
	                                "smallImg"
	                              ],
	                              "attr": {
	                                "src": function () {return this.shareImg}
	                              }
	                            },
	                            {
	                              "type": "text",
	                              "style": {
	                                "fontSize": 26,
	                                "color": "#878787",
	                                "marginLeft": 12
	                              },
	                              "attr": {
	                                "value": "分享"
	                              }
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "classList": [
	                            "textImg"
	                          ],
	                          "children": [
	                            {
	                              "type": "image",
	                              "classList": [
	                                "smallImg"
	                              ],
	                              "attr": {
	                                "src": function () {return this.editImg}
	                              }
	                            },
	                            {
	                              "type": "text",
	                              "style": {
	                                "fontSize": 26,
	                                "color": "#878787",
	                                "marginLeft": 12
	                              },
	                              "attr": {
	                                "value": "编辑"
	                              }
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "classList": [
	                            "textImg"
	                          ],
	                          "children": [
	                            {
	                              "type": "image",
	                              "classList": [
	                                "smallImg"
	                              ],
	                              "attr": {
	                                "src": function () {return this.delImg}
	                              }
	                            },
	                            {
	                              "type": "text",
	                              "style": {
	                                "fontSize": 26,
	                                "color": "#878787",
	                                "marginLeft": 12
	                              },
	                              "attr": {
	                                "value": "删除"
	                              }
	                            }
	                          ]
	                        }
	                      ]
	                    }
	                  ]
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
	  "list": {
	    "flexDirection": "column",
	    "overflow": "hidden",
	    "width": 750,
	    "height": 1200,
	    "backgroundColor": "#fafafa"
	  },
	  "cell": {
	    "flexDirection": "column",
	    "width": 750
	  },
	  "shopDiv": {
	    "flexDirection": "column",
	    "backgroundColor": "#ffffff",
	    "overflow": "visible"
	  },
	  "textImg": {
	    "flexDirection": "row",
	    "marginRight": 40
	  },
	  "cardHeader": {
	    "paddingLeft": 20,
	    "paddingRight": 20
	  },
	  "cardBody": {
	    "paddingLeft": 20,
	    "paddingRight": 20
	  },
	  "cardFooter": {
	    "paddingLeft": 20,
	    "paddingRight": 20,
	    "flexDirection": "row",
	    "borderStyle": "solid",
	    "borderTopWidth": 2,
	    "borderTopColor": "#f2f2f2",
	    "height": 70
	  },
	  "smallImg": {
	    "width": 32,
	    "height": 32
	  },
	  "refresh-view": {
	    "height": 120,
	    "width": 750,
	    "display": "flex",
	    "MsFlexAlign": "center",
	    "WebkitAlignItems": "center",
	    "WebkitBoxAlign": "center",
	    "alignItems": "center"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/c7a761fdc945a09fadbf6a173e14b15b", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);