const fs = require('fs');
// Retreives a specific algorithm from the database
exports.getAlgorithm = (req, res) => {
	fs.readFile('./test.md', 'utf8', (err, data) => {
		if (err) {
			console.error(err);
			return;
		}

		res.status(200);
		res.json({
			file: data,
		});
	});
};
