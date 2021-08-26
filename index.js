const fetchBreedDescription = require('./breedFetcher');
const search = process.argv.slice(2);

fetchBreedDescription(search, (error, desc) => {
  if (error) {
    console.log(error);
    console.log("Error executing function, terminating.");
    return;
  }

  console.log(desc);
});