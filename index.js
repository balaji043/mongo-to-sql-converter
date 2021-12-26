const converter = require('./src/converter');
const express = require('express');
const app = express();
const convertToSQL = (input, removeUnderscoreBeforeID = false) => {
	if (typeof input !== 'string') {
		throw new Error('Input must be type string');
	}
	return converter.produceSQL(input, removeUnderscoreBeforeID);
};
const port = 3000;
app.get('/:input', (req, res) => {
	console.log();
	result = convertToSQL(req.params.input);
	res.send(result);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
