require('dotenv').config()
const NewAge = require("./newAge")
console.log('the bot is starting')
let na = new NewAge();

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

tweetIt();
setInterval(tweetIt, 1000*60*60*3)

function tweetIt() {

  var post = na.returnNewAgeBs();

  var tweet = { 
      status: post + " #mystical #newage"
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