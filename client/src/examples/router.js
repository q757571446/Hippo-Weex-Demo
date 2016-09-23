var agent = 'Android'
var routers = {
    login: {
        name: '登陆',
        component: function(agent){
            switch(agent){
                case "Android":
                    return "android://com.igoldenbeta.cloud/ui/view/Recommend";
                case "Ios":
                    return "ios://com.igoldenbeta.cloud/ui/view/Recommend";
                case "Web":
                    return "web://com.igoldenbeta.cloud/ui/view/Recommend";
            }
        },
        subRoutes: {
            register: {
                name: '注册',
                component: function(agent){
                    switch(agent){
                        case "Android":
                            return "android://com.igoldenbeta.cloud/ui/view/Recommend";
                        case "Ios":
                            return "ios://com.igoldenbeta.cloud/ui/view/Recommend";
                        case "Web":
                            return "web://com.igoldenbeta.cloud/ui/view/Recommend";
                    }
                },
                subRoutes: {
                    demo: {
                        name: '样例',
                        component: function(agent){
                            switch(agent){
                                case "Android":
                                    return "android://com.igoldenbeta.cloud/ui/view/Recommend";
                                case "Ios":
                                    return "ios://com.igoldenbeta.cloud/ui/view/Recommend";
                                case "Web":
                                    return "web://com.igoldenbeta.cloud/ui/view/Recommend";
                            }
                        },
                        subRoutes: {
                            demaxiya: {
                                name: '的马西亚',
                                component: function(agent){
                                    switch(agent){
                                        case "Android":
                                            return "android://com.igoldenbeta.cloud/ui/view/Recommend";
                                        case "Ios":
                                            return "ios://com.igoldenbeta.cloud/ui/view/Recommend";
                                        case "Web":
                                            return "web://com.igoldenbeta.cloud/ui/view/Recommend";
                                    }
                                },
                            }
                        }
                    },

                    test: {
                        name: '测试',
                        component: function(agent){
                            switch(agent){
                                case "Android":
                                    return "android://com.igoldenbeta.cloud/ui/view/Recommend";
                                case "Ios":
                                    return "ios://com.igoldenbeta.cloud/ui/view/Recommend";
                                case "Web":
                                    return "web://com.igoldenbeta.cloud/ui/view/Recommend";
                            }
                        },

                        subRoutes: {
                            luokesasi: {
                                name: '洛克萨斯',
                                component: function(agent){
                                    switch(agent){
                                        case "Android":
                                            return "android://com.igoldenbeta.cloud/ui/view/Recommend";
                                        case "Ios":
                                            return "ios://com.igoldenbeta.cloud/ui/view/Recommend";
                                        case "Web":
                                            return "web://com.igoldenbeta.cloud/ui/view/Recommend";
                                    }
                                },
                            }
                        }
                    },
                }
            }
        }
    }
}

var getPath = function(key,json){
    var eJson = json;
    var value = eval("eJson."+key);
    var title = value.name;
    var path = value.component(agent);
    return path+"?title="+title;
}

var populate = function(index,paths,routers){
    var segement = paths[index];

    if(index == paths.length - 1){
        //find the last segement
        return getPath(segement, routers);
    }else{
        for(var key in routers){
            if(key == segement){
                return populate(++index,paths,routers[key].subRoutes);
            }
        }
    }
}

var getComponent = function(path){
	var paths = path.split("/");
	paths.forEach(function(path, index) {
		if (!path) paths.splice(index, 1);
	});

	return populate(0,paths,routers);
}

exports.getComponent = function(path){
	return getComponent(path);
}