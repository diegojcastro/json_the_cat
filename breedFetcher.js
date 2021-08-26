const request = require("request");

const search = process.argv.slice(2);

const url = "https://api.thecatapi.com/v1/breeds/search?q=" + search;

request(url, (error, response, body) => {
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the page.
  
  if (error) {
    console.log('error:', error); // Print the error if one occurred
    console.log("Error reading from URL. Check that a valid URL is being provided.");
    return;
  }

  if (body === "[]") {
    console.log("No matching breed in the database.");
    return;
  }
  // let size = body.length;
  // console.log(`Body is type: ${typeof body} and size ${size} bytes.`)
  
  const data = JSON.parse(body);
  // console.log(data);
  // console.log(`After parsing, body is type: ${typeof data}.`)
  
  console.log(data[0].description);

});