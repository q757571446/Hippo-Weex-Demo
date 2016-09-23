//暂不支持js文件中require模块，哪么这里充当url请求管理
var apiURL = {
    baseurl: 'http://114.55.30.104:8090/service/',
    homePage: 'useropt/UserOptServiceImpl/myInfo',
};

//主页我的接口初始化
exports.getHome = function (stream, callback) {
    stream.sendHttp({
      method: 'GET',
      url: apiURL.baseurl + apiURL.homePage,
    }, function (ret) {
      callback(JSON.parse(ret).data);
    });
};