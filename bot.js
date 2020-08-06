console.log('the bot is starting')

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

tweetIt();
setInterval(tweetIt, 1000*60*60)

function tweetIt() {

  var post = "something";

  var tweet = { 
      status: post + " #mystical"
  }

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {
      console.log(err);
    } else {
      console.log("it worked!")
    }
  }
}