Write a program to implement MVC architecture.
// views/memo.ejs
<html>
<head>
<title>Marks Memo</title>
</head>
<body>
<center><h1>Marks Memo</h1>
<table width="60%" border="1">
<tr>
<th>S.No</th>
<th>Code</th>
<th>Subject</th>
<th>Internal Marks</th>
<th>External Marks</th>
</tr>
<% data.forEach(function(data) { %>
<tr align="center">
<td><%= data.id %></td>
<td><%= data.code %></td>
<td align="left"><%= data.sub %></td>
<td><%= data.imarks %></td>
<td><%= data.emarks %></td>
</tr>
<% }) %>
</table>
</center>
</body>
</html>
// index.js
var express = require("express");
var ejs = require("ejs");
var app = express();
// Model
var data = [
{ id: 1, code: "CS401", sub: "DAA", imarks: 28, emarks: "S" },
{ id: 2, code: "CS402", sub: "CN", imarks: 30, emarks: "A" },
{ id: 3, code: "CS403", sub: "OS", imarks: 22, emarks: "B" },
{ id: 4, code: "CS404", sub: "Java", imarks: 25, emarks: "C" },
];
// View
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
// Controller
app.get("/", (req, res) => {
res.render("memo", { data });
});
// Start Server
app.listen(8080);
