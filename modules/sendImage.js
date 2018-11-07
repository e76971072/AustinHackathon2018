exports.sendImage = function(imageToSend) {
	var fs = require('fs');
	var request = require('request');
	var util = require('util');

	var content = fs.readFileSync(imageToSend);
	var base64 = Buffer.from(content).toString('base64');

	var data = { image: base64, n_tags: 5 };

	request(
		{
			url: 'https://cvapi.cusa.canon.com/v1/general-tags',
			method: 'POST',
			headers: {
				apikey: 'FrDPV4PtUcqWwTclZkub0G5DwKqNLzaP',
			},
			json: data,
		},
		function(error, response, body) {
			if (!error && response.statusCode === 200) {
				console.log(util.inspect(body, false, null, true));
			} else {
				console.log('error: ' + error);
				console.log('response.statusCode: ' + response.statusCode);
				console.log('response.statusText: ' + response.statusText);
			}
		}
	);
};
