


### 扩展组件
> 目录
1. [tab-pager]()
***

#### tab-pager(主页tab控件)

##### 1. 布局

```
    <tab-pager>
		<tab-indicator></tab-indicator>
		<tab-content></tab-content>
	</tab-pager>
```
* tab-pager
    * tab-indicator: tab顶部指示器
    * tab-content: tab内容的容器

##### 2. 样式
* tab-indicator
    * tab-background： tab背景，默认白色
    * indicator-color: 指示器颜色，默认红色
    * indicator-height: 指示器高度，默认10
    * title-color: 标题未选中颜色
    * selected-title-color: 标题选中颜色

##### 3. 属性
* tab-indicator
    * pager-title：标题数组

* tab-content
    * v-link: 通过url引用界面，支持Native | Weex

##### 4. 事件
* tab-pager
    * 当前界面选中时事件
        * type: onPagerSelected
        * target: 当前选中的tab-content组件
        * timestamp: 事件触发事件戳
        * position: 当前选中tab页的位置
        
***