(function(database) {

	var mongodb = require("mongodb");
	var mongoUrl = "mongodb://localhost:27017/receptDatabase";
	var theDb = null;

	database.getDb = function (next) {
		if (!theDb) {
			// connect to the database
			mongodb.MongoClient.connect(mongoUrl, function (err, db) {
				if (err) {
					next(err, null);
				} else {
					theDb = {
						db: db,
						recept: db.collection("recept"),
						kategori: db.collection("kategori"),
						betyg: db.collection("betyg")
					};
					next(null, theDb);
				}
			});
		} else {
			next(null, theDb);
		}
	}
})(module.exports);