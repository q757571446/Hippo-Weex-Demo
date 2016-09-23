



### 路由
> 目录
1. [路由配置]()
2. [路由机制]()
3. [示例代码]()
4. [界面可视化管理]()
***

#### 1. 路由配置
**在Weex代码中维护，充当界面路径的管理工作**
>在*/client/src*目录下我们维护了一个**router.js**的映射文件，我们在这里集中管理当前应用的所有组件，以及组件之间的层级结构。

```
例如主页我的界面:
var routers = {
person: {
        name: '我的',
        component: function(platform,platformUrl,baseUrl){
            return baseUrl + 'person/index.js';
        },
        subRouters: {
            home: {
                name: '个人主页',
                component: function(platform,platformUrl,baseUrl){
                    return  baseUrl+ "person/my/person-home.js";
                },
            },
            group: {
                name: '我的组合',
                component: function(platform,platformUrl,baseUrl){
                    return  baseUrl+ "person/my/my-group.js";
                },
            },
            idea: {
                name: '我的观点',
                component: function(platform,platformUrl,baseUrl){
                    switch(platform){
                        case 'android':
                            return platformUrl + 'ui/view/fragment/tab/TabFragment';
                    }
                },
                subRouters: {
                    report: {
                        name: '研究报告',
                        component: function(platform,platformUrl,baseUrl){
                            return  baseUrl+ "person/my/list-card.js";
                        },
                    },
                    image: {
                        name: '图文观点',
                        component: function(platform,platformUrl,baseUrl){
                            return  baseUrl+ "person/my/list-card.js";
                        },
                    },
                    voice: {
                        name: '有声观点',
                        component: function(platform,platformUrl,baseUrl){
                            return  baseUrl+ "person/my/list-card.js";
                        },
                    },
                }
            },
            activity: {
                name: '我的活动',
                component: function(platform,platformUrl,baseUrl){
                    switch(platform){
						case 'android':
							return platformUrl + 'ui/view/fragment/tab/TabFragment';	
					}
                    
                },
                subRouters: {
                    research: {
                        name: '调研',
                        component: function(platform,platformUrl,baseUrl){
                            return  baseUrl+ "person/my/list-card.js";
                        },
                    },
                    salon: {
                        name: '沙龙',
                        component: function(platform,platformUrl,baseUrl){
                            return  baseUrl+ "person/my/list-card.js";
                        },
                    },
                    meet: {
                        name: '电话会议',
                        component: function(platform,platformUrl,baseUrl){
                            return  baseUrl+ "person/my/list-card.js";
                        },
                    },
                }
            },
        }
    },
}
```

> 在这个配置文件中我们描述了以下组件树，需要注意的是：
> **组件的最小粒度不局限于一个界面，一个界面是由多个组件构成**
> **组件可能由Native维护，也可能由Weex维护。**

* 我的界面
	* 个人主页
	* 我的组合
	* 我的观点
		* 研究报告
		* 图文观点
		* 有声观点
	* 我的活动
		* 调研
		* 沙龙
		* 电话会议
		
> 以我的观点界面为例，一个叶子节点具有如下几个元素：

```
	key(String)
		idea>>>>>>相对路径映射，通过/person/idea来映射到真正的绝对路径
	value(JSONObject)
		name（String）>>>>>>>>当前页面标识，也是当前页面的标题栏信息
		component(Function)
			arguments
				platform(String)>>>>渲染当前界面的平台,如'anroid'，
				platformUrl(String)>>>>>Native组件的url前缀,你需要在getPlatformUrl方法中配置
				baseUrl(String)>>>>>Weex组件的url前缀，在getBaseUrl中配置
			return 当前组件所对应的绝对路径
		subRouters(JSONArray)>>>>当前节点下的叶子节点，可能是当前节点的一部分，也可以是下级页面。例如我的观点下三个子节点就是当前页面所对应的三个tab页。		
```

***

#### 2. 路由机制
**在Native代码中维护，充当界面路径的翻译工作**
> 我们通过路径配置，可以通过***相对路径***映射到不同平台路径的***绝对路径***。在Weex界面跳转发生时，我们需要将各这个绝对路径递交给Native中的***路由模块***。**由这个模块负责绝对路径的翻译工作**

***
**绝对路径参数规范如下 （你们ios的native规范还要自己制定，添加进来）**
> 三端共有Weex界面的路径，从网络获取，供调试之用

    http://localhost:12580/client/build/person/index.js?title=标题 

> 三端共有Weex界面路径，从本地获取，版本更新使用。

    file://localpath:/client/build/person/index.js|?title=标题
    
> 三端共有Weex界面路径，从打包资源中获取，在第一次发版，打包在应用文件中。

    file://assets/client/build/person/index.js?title=标题 


> android端native界面路径

    android.class://packagename/ui/view/fragment/TabFragment|?title=标题

**Native路由模块**

* 模块名
> WeexNavigator

* 模块包含的方法，我们需要在这些方法中做参数的翻译设置

```
	//跳转到多级界面
	push(param, callbackId)
	//跳转到首页，注会在栈中弹出所有多级页面
	goHome(param,callbackId)
	//回到上级页面
	pop(param,callbackId)
	//设置导航栏右边内容
	setNavBarRightItem(param, callbackId)
	//清除导航栏右边内容
	clearNavBarRightItem(param, callbackId)
	//设置导航栏左边内容
	setNavBarLeftItem(param, callbackId)
	//清除导航栏左边内容
	clearNavBarLeftItem(param, callbackId)
	//一次设置导航栏多个内容
	setNavBarMoreItem(param, callbackId)
	//一次清除导航栏多个内容
	clearNavBarMoreItem(param, callbackId)
	//设置导航栏标题
	setNavBarTitle(param, callbackId)
	//设置导航栏左边点击事件
	setNavBarLeftItemClickListener(param, callbackId)
	//设置导航栏右边点击事件
	setNavBarRightItemClickListener(param, callbackId)	
    
```

* 参数

```
	1. 跳转参数
		{
			url: 界面的绝对路径，
			translateData: {//界面间参数传递
				key: value,
			}
		}

	2. 标题栏参数
{
	title: 标题,
	left-item-title：左边文字
	left-item-color: 左边文字颜色
	left-item-image: 左边图片
	right-item-title: 右边文字
	right-item-color: 右边文字颜色
	right-item-image: 右边图片
}
```



***
#### 3. 示例代码

*	界面跳转
	*	跳转Weex
	
			例如当前在我的界面，跳转到个人主页
			//1. 在路由配置文件中，我的节点下添加子节点，因为个人主页是Weex维护的界面，使用baseUrl前缀拼接
				home: {
	                name: '个人主页',
	                component: function(platform,platformUrl,baseUrl){
	                    return  baseUrl+ "person/my/person-home.js";
	                },
	            },
			//2. 在需要跳转处
				//引入Weex路由配置
				var router = require('../router.js');
				//因为Native路由模块
				var navigator = require('@weex-module/WeexNavigator');
				var params = {
			         url: router.getComponent(this, '/person/home');//获取相对路径所映射的绝对路径
		        }
		        navigator.push(params,function(){});
	
	*	跳转Native
	
				例如当前在我的界面，跳转到我的观点界面
				//1. 在路由配置文件中，我的节点下添加子节点，因为我的观点界面由Native维护，所以要根据platform判断当前平台后，使用platformUrl前缀拼接，同时由于这个界面有三个tab页，而这三个tab页由weex维护，所以添加三个子节点，由baseUrl前缀拼接
					idea: {
		                name: '我的观点',
		                component: function(platform,platformUrl,baseUrl){
		                    switch(platform){
		                        case 'android':
		                            return platformUrl + 'ui/view/fragment/tab/TabFragment';
		                    }
		                },
		                subRouters: {
		                    report: {
		                        name: '研究报告',
		                        component: function(platform,platformUrl,baseUrl){
		                            return  baseUrl+ "person/my/list-card.js";
		                        },
		                    },
		                    image: {
		                        name: '图文观点',
		                        component: function(platform,platformUrl,baseUrl){
		                            return  baseUrl+ "person/my/list-card.js";
		                        },
		                    },
		                    voice: {
		                        name: '有声观点',
		                        component: function(platform,platformUrl,baseUrl){
		                            return  baseUrl+ "person/my/list-card.js";
		                        },
		                    },
		                }
		            },
				//2. 在需要跳转处
					//引入Weex路由配置
					var router = require('../router.js');
					//因为Native路由模块
					var navigator = require('@weex-module/WeexNavigator');
					var params = {
				         url: router.getComponent(this, '/person/home');//获取相对路径所映射的绝对路径
			        }
			        navigator.push(params,function(){});

*	标题栏设置
				
		var params = {
	          'title': '我的',
	          'left-item-title': '',
	          'left-item-color' : '',
	          'left-item-image' : '',
	          'right-item-title': '',
	          'right-item-color': '',
	          'right-item-image': 'android.resource://com.igoldenbeta.cloudresearch/mipmap/icon_setting',
	      }
	      navigator.setNavBarMoreItem(params, function(){})
	
***
####4. 界面可视化管理
**此功能是为我们playground准备, android端已实现展示功能，增删改查尚未添加**

> 在native中由一个界面管理界面，将我们的路由配置文件，以树的形式展示出来，如下我们可以在这个界面看到当前应用所有组件层级关系，以及相对路径。
![Alt text](http://a.hiphotos.baidu.com/image/pic/item/faedab64034f78f00f42595271310a55b2191cc2.jpg)
