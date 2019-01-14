var exec = require("child_process").exec;

function start() {
  console.log("Request handler 'start' was called.");

  function sleep() {
    var content = "empty";
    
    exec("ls -lah", function (error, stdout, stderr) {
      Response.writeHead(200, {"Content-Type": "text/plain"});
      Response.write(stdout);
      Response.end();
    });

  }

}


function upload(response) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload");
  response.end;
}

exports.start = start;
exports.upload = upload;