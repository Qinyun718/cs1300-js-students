var corsApiUrl = "https://cors-anywhere.herokuapp.com/";
// TODO: REPLACE YOUR TOKEN
var apiToken = "?token=-oGIeFlTkCc7N3oYzSZfRjaNNGe85V8kL0TctH3UUxo";

// CORS stands for "cross origin resource sharing" -- you'll be making http requests in order
// DON'T CHANGE THIS: fetches the data from the API endpoint
const doCORSRequest = (options) => {
  var x = new XMLHttpRequest();
  x.open("GET", corsApiUrl + options.url);
  x.send(options.data);
  return x;
};

// Example promise that executes the GET request above and waits for it to finish before resolving
const corsPromise = () =>
  new Promise((resolve, reject) => {
    const request = doCORSRequest({
      url: "https://trefle.io/api/v1/plants" + apiToken,
    });
    resolve(request);
  });





// THIS IS SOME SAMPLE CODE FOR HOW TO USE PROMISES -- feel free to adapt this into a function!
corsPromise().then(
  (request) =>
    (request.onload = request.onerror = function () {
      plants = JSON.parse(request.response).data
      console.log(plants)
      newElement = ""
      for (var i in plants){
        newElement += '<h1>' + "Name: " + plants[i].common_name + '</h1>' + 
        '<h2>' + "Family:" + plants[i].family + '</h2>'
        
      }
      document.getElementById("plant").innerHTML = newElement;
      // TODO: ADD FUNCTION, ETC. FOR WHATEVER YOU WANT TO DO ONCE THE DATA IS RECEIVED
    })
);

//// TODO: ADD WHATEVER FUN CONTENT YOU WANT ////
