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

	;__weex_define__("@weex-component/ccc48b3527ba1fcf3b7e8a15fc7b92fb", [], function(__weex_require__, exports, __weex_module__){

	;
		__webpack_require__(37);
		var router = __webpack_require__(35);
		__weex_module__.exports = {
			data: function () {return {
	      		avatar: 'app://icon_logo',
	      		tabs: [
					'/recommend',
			        '/information',
			        '/cloud',
			        '/group',
			        '/person',
	      		],
				tabItems: [

				],
			}},

		    methods: {
		      getRealPath: function(tabs){
		        var paths = [];
		        for(var key in tabs){
		          paths[key] = router.getComponent(this, tabs[key]);
		        }
		        return paths;
		      },
		    },

			created: function(){
				this.tabItems = this.getRealPath(this.tabs);
			},
		}

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "container",
	  "children": [
	    {
	      "type": "div",
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "background"
	          ],
	          "attr": {
	            "src": "app://bg_person_header"
	          }
	        },
	        {
	          "type": "div",
	          "classList": [
	            "header"
	          ],
	          "children": [
	            {
	              "type": "circle-image",
	              "attr": {
	                "image": function () {return this.avatar}
	              }
	            },
	            {
	              "type": "text",
	              "style": {
	                "fontSize": 34,
	                "color": "#ffffff",
	                "marginTop": 20
	              },
	              "attr": {
	                "value": "王者"
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "tab-page",
	      "attr": {
	        "pageContents": function () {return this.tabItems}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "header": {
	    "height": 240,
	    "position": "absolute",
	    "top": 0,
	    "opacity": 1,
	    "left": 310,
	    "right": 310,
	    "alignItems": "center",
	    "paddingTop": 30,
	    "paddingBottom": 32
	  },
	  "background": {
	    "height": 240,
	    "width": 750
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/ccc48b3527ba1fcf3b7e8a15fc7b92fb", {
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