* Read csv file using csvtojson module <br/>
* set currentvariable equal to the current row, for each row in the csv file if it does not include a "www" and does not include a "http" and does not include a "#" <br/>
* while in the foreach loop push currentvariable into all tweets array <br/>
* turn all tweets array into csv format using array-to-csv module <br/>
* write csv formatted all tweets array to parsedtweets.csv using file-system module <br/>


<br/>
<br/>
*** TO RUN CODE: <br/>
* git clone: git@github.com:Mohammadhunan97/tweetparse.git <br/>
* cd tweetparse   <br/>
* move your csv file to this directory <br/>
* replace const csvFilePath = file; with whatever your file is named <br/> 
* node app <br/>
* new csv file without links or # symbols is saved to parseddata.csv 
