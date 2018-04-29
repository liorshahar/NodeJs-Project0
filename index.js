var vote = require('./vote'),
    http = require('http'),
    express = require('express'),
    app = express();
// Array that holding the current voting
var votingArray = [];

// Get all data function 
function getAllData(votingArray){
    console.log('*****Prinring all current voting data*****');
    votingArray.forEach(function(element){
        element.getAllData();
    });
}
// Create Pub Vote object 
var goToPubSubjects = { yes : 0  , no : 0 };
var maxVote = 10;
var goToPub = vote('Go To Pub' , goToPubSubjects , maxVote);
votingArray.push(goToPub);

// Create Prime Minister object 
var primeMinisterSubject = {Bibi : 0 , Lapid : 0 , Buji : 0};
maxVote = 10;
var primeMinister = vote('Prime Minster' , primeMinisterSubject , maxVote);
votingArray.push(primeMinister);

// Go To Pub run
goToPub.on('countChanged' , goToPub.displayCurrentCount)
goToPub.addVote('yes');
goToPub.addVote('no');
goToPub.addVote('no');
goToPub.addVote('no');
goToPub.addVote('no');
goToPub.addVote('yes');
goToPub.addVote('no');
goToPub.addVote('no');
goToPub.addVote('no');
goToPub.addVote('no');


// Prime minister run
primeMinister.on('countChanged' , primeMinister.displayCurrentCount);
primeMinister.addVote('Bibi');
primeMinister.addVote('Lapid');
primeMinister.addVote('Buji');
primeMinister.addVote('Bibi');
primeMinister.addVote('Lapid');
primeMinister.addVote('Buji');
primeMinister.addVote('Bibi');
primeMinister.addVote('Lapid');
primeMinister.addVote('Buji');
primeMinister.addVote('Bibi');
primeMinister.addVote('Bibi');


/*app.get('/' , function(req , res){

    res.send(msg);
});
http.createServer(app).listen(3000);
console.log('Listening on port 3000')*/


getAllData(votingArray);
console.log('*****Zeroing the Vote*****');
goToPub.zeroVote();
primeMinister.zeroVote();
getAllData(votingArray);

