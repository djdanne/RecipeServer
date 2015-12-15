(function (controllers) {
	
	var receptController = require('./receptController.js');

	controllers.init = function (app) {
		receptController.init(app);
	};

})(module.exports);