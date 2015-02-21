var _ = require('underscore');

var Video = function(name, id, title, description, voting) {
  this.name = name;
  this.id = id;
  this.title=title;
  this.description=description;
  this.voting=voting || 0;
}

var videos = [
  new Video(
    "SnowboardProCamp",
    "SQyTWk7OxSI",
    "10 Snowboard Tricks to Learn First",
    "Make a Snowboard Trick list and work your way through each trick. video I'm going to give you a list of the first ten tricks to learn on your snowboard."
  ),
  
  new Video(
    "Michael Elicson",
    "X9DIG3Ux79E",
    "CRAZY SNOWBOARDING TRICKS!!",
    "Some of the best snowboarders & best snowboarding tricks all in one video!"
  ),
  
  new Video(
    "Thrive Snowboards",
    "Ar3Bk2xWK4I",
    "How To Snowboard",
    "This Video gives you the basics to how to use movements of the body to control a snowboard. Use these tips to help you progress your skills on the board as you Thrive Snowboarding!!"
  ),

  new Video(
    "Best of Snowboarding",
    "-27nqjI844I",
    "Best of Snowboarding: best of flat tricks and ground tricks #2",
    "i do not own the song!! please leave a like if you enjoyed, subscribe for more and comment what you want to see next"
  ),
  new Video (
    "SnowProfessor",
    "1WXbB2EjvSw",
    "How to Snowboard: First Jump",
    "In this episode we discuss how to master teeny jumps in the terrain park. We'll cover the basics of popping, approach and landing your first small feature." 
  ),
  new Video(
    "SnowboardProCamp",
    "SQyTWk7OxSI",
    "10 Snowboard Tricks to Learn First",
    "Make a Snowboard Trick list and work your way through each trick. video I'm going to give you a list of the first ten tricks to learn on your snowboard."
  ),
  
  new Video(
    "Michael Elicson",
    "X9DIG3Ux79E",
    "CRAZY SNOWBOARDING TRICKS!!",
    "Some of the best snowboarders & best snowboarding tricks all in one video!"
  )

];

var addVideo = function(name, id, title, description) {
  videos.push(new Video(name, id, title, description));
  //console.log("videos length:", videos.length);
}

var addRating2Video = function(title, rating) {
  // find the title and replace the rating
  var video = _.find(videos, function(item) {
    return title === item.title;
  });

  video.rating = rating;
}

module.exports = {
  videos:videos,
  addVideo:addVideo,
  addRating2Video:addRating2Video
}