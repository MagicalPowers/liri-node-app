//some of this was psuedocoded in class on 11/08/2019 when Shelby went over this stuff at the end of the day. any similarities to the work of other people present is likely a result of that.
require("dotenv").config();
var keys = require("./keys.js");
// var inquirer = require("inquirer");
var moment = require("moment");
var axios = require("axios");
var Spotify = require("node-spotify-api");
var fs = require("fs");


var spotify = new Spotify(keys.spotify);

var userCommand = process.argv[2];
var userRequest = "";// everything index of 3 and later

//omdbaxios.js
//check to see if it is one of the four commands
//similar to the geocode exercise
// var arguments = process.argv;
// var address = "";
//creasting a multiword userrequest
for (var i = 2; i < process.argv.length; i++) {
    userRequest = userRequest + userRequest.argv[i] + " ";
    // fs.writeFile("location.txt", i, function(err) {
    if (err) {
        return console.log(err);
    }
    //   console.log("location updated");
    // })

};

//similar to the calculator activity
//needs to be a function so it can have arguments
function LARRY(userCommand, userRequest) {
    switch (operand) {
        case "add":
            outputNum = parseFloat(num1) + parseFloat(num2);
            break;
        case "subtract":
            outputNum = parseFloat(num1) - parseFloat(num2);
            break;
        case "multiply":
            outputNum = parseFloat(num1) * parseFloat(num2);
            break;
        case "divide":
            outputNum = parseFloat(num1) / parseFloat(num2);
            break;
        default:
            outputNum = "Not a recognized command";
    };
}
LARRY(userCommand, userRequest);
//yeah.


//otherwise, return an error
console.log(userCommand);

//---------------------------------------------------------------------------------------------------------------------------------------------------------
//spotify-this-song
// * This will show the following information about the song in your terminal/bash window

function spotifyFunction(userRequest) {
    var request = userRequest;
    if (request === "") request = "the sign ace base";
    spotify.search({}, function () {
        // * Artist(s)

        // * The song's name

        // * A preview link of the song from Spotify

        // * The album that the song is from

        //and then log it to the text file
    });

}

// * If no song is provided then your program will default to "The Sign" by Ace of Base.

// * You will utilize the [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) package in order to retrieve song information from the Spotify API.

// * The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a **client id** and **client secret**:

// * Step One: Visit <https://developer.spotify.com/my-applications/#!/>

// * Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

// * Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

// * Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).

//-------------------------------------------------------------------------------------------------------------------------------------------------------
//movie-this
// * This will output the following information to your terminal/bash window:
function movieFunction(userRequest) {
    var movieName = userRequest;
    if (movieName === "") { movieName = "mr. Nobody" };
    //this one is very similar to the omdb ajax activity
    var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    //except i dont have to use ajax and i dont have to manipulate the DOM, which is most of twhat that workingmovieapp does... gonna have to use "/r/n" probably. you know what, i was wrong.
    //the omdb axios class activity
    // Then run a request with axios to the OMDB API with the movie specified
    axios.get(queryURL).then(
        function (response) {
            //   * Title of the movie.
            console.log("The movie's rating is: " + response.data.imdbRating);
            //   * Year the movie came out.
            console.log("The movie's rating is: " + response.data.imdbRating);
            //   * IMDB Rating of the movie.
            console.log("The movie's rating is: " + response.data.imdbRating);
            //   * Rotten Tomatoes Rating of the movie.
            console.log("The movie's rating is: " + response.data.imdbRating);
            //   * Country where the movie was produced.
            console.log("The movie's rating is: " + response.data.imdbRating);
            //   * Language of the movie.
            console.log("The movie's rating is: " + response.data.imdbRating);
            //   * Plot of the movie.
            console.log("The movie's rating is: " + response.data.imdbRating);
            //   * Actors in the movie.
            console.log("The movie's rating is: " + response.data.imdbRating);
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);

                //gonna wanna log all that to the text file as well
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
    // ```
    // ```
}
// * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

// * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>

// * It's on Netflix!

// * You'll use the `axios` package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use `trilogy`.

//----------------------------------------------------------------------------------------------------------------------------------------------------------
//concert-this
// api axios call 
// inject search terms 
// display name if venue, location, and Date, use moment to Format 
// * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:
function concertFunction(userRequest) {
    var band = userRequest;
    if (band === "") band = "Feist";
    var queryURL = "https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp";
    //from the movie one
    axios.get(queryURL).then(
        function (response) {
            // * Name of the venue
            console.log("The movie's rating is: " + response.data.imdbRating);
            // * Venue location
            console.log("The movie's rating is: " + response.data.imdbRating);
            // * Date of the Event (use moment to format this as "MM/DD/YYYY")
            console.log("The movie's rating is: " + response.data.imdbRating);
            // * **Important**: There is no need to sign up for a Bands in Town `api_id` key. Use the `codingbootcamp` as your `app_id`. For example, the URL used to search for "Celine Dion" would look like the following:
            //  * `https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp`
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });

}

//----------------------------------------------------------------------------------------------------------------------------------------------------------
//do-what-it-says
//this one does not need a userrequest
function doTheRightThing() {
    //okay, the temporary variables need to bee out here, not inside the fs function
    var command2 = "";
    var request2 = "";

    // * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        } else 
        

    });
}
// * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

// * Edit the text in random.txt to test out the feature for movie-this and concert-this.

//THIS USES THE FS FILESYSTEM

// * In addition to logging the data to your terminal/bash window, output the data to a .txt file called `log.txt`.
function lumberjack() {
    fs.appendFile("log.txt", , function (err) {
        if (err) {
            return console.log(err);
        }
    })
}
// * Make sure you append each command you run to the `log.txt` file.

// * Do not overwrite your file each time you run a command.
