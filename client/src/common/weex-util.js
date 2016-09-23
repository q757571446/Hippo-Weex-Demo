var incId = 0;
var requireWeexModule = function(name){
	var module;
	__weex_define__('@weex-temp/x', function (__weex_require__) {
	  modal = __weex_require__('@weex-module/' + name)
	})
	return module;
}

exports.requireWeexModule = requireWeexModule