const fs = require("fs");
const generatePage = require("./src/page-template.js");

const profileDataArgs = process.argv.slice(2);

const [userName, github] = profileDataArgs;
console.log(userName, github);
fs.writeFile("./index.html", generatePage(userName, github), (err) => {
  if (err) throw new Error(err);

  console.log("Portfolio complete! Check out index.html to see the output!");
});
