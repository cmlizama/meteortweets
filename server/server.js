Meteor.methods({
  'postTweet':function(tweetBody){
  //console.log(tweetBody);
  Tweets.insert({tweetBody:tweetBody});
  }
})