console.log('the bot is starting')

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

var tweet = { 
    status: 'First tweet from new age node project'
}

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) {
    if (err) {
        console.log(err);
    } else {
    console.log("it worked!")
  }
}