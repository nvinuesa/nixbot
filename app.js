var twit = require("twit");
var config = require("./config.js");

var T = new twit(config);

T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
    console.log(data)
});

