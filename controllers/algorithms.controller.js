// Retreives a specific algorithm from the database
exports.getAlgorithm = (req, res) => {
	// Log is for debugging purposes. Uncomment if you do not want anything on the console
	console.log(`Request Body: ${req.body}`);
	res.status(200);
	res.json({
		message: 'Hello there -Obi Wan',
	});
};
