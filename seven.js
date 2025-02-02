Demonstrate working of built-in node.js modules and file system.
var http = require('http');
var os = require('os');
var fs = require('fs');
var server = http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write('Hello Web Technologies Lab<br>');
res.write('Date: ' + Date() + '<br>');
res.write('Platform: ' + os.platform() + '<br>');
res.write('Architecture: ' + os.arch() + '<br>');
res.write('HostName: ' + os.hostname() + '<br>');
res.write('OS: ' + os.type() + '<br>');
var text = fs.readFileSync('\Lab 5\\content.txt','utf8')
res.write(text);
res.end(); 
});
server.listen(8080);
fs.open('myfile1.txt', 'w', function (err, file) {
if (err) throw err;
console.log('Saved!');
});
fs.writeFile('myfile3.txt', 'Hello Lab', function (err) {
if (err) throw err;
console.log('Saved!');
});
fs.appendFile('myfile1.txt', 'Hello Web', function (err) {
if (err) throw err;
console.log('Saved!');
});
fs.rename('myfile3.txt', 'myfile4.txt', function (err) {
if (err) throw err;
console.log('File Renamed!');
});
