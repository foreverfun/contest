var snowboardTrickVideos = require('../models/videos.js');

var indexController = {
	index: function(req, res) {
    //console.log(snowboardTrickVideos.videos.length);
		res.render('index', {videoNum: snowboardTrickVideos.videos.length});
	},

  submitVideo: function(req, res) {

    var url = req.body.url;
    var position = url.indexOf("=");
    var id = url.slice(position+1, url.length);    
    //console.log(id);
    snowboardTrickVideos.addVideo(
    req.body.name,
    id,
    req.body.title,
    req.body.description);
    //console.log(snowboardTrickVideos.videos);
    res.render('submission', {videos:snowboardTrickVideos.videos});

  },

  submission: function(req, res) {
    //console.log(snowboardTrickVideos.videos);
    res.render('submission', {videos:snowboardTrickVideos.videos});
  }
};

module.exports = indexController;