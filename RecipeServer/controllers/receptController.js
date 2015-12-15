(function (receptController) {

	receptController.init = function (app) {

		app.get("/api/recept/:receptId", function (req, res) {

			var recipeId = req.params.receptId;

			var test = {
				namn: "Köttbullar",
				beskrivning: "Goda1",
				länk: "www.dn.se"
			};

			res.set("Content-Type", "application/json");
			res.send(test);

		});

		app.get("/api/recept2/:recept2id", function (req, res) {
			res.set("Content-Type", "application/json");
			res.send("blä");
		});

	};

})(module.exports);