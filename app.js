const csv = require('csvtojson');
const toCSV = require('array-to-csv');
const fs = require('file-system');


const csvFilePath = 'twitterdata.csv'; //your file
const c = console.log;
let tweets = [];

csv().fromFile(csvFilePath).on('csv',(csvRow)=>{ //this func will 
    csvRow.forEach((tweet)=>{
    	if(! tweet.includes("http") && !tweet.includes("www.") && !tweet.includes("#")){
    		let current_tweet = Array(tweet);
    		tweets.push(current_tweet);
    	}    	
    })
	
})
.on('done',()=>{
    c('end')
    fs.writeFile('parsedtweets.csv', toCSV(tweets) , (err) => {
	  if (!err){
		c('The file has been saved!');
	  }else{
	  	c("error : ", err);
	  }
	});
})
 