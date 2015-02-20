var snowboardTrickVideos = require('../models/videos.js');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},

  // submitEntry: function(req, res) {
  //   res.render('submitEntry');
  // },

  submission: function(req, res) {
    console.log(snowboardTrickVideos.videos);
    res.render('submission', {videos:snowboardTrickVideos.videos});
  }
};

module.exports = indexController;