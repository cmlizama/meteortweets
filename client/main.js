Template.tweetInput.events({
  'submit #tweetForm':function(e){
    e.preventDefault();
    //console.log('successful function call');
    var tweetBody = $('#tweetBody').val();
    //console.log(tweetBody);
    if ((tweetBody.length > 0) && (tweetBody.length <= 140)){
        Meteor.call('postTweet', tweetBody);
        $('#tweetBody').val('');
      } else {
        alert("Oops! Your message is either too short or too long.")
      }
  }
});

//subscribe to the tweets collection
Meteor.subscribe('Tweets');

//pull the tweets collection into our template
Template.listTweets.tweets = function(){
  return Tweets.find();
}

