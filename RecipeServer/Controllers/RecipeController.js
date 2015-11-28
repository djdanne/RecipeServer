(function (recipeController) {

	recipeController.init = function (app) {

		app.get("api/recipe/:recipeId", function (req, res) {

			var recipeId = req.params.recipeId;

			var test = {
				namn: "Köttbullar",
				beskrivning: "Goda",
				länk: "www.dn.se"
			};

			res.set("Content-Type", "application/json");
			res.send(201, test);

		});

	};

})(module.exports);