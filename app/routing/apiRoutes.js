var path = require('path');
var friendData = require ('../data/friends.js');

module.exports = function (app) {

app.get('/api/friends', function(req, res) {
    res.json(friendData);
});

app.post('/api/friends', function(req, res) {
    
    var userData = req.body;
    var userMatchData = userData.scores;

    
    // will hold match
     
    var newFriend = {
        name: friendName = '',
        photo: friendPhoto = ''
    }
    
    var bestScore= Infinity;

    //loop through api objects array
    for(var i = 0; i < friendData.length; i++) {
        var matchDiff = 0;

        // loop through user survey score results to compare to friends in database
        for( var x = 0; x < userMatchData.length; x++) {
           matchDiff += Math.abs(userMatchData[x] - friendData[i].scores[x]);
        }
        console.log(matchDiff);
        
        // compares difference to see if the friend is mose alike 
        //as the loop progresses it compares th difference until it finds a friend in api with a lower difference
        
        if(matchDiff < bestScore) {
            bestScore = matchDiff;
            newFriend.name = friendData[i].name;
            newFriend.photo = friendData[i].photo;
        }
        
    };
    friendData.push(userData);
    res.json(newFriend);
});

}