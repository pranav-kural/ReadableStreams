var fs = require('fs');
var stream = fs.createReadStream("chat.log", "UTF-8");

var data = "";

stream.once("data", function() {

  console.log("\n\n\n");
  console.log("Started Reading the file");
  console.log("\n\n\n");

});

/*
Data is actually gathered in chunks of data, usually a specified amount/size of data per stream call.
*/

stream.on('data', function(chunk) {
  process.stdout.write(`   chunk: ${chunk.length} |`);
  data += chunk;
});

stream.on('end', function() {
  console.log("\n\n\n");
  console.log(`Finished Reading the File ${data.length}`);
  console.log("\n\n\n");
});
