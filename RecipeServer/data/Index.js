(function(data) {

	var database = require("./database");

	data.getRecept = function (receptId, next) {
		database.getDb(function (err, db) {
			if (err) {
				next(err, null);
			}
			else {
				db.recept.findOne({ _id: receptId }, next);
			}
		});
	};

	data.addRecept = function (receptDO, next) {
		database.getDb(function (err, db) {
			if (err) {
				next(err, null);
			}
			else {
				db.recept.find({ receptNamn: receptDO.receptNamn }).count(function (err, count) {
					if (err) {
						next(err, null);
					}
					else {
						if (count != 0) {
							next("Finns redan ett recept med samma namn!", null);
						}
						else {
							db.recept.insert(receptDO, function (err, receptInserted) {
								if (err) {
									next(err, null);
								}
								else {
									next(null, receptInserted);
								}
							});
						}
					}
				});
			}
			
		});
	};
})