var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  var data = req.app.get('appData');
  var pageTeams = [];
  var pagePlayers = data.seasons.seventeen.players;

  data.seasons.seventeen.players.forEach(function(item) {
    item.teams.forEach(function(team){
      pageTeams = pageTeams.concat(team);
    });
  });

  res.render('index', {
    pageTitle: 'Home',
    players: pagePlayers,
    teams: pageTeams.sort(),
    pageID: 'home'
  });

});

module.exports = router;
