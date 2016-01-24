(function (receptController) {
	
	var data = require("../data");

	receptController.init = function (app) {

		app.get("/api/recept/:receptId", function (req, res) {

			var recipeId = req.params.receptId;
			
			data.getRecept(recipeId, function (err, receptDO) {
				if (err) {
					res.send(400, err);
				}
				else {
					res.set("Content-Type", "application/json");
					res.send(receptDO);
				}
			});
		});

		app.put("/api/recept/:receptId", function (req, res) {
			
			var receptId = req.params.receptId;

			var receptDO = req.body.receptDO;

			data.updateRecept(receptDO, function (err, receptDO) {
				if (err) {
					res.send(400, err);
				}
				else {
					res.set("Content-Type", "application/json");
					res.send(receptDO);
				}
			});
		});

		app.post("/api/recept/", function (req, res) {
			var receptId = req.params.receptId;

			var receptDO = req.body.receptDO;

			data.addRecept(receptDO, function (err, receptDO) {
				if (err) {
					res.send(400, err);
				}
				else {
					res.set("Content-Type", "application/json");
					res.send(receptDO);
				}
			});
		});

	};

})(module.exports);