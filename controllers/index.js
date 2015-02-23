var snowboardTrickVideos = require('../models/videos.js');
var voting = require('../models/voting.js');

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
      res.render('index', {
        videos:snowboardTrickVideos.videos
      });
    }
  },

  submission: function(req, res) {
    res.render('submission', {
      video0:snowboardTrickVideos.videos[voting.votingIndex],
      video1:snowboardTrickVideos.videos[voting.votingIndex+1],
    });
 
  },

  round2: function(req, res) {
    res.render('round2');
  },

  votingVideos: function(req, res) {
    //console.log(req.body.pair)
    console.log(req.body.video0title);
    console.log(req.body.video1title);
    console.log(req.body.video0voting);
    console.log(req.body.video1voting);
    voting.votingIndex = voting.votingIndex + 2;

    if (req.body.video0voting > req.body.video1voting) {
      voting.roundWinners.push(req.body.video0title);
      console.log(voting.roundWinners);
    }
    else {
      voting.roundWinners.push(req.body.video1title);
      console.log(voting.roundWinners);
    }

    if (voting.votingIndex === snowboardTrickVideos.videos.length) {
      console.log("here 2");
      res.redirect('round2');
    } else {
      console.log("here 1");
    res.render('submission', {
        video0:snowboardTrickVideos.videos[voting.votingIndex],
        video1:snowboardTrickVideos.videos[voting.votingIndex+1],
      });
    }

  }
};

module.exports = indexController;