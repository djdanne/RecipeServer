(function (controllers) {
	
	var recipeController = require('./recipeController.js');

	controllers.init = function (app) {
		recipeController.init(app);
	};

})(module.exports);