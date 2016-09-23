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

	;__weex_define__("@weex-component/92c036cfb9fb1df713ca3a333e2d225d", [], function(__weex_require__, exports, __weex_module__){

	;
	  var router = __webpack_require__(35);

	  __weex_module__.exports = {
	    data: function () {return {
	      isShown: true,
	      imageLeft: '',
	      textHeader: '',
	      textBottom: '',
	      imageRight:'app://icon_enter',
	      url: '',
	      subUrl: [
	       
	      ],
	    }},

	    created: function() {
	      //将真正的url映射出来
	      var realSub = this.subUrl;

	      for(var key in realSub){
	        realSub[key] = router.getComponent(this,this.url + this.subUrl[key]);
	      }

	      this.url = router.getComponent(this,this.url);
	      this.subUrl = realSub;
	    },
	    

	    methods: {
	      jump: function(){
	        this.$dispatch('onItemClick', {
	          index: this.$index, 
	          url: this.url, 
	          translate:{tabUri: this.subUrl,}
	        });
	      },

	      replaceValue: function(){

	      },
	    },
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "backgroundColor": "#ffffff"
	  },
	  "events": {
	    "click": "jump"
	  },
	  "children": [
	    {
	      "type": "div",
	      "style": {
	        "height": 135,
	        "flexDirection": "row",
	        "marginLeft": 20,
	        "marginRight": 20,
	        "alignItems": "center"
	      },
	      "children": [
	        {
	          "type": "image",
	          "style": {
	            "width": 80,
	            "height": 80,
	            "resize": "contain"
	          },
	          "attr": {
	            "src": function () {return this.imageLeft}
	          }
	        },
	        {
	          "type": "div",
	          "style": {
	            "marginLeft": 32,
	            "flex": 1
	          },
	          "children": [
	            {
	              "type": "text",
	              "style": {
	                "flex": 1,
	                "color": "#000000",
	                "fontSize": 30
	              },
	              "attr": {
	                "value": function () {return this.textHeader}
	              }
	            }
	          ]
	        },
	        {
	          "type": "image",
	          "style": {
	            "width": 22,
	            "height": 38,
	            "resize": "contain"
	          },
	          "attr": {
	            "src": function () {return this.imageRight}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "style": {
	        "marginLeft": 140,
	        "backgroundColor": "#f2f2f2",
	        "width": 750,
	        "height": 2
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {})
	})
	;__weex_bootstrap__("@weex-component/92c036cfb9fb1df713ca3a333e2d225d", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },

/***/ 35:
/***/ function(module, exports) {

	var config = '';
	var root = 'client';

	var routers = {
	    manager: {
	        name: '界面管理',
	        component: function (platform, platformUrl, baseUrl) {
	            // return baseUrl + 'examples/index.js'
	            return baseUrl + 'page-manager.js';
	            // return platformUrl + 'ui/view/fragment/login/LoginFragment';
	        }
	    },

	    test: {
	        name: '测试',
	        component: function (platform, platformUrl, baseUrl) {
	            switch (platform) {
	                case 'android':
	                    return platformUrl + "ui/view/fragment/test/TestFragment";
	            }
	        }
	    },

	    login: {
	        name: '登录',
	        component: function (platform, platformUrl, baseUrl) {
	            switch (platform) {
	                case 'android':
	                    return platformUrl + "ui/view/fragment/login/LoginFragment";
	            }
	        }
	    },
	    recommend: {
	        name: '推荐',
	        component: function (platform, platformUrl, baseUrl) {
	            return baseUrl + 'information/index.js';
	        }
	    },
	    information: {
	        name: '消息',
	        component: function (platform, platformUrl, baseUrl) {
	            return baseUrl + 'information/index.js';
	        }
	    },
	    cloud: {
	        name: '云研圈',
	        component: function (platform, platformUrl, baseUrl) {
	            return baseUrl + 'person/my/person-home.js';
	        }
	    },

	    group: {
	        name: '组合',
	        component: function (platform, platformUrl, baseUrl) {
	            return baseUrl + 'group/index.js';
	        }
	    },
	    person: {
	        name: '我的',
	        component: function (platform, platformUrl, baseUrl) {
	            return baseUrl + 'person/index.js';
	        },
	        subRouters: {
	            edit: {
	                name: '修改信息',
	                component: function (platform, platformUrl, baseUrl) {
	                    return baseUrl + "person/my/update-info.js";
	                }
	            },
	            home: {
	                name: '个人主页',
	                component: function (platform, platformUrl, baseUrl) {
	                    return baseUrl + "person/my/person-home.js";
	                }
	            },
	            group: {
	                name: '我的组合',
	                component: function (platform, platformUrl, baseUrl) {
	                    return baseUrl + "person/my/my-group.js";
	                }
	            },
	            idea: {
	                name: '我的观点',
	                component: function (platform, platformUrl, baseUrl) {
	                    switch (platform) {
	                        case 'android':
	                            return platformUrl + "ui/view/fragment/TabFragment";
	                    }
	                },
	                subRouters: {
	                    report: {
	                        name: '研究报告',
	                        component: function (platform, platformUrl, baseUrl) {
	                            return baseUrl + "person/my/list-card.js";
	                        }
	                    },
	                    image: {
	                        name: '图文观点',
	                        component: function (platform, platformUrl, baseUrl) {
	                            return baseUrl + "person/my/list-card.js";
	                        }
	                    },
	                    voice: {
	                        name: '有声观点',
	                        component: function (platform, platformUrl, baseUrl) {
	                            return baseUrl + "person/my/list-card.js";
	                        }
	                    }
	                }
	            },
	            activity: {
	                name: '我的活动',
	                component: function (platform, platformUrl, baseUrl) {
	                    switch (platform) {
	                        case 'android':
	                            return platformUrl + "ui/view/fragment/TabFragment";
	                    }
	                },
	                subRouters: {
	                    research: {
	                        name: '调研',
	                        component: function (platform, platformUrl, baseUrl) {
	                            return baseUrl + "person/my/list-card.js";
	                        }
	                    },
	                    salon: {
	                        name: '沙龙',
	                        component: function (platform, platformUrl, baseUrl) {
	                            return baseUrl + "person/my/list-card.js";
	                        }
	                    },
	                    meet: {
	                        name: '电话会议',
	                        component: function (platform, platformUrl, baseUrl) {
	                            return baseUrl + "person/my/list-card.js";
	                        }
	                    }
	                }
	            }
	        }
	    }
	};

	var getPath = function (key, json) {
	    var eJson = json;
	    var value = eval("eJson." + key);
	    var title = value.name;
	    var platform = getPlatform();
	    var path = value.component(platform, getPlatformUrl(platform), getBaseUrl());
	    return path + "?title=" + title;
	};

	var populate = function (index, paths, routers) {
	    var segement = paths[index];

	    if (index == paths.length - 1) {
	        //find the last segement
	        return getPath(segement, routers);
	    } else {
	        for (var key in routers) {
	            if (key == segement) {
	                return populate(++index, paths, routers[key].subRouters);
	            }
	        }
	    }
	};

	var getBaseUrl = function () {
	    //根据当前界面的url拼接出》》》下一个界面的url
	    //因为weex页面可能是网络，也可能是本地
	    var bundleUrl = config.bundleUrl;
	    var nativeBase;
	    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;
	    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
	    if (isAndroidAssets) {
	        nativeBase = 'file://assets/';
	    } else if (isiOSAssets) {
	        nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	    } else {
	        var host = 'localhost:12580';
	        var matches = /\/\/([^\/]+?)\//.exec(config.bundleUrl);
	        if (matches && matches.length >= 2) {
	            host = matches[1];
	        }
	        nativeBase = 'http://' + host + '/' + root + '/build/';
	    }
	    var h5Base = './index.html?page=./' + root + '/build/';
	    // in Native
	    var base = nativeBase;
	    if (typeof window === 'object') {
	        // in Browser or WebView
	        base = h5Base;
	    }
	    console.log('hit', base);

	    return base;
	};

	var getPlatform = function () {
	    return config.env.platform;
	};

	var getPlatformUrl = function (platform) {
	    switch (platform) {
	        case "android":
	            var appName = config.env.appName;
	            return 'android.class://' + appName + '/';
	    }
	};

	var getComponent = function (context, path) {
	    config = context.$getConfig();
	    console.log('router', path);
	    var paths = path.split("/");
	    paths.forEach(function (path, index) {
	        if (!path) paths.splice(index, 1);
	    });

	    return populate(0, paths, routers);
	};

	exports.getComponent = function (context, path) {
	    var component = getComponent(context, path);
	    console.log('router', component);
	    return component;
	};

	exports.getRouters = function () {
	    return JSON.stringify(routers);
	};

/***/ }

/******/ });