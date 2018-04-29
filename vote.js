var events = require('events');

class VotingObj extends events.EventEmitter{

    // Class constructor , get voiting subject
    constructor(voteSubject , subjectArray , maxVote){
        super();
        this.voteSubject = voteSubject;
        this.voteCounter = 0;
        this.subjects = subjectArray;
        this.maxVote = maxVote;
    
        this.printeVoteCount = () =>{
           for(var key in  this.subjects){
                console.log(key + ": " +  this.subjects[key]);
            } 
        } 
        console.log(`New vote was created : ${voteSubject}`);
        this.printeVoteCount();

        }
        // Return the Vote subject and current count
        getAllData(){
            console.log(`The current count of ${this.voteSubject} is: ${this.voteCounter}`);
            this.printeVoteCount();
        }

        // Update the vote number + 1
        addVote(key){
            if(this.voteCounter <= this.maxVote - 1){
                this.subjects[key]++;
                this.voteCounter += 1;
                this.emit('countChanged');
            }else{
                console.log('MAX VOTE SIZE')
            } 
           
        }
        // Set the vote count to zero
        zeroVote(){
            this.voteCounter = 0;
            for(var key in  this.subjects){
                this.subjects[key] = 0;
            }
            this.emit('countChanged');
        }

        // -- The Collback functions --


        displayCurrentCount(){
            console.log(`The current count of ${this.voteSubject} is: ${this.voteCounter}`);
            this.printeVoteCount();
        }



};


// Export the module
module.exports = (voteSubject , subjectArray , maxVote) =>{
    var voteInstace = new VotingObj(voteSubject , subjectArray , maxVote);
    return voteInstace;
}