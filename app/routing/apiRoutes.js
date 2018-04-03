var path = require('path');
var friendData = require ('../data/friends.js');

module.exports = function (app) {

app.get('/api/friends', function(req, res) {
    res.json(friendData);
});

app.post('/api/friends', function(req, res) {
    
    var userData = req.body;
    var userMatchData = userData.scores;

    var totalDiff = 1000;
    // will hold match
     
    var newFriend = {
        name: friendName = '',
        photo: friendPhoto = ''
    }
    

    //loop through api objects
    for(var i = 0; i < friendData.length; i++) {
        var matchDiff = 0;

        // loop through user survey score results to compare to friends in database
        for( var x = 0; x < userMatchData.length; x++) {
           matchDiff += Math.abs(userMatchData[x] - friendData[i].scores[x]);
        }
        console.log(matchDiff);

        if(matchDiff < totalDiff) {
            totalDiff = matchDiff;
            newFriend.name = friendData[i].name;
            newFriend.photo = friendData[i].photo;
        }
    }
    
    friendData.push(req.body);
    res.json(newFriend);
});

}