const request = require("request");

const url = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function(breedName, callback) {
  request(url + breedName, (error, response, body) => {
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the page.
    
    if (error) {
      // console.log('error:', error); // Print the error if one occurred
      // console.log("Error reading from URL. Check that a valid URL is being provided.");
      callback(error, null);
      return;
    }
  
    if (body === "[]") {
      // console.log("No matching breed in the database.");
      callback(Error("No match found to search term."), null);
      return;
    }
    // let size = body.length;
    // console.log(`Body is type: ${typeof body} and size ${size} bytes.`)
    
    const data = JSON.parse(body);
    callback(null, data[0].description);
  
  });

};

module.exports = fetchBreedDescription;
