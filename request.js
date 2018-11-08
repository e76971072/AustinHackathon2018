var fs = require("fs");
var request = require("request");
var util = require("util");
var content = fs.readFileSync("shirt1.jpg");
var base64 = new Buffer(content).toString("base64");
var data = {
"image": base64,
"palette_color_count": 10,
"palette_include_percentage_threshold": 0.2
};
request({
url: "https://cvapi.cusa.canon.com/v1/color-palette",
method: "POST",
headers: {"apikey": "FrDPV4PtUcqWwTclZkub0G5DwKqNLzaP"},
json: data
}, function (error, response, body) {
if (!error && response.statusCode === 200) {
console.log(util.inspect(body, false, null, true));
}
else {
console.log("error: " + error);
console.log("response.statusCode: " + response.statusCode);
console.log("response.statusText: " + response.statusText);
}
});