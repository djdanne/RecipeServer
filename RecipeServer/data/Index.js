(function (data) {
	
	var database = require("./database");
	var ObjectId = require('mongodb').ObjectID;
	
	data.getRecept = function (receptId, next) {
		database.getDb(function (err, db) {
			if (err) {
				next(err, null);
			}
			else {
				db.recept.findOne({ _id: new ObjectId(receptId) }, next);
			}
		});
	};
	
	data.getReceptList = function (next) {
		database.getDb(function (err, db) {
			if (err) {
				next(err, null);
			}
			else {
				db.recept.find({}).toArray(next);
			}
			
		});
	};
	
	data.updateRecept = function (receptDO, next) {
		database.getDb(function (err, db) {
			if (err) {
				next(err, null);
			}
			else {
				db.recept.update({ _id: new ObjectId(receptDO._id) }, receptDO, next);
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
})(module.exports);