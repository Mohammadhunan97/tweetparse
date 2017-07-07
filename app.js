const csv = require('csvtojson');
const csvFilePath = 'twitterdata.csv';
const c = console.log;
let tweets = [];

csv().fromFile(csvFilePath).on('csv',(csvRow)=>{ //this func will 
    csvRow.forEach((tweet)=>{
    	if(! tweet.includes("http") && tweet.includes("www") && !tweet.includes("#") ){
    		let current_tweet = Array(tweet);
    		tweets.push(current_tweet);
    	}    	
    })
	
})
.on('done',()=>{
    c('end')
    c(tweets);
})
 