* Read csv file using csvtojson module <br/>
* set currentvariable equal to the current row, for each row in the csv file if it does not include a "www" and does not include a "http" and does not include a "#" <br/>
* while in the foreach loop push currentvariable into all tweets array <br/>
* turn all tweets array into csv format using array-to-csv module <br/>
* write csv formatted all tweets array to parsedtweets.csv using file-system module <br/>