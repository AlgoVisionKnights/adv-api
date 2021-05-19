// Retreives a specific algorithm from the database
exports.getAlgorithm = (req, res) => {
	res.status(200);
	res.json({
		message: 'Hello there -Obi Wan',
	});
};
