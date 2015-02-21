var snowboardTrickVideos = require('../models/videos.js');

var indexController = {
	index: function(req, res) {
		res.render('index', {
      videoNum: snowboardTrickVideos.videos.length, 
      videos:snowboardTrickVideos.videos});
	},

  submitVideo: function(req, res) {

    var url = req.body.url;
    var position = url.indexOf("=");
    var id = url.slice(position+1, url.length);    
    snowboardTrickVideos.addVideo(
      req.body.name,
      id,
      req.body.title,
      req.body.description
    );
    if (snowboardTrickVideos.videos.length === 8) {
      //console.log("8");
      res.render('index', {
        contestFilled: true, 
        videos:snowboardTrickVideos.videos
      });
      
    }
    else  {
      console.log("here");
      res.render('index', {
        videos:snowboardTrickVideos.videos
      });
    }
  },

  submission: function(req, res) {
    // display 2 videos
    
    console.log("pair", req.params.pair);
    var index = parseInt(req.params.pair);
    var page = index + 1;
    console.log("page:",page);
    res.render('submission', {
      video0:snowboardTrickVideos.videos[index],
      video1:snowboardTrickVideos.videos[index+1],
      pageNum: page
    });

  }
};

module.exports = indexController;