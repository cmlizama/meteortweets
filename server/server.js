Meteor.methods({
  'postTweet':function(tweetBody){
  //console.log(tweetBody);
  Tweets.insert({tweetBody:tweetBody});
  }
})

Meteor.publish('Tweets', function(options){
  return Tweets.find({}, options);
});