require("dotenv").config();
var keys = require("./keys.js");
var moment = require("moment");
var axios = require("axios");
var Spotify = require("node-spotify-api");
var fs = require("fs");
var spotify = new Spotify(keys.spotify);
var userCommand = process.argv[2];
var userRequest1 = "";
for (var i = 3; process.argv[i]; i++) {
    userRequest1 += process.argv[i] + "+";
};
var userRequest = userRequest1.slice(0, -1);
function LARRY(userCommand, thing2) {
    switch (userCommand) {
        case "concert-this":
            concertFunction(thing2);
            break;
        case "spotify-this-song":
            spotifyFunction(thing2);
            break;
        case "movie-this":
            movieFunction(thing2);
            break;
        case "do-what-it-says":
            doTheRightThing();
            break;
        default:
            console.log("Not a recognized command");
    };
}
//Language Assesment Recognition Reasoning Yinterface
LARRY(userCommand, userRequest);
console.log(userCommand);
console.log(userRequest);
function spotifyFunction(thing2) {
    var song = thing2;
    if (song === "") song = "the sign by ace base";
    spotify.search({ type: "track", query: song }, function (err, data) {
        if (err) {
            return console.log("error occured: " + err);
        }
        console.log("\n" + data.tracks.items[0].artists[0].name);
        console.log("\n" + data.tracks.items[0].name);
        console.log("\n" + data.tracks.items[0].external_urls.spotify);
        console.log("\n" + data.tracks.items[0].album.name);
        // log("\n" + data.tracks.items[0].artists[0].name + "\n" + data.tracks.items[0].name + "\n" + data.tracks.items[0].external_urls.spotify + "\n" + data.tracks.items[0].album.name);
    });
};
function movieFunction(thing2) {
    var movieName = thing2;
    if (movieName === "") { movieName = "mr+Nobody" };
    var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    console.log(queryURL);
    axios.get(queryURL).then(
        function (response) {
            console.log("The movie's Title is: " + response.data.Title);
            console.log("The movie's year of release is: " + response.data.Year);
            console.log("The movie's IMDB rating is: " + response.data.imdbRating);
            console.log("The movie's 'Rotten Tomatoes' rating is: " + response.data.Ratings[1].Value);
            console.log("The movie's country of production is: " + response.data.Country);
            console.log("The movie's language is: " + response.data.Language);
            console.log("The movie's plot is: " + response.data.Plot);
            console.log("The movie's actors are: " + response.data.Actors);
        })
        .catch(function (error) {
            if (error.response) {
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}
function concertFunction(thing2) {
    var band = thing2;
    if (band === "") band = "dr+dog";
    var queryURL = "https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp";
    console.log(queryURL);
    axios.get(queryURL).then(
        function (response) {
            console.log("The Name of the venue is: " + response.data[0].venue.name);
            console.log("The Venue location is: " + response.data[0].venue.city + ", " + response.data[0].venue.country);
            console.log("The Date of the Event is: " + moment(response.data.datetime, "MM/DD/YYYY"));
        })
        .catch(function (error) {
            if (error.response) {
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}
function doTheRightThing() {
    var command2 = "";
    var request2 = "";
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) throw err;
        var output = data.split(",", 2);
        command2 = output[0];
        request2 = output[1];
        LARRY(command2, request2);
    });
}
function log() {
    fs.appendFile("log.txt", arg + "\n", function (err) {
        if (err) throw err;
        return console.log("Log Lady");
    })
}