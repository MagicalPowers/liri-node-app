require("dotenv").config();
var keys = require("./keys.js");
// var inquirer = require("inquirer");
var moment = require("moment");
var axios = require("axios");
var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);

var userCommand = process.argv[2];
var userRequest = // everything index of 3 and later

//omdbaxios.js
//check to see if it is one of the four commands
//otherwise, return an error
console.log(userCommand);
//spotify-this-song

//movie-this

//concert-this
// api axios call 
// inject search terms 
// display name if venue, location, and Date, use moment to Format 


//do-what-it-says
//THIS USES THE FS FILESYSTEM