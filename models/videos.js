var Video = function(name, url, title, description) {
  this.name = name;
  this.url = url;
  this.title=title;
  this.description=description;
}

var videos = [
  new Video(
    "SnowboardProCamp",
    "SQyTWk7OxSI",
    "10 Snowboard Tricks to Learn First",
    "Make a Snowboard Trick list and work your way through each trick. video I'm going to give you a list of the first ten tricks to learn on your snowboard."),
  new Video(
    "Michael Elicson",
    "X9DIG3Ux79E",
    "CRAZY SNOWBOARDING TRICKS!!",
    "Some of the best snowboarders & best snowboarding tricks all in one video!"
  )
];

module.exports = {
  videos:videos
}