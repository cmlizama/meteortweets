Template.tweetInput.events({
  'submit #tweetForm':function(e){
    e.preventDefault();
    //console.log('successful function call');
    var tweetBody = $('#tweetBody').val();
    //console.log(tweetBody);
    if (tweetBody.length){
        Meteor.call('postTweet', tweetBody);
        $('#tweetBody').val('');
      } else {
        alert("Oop! You forgot to write something.")
      }
  }
});

Template.listTweets.tweets = function(){
  return Tweets.find();
}