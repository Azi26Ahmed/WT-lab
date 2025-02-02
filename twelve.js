Create a Single Page Application(SPA) using REST service.
// RestService/index.js
var express = require('express');
var cors = require('cors');
var fs = require("fs");
const { spawn } = require('child_process');
var app = express();
app.use(cors());
app.get('/students', function (req, res) {
fs.readFile( __dirname + "/" + "students.json", 'utf8', function (err, 
data) {
var marksdata = JSON.parse(data);
console.log( marksdata );
res.end( JSON.stringify(marksdata));
});
})
app.get('/imarks', function (req, res) {
fs.readFile( __dirname + "/" + "imarks.json", 'utf8', function (err, data) 
{
var marksdata = JSON.parse(data);
console.log( marksdata );
res.end( JSON.stringify(marksdata));
});
})
app.get('/emarks', function (req, res) {
fs.readFile( __dirname + "/" + "emarks.json", 'utf8', function (err, data) 
{
var marksdata = JSON.parse(data);
console.log( marksdata );
res.end( JSON.stringify(marksdata));
});
})
app.listen(8080);
// RestService/students.json
[
{
"id": 1001,
"name": "Leanne Graham"
},
{
"id": 1002,
"name": "Ervin"
},
{
"id": 1003,
"name": "DuBuque"
},
{
"id": 1004,
"name": "Clementina"
},
{
"id": 1005,
"name": "Howell"
}
]
// RestService/emarks.json
[
{
"id": 1001,
"marks": 78
},
{
"id": 1002,
"marks": 79
},
{
"id": 1003,
"marks": 80
},
{
"id": 1004,
"marks": 81
},
{
"id": 1005,
"marks": 82
}
]
// RestService/imarks.json
[
{
"id": 1001,
"marks": 25
},
{
"id": 1002,
"marks": 26
},
{
"id": 1003,
"marks": 27
},
{
"id": 1004,
"marks": 28
},
{
"id": 1005,
"marks": 29
}
]
// spa/App.js
import logo from './logo.svg';
import './App.css';
import { Component, component } from 'react';
class App extends Component {
constructor(props) {
super(props);
this.state={
students:[],
imarks:[],
emarks:[]
}
}
componentDidMount(){
this.refreshStudents();
}
async refreshStudents(){
fetch("http://localhost:8080/students")
.then(response=>response.json())
.then(data=> {
this.setState({students:data});
})
}
async disImarks() {
fetch("http://localhost:8080/imarks")
.then(response=>response.json())
.then(data=> {
this.setState({imarks:data});
})
}
async disEmarks() {
fetch("http://localhost:8080/emarks")
.then(response=>response.json())
.then(data=> {
this.setState({emarks:data});
})
}
render() {
const{students} = this.state;
const{imarks} = this.state;
const{emarks} = this.state;
return (
<div className="App">
<h1>Students Data</h1>
<button onClick={()=>this.disImarks()}>Display Internal Marks</button>
<button onClick={()=>this.disEmarks()}>Display External Marks</button>
<table border='1' align='center'>
<tr>
<th>Names</th>
<th>Internal Marks</th>
<th>External Marks</th>
</tr>
<tr>
<td>
{students.map(st=><div>{st.name}</div>)}
</td>
<td>
{imarks.map(im=><div>{im.marks}</div>)}
</td>
<td>
{emarks.map(em=><div>{em.marks}</div>)}
</td>
</tr>
</table>
</div>
);
}
}
export default App;
