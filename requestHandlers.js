var exec = require("child_process").exec;


function start(response, postData) {
  console.log("Request handler 'start' was called.");

  var body = `'<html>'+
  5 '<head>'+
  6 '<meta http-equiv="Content-Type" content="text/html; '+
  7 'charset=UTF-8" />'+
  8 '</head>'+
  9 '<body>'+
  10 '<form action="/upload" method="post">'+
  11 '<textarea name="text" rows="20" cols="60"></textarea>'+
  12 '<input type="submit" value="Submit text" />'+
  13 '</form>'+
  14 newLocal+
  15 '</html>';`;

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();

}


function upload(response, postData) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("You've sent: " +postData);
  response.end;
}

exports.start = start;
exports.upload = upload;