//暂不支持js文件中require模块，哪么这里充当url请求管理
var apiURL = {
    baseurl: 'http://114.55.30.104:8090/service/',
    homeTag: 'customize/AttentionServiceImpl/showHomeTag',
    pagerData: 'search/RecommandActivityServiceImpl/getFirstPageMessage',
};

//主页推荐页面获取用户标签
exports.getHomeTag = function (stream, callback) {
    stream.sendHttp({
      method: 'GET',
      url: apiURL.baseurl + apiURL.homeTag,
    }, function (ret) {
      callback(JSON.parse(ret).data);
    });
};

exports.getPagerData = function (tagName, stream, callback) {
    stream.sendHttp({
      method: 'GET',
      url: apiURL.baseurl + apiURL.pagerData,
      body: {
        pageIndex: 1,
        pageSize: 50,
        tag: tagName,
      }
    }, function (ret) {
      callback(JSON.parse(ret).data);
    });
};