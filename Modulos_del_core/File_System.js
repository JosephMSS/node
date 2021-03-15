const fs = require("fs");
const DIR = `${__dirname}/example.txt`;
const DIR2 = `${__dirname}/example1.txt`;
const content =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum voluptate, esse eligendi quasi reprehenderit a ullam molestias dignissimos doloremque suscipit, quis cum incidunt non voluptatibus inventore qui sunt blanditiis!";

function read(path, cb) {
  fs.readFile(path, (error, data) => {
    try {
      cb(data.toString());
    } catch (error) {
      cb(new Error("al nacer :v"));
    }
  });
}
function write(path, content, cb) {
  fs.writeFile(path, content, () => {
    try {
      cb("Siuuu,listo,listo");
    } catch (error) {
      cb(new Error("Error:al,nacer :'v"));
    }
  });
}
function destroy(path, cb) {
  fs.unlink(path, () => {
    try {
      cb("Siuuu,listo,listo");
    } catch (error) {
      cb(new Error("Error:al,nacer :'v x2"));
    }
  });
}

read(DIR, console.log);
write(DIR, content, console.log);
write(DIR2, content, console.log);
read(DIR, console.log);
destroy(DIR, console.log);
