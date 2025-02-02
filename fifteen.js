Write a react.js program to insert, update and delete data in MongoDB.
// restservice/index.js
var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var cors = require('cors');
var multer=require('multer');
var app = express();
app.use(cors());
var port = 8080;
var url = 'mongodb://127.0.0.1:27017/mymongodb';
var databasename = 'mymongodb';
var database; 
app.get('/retrieve', function (req, res) {
database.collection("student").find({}).toArray((err, result) => {
if (err) throw err;
console.log(result);
res.send(result);
});
})
app.post('/insert', multer().none(), function (req, res) {
database.collection("student").insertOne({
id:req.body.id,
name:req.body.sname,
imarks:req.body.imarks,
emarks:req.body.emarks
});
res.json('Inserted');
})
app.delete('/delete', function (req, res) {
database.collection("student").deleteOne({
id:req.query.id
});
res.json('Deleted');
})
app.put('/update', multer().none(), function (req, res) {
var query={id:req.body.id};
var newvalue = {$set:{imarks:req.body.imarks}};
console.log(query);
console.log(newvalue);
database.collection("student").updateOne(query, newvalue);
//database.collection("student").updateOne({id:1001}, { $set: 
{name:'Graham'}});
res.json('Updated');
})
app.listen(port, ()=>{
console.log('Mongo Connection Initiated...');
MongoClient.connect(url, function (err, client) {
database = client.db(databasename);
console.log('Mongo Connected');
});
});
// retrievedata/App.js
import logo from './logo.svg';
import './App.css';
import { Component} from 'react';
class App extends Component {
constructor(props) {
super(props);
this.state={
student:[]
}
}
componentDidMount(){
this.refreshStudents();
}
async refreshStudents(){
fetch("http://localhost:8080/retrieve")
.then(response=>response.json())
.then(data=> {
this.setState({student:data});
})
}
async Insert(){
var idinsertvalue = document.getElementById('idinsertvalue').value;
var nameinsertvalue = document.getElementById('nameinsertvalue').value;
var iminsertvalue = document.getElementById('iminsertvalue').value;
var eminsertvalue = document.getElementById('eminsertvalue').value;
var data = new FormData();
data.append('id',idinsertvalue);
data.append('sname',nameinsertvalue);
data.append('imarks',iminsertvalue);
data.append('emarks',eminsertvalue);
fetch("http://localhost:8080/insert", {
method:'POST',
body:data
})
.then(response=>response.json())
.then(result=> {
alert(result);
this.refreshStudents();
})
}
async Update(){
var idupdatevalue = document.getElementById('idupdatevalue').value;
var imupdatevalue = document.getElementById('imupdatevalue').value;
var data = new FormData();
data.append('id',idupdatevalue);
data.append('imarks',imupdatevalue);
fetch("http://localhost:8080/update", {
method:'PUT',
body:data
})
.then(response=>response.json())
.then(result=> {
alert(result);
this.refreshStudents();
})
}
async Delete(){
var iddeletevalue = document.getElementById('iddeletevalue').value;
fetch("http://localhost:8080/delete?id="+iddeletevalue, {
method:'DELETE'
})
.then(response=>response.json())
.then(result=> {
alert(result);
this.refreshStudents();
})
}
render() {
const{student} = this.state;
return (
<div className="App">
<h1>Students Data</h1>
<table border='1' align='center'>
<tr>
<th>Id</th>
<th>Names</th>
<th>Internal Marks</th>
<th>External Marks</th>
</tr>
<tr>
<td>
{student.map(st=><div>{st.id}</div>)}
</td>
<td>
{student.map(st=><div>{st.name}</div>)}
</td>
<td>
{student.map(st=><div>{st.imarks}</div>)}
</td>
<td>
{student.map(st=><div>{st.emarks}</div>)}
</td>
</tr>
</table>
<br/>
<br/>
<p><b>Insert Form</b></p>
<div>
<table align='center'>
<tr>
<td>Id: </td>
<td><input id='idinsertvalue' /></td>
</tr>
<tr>
<td>Name: </td>
<td><input id='nameinsertvalue' /></td>
</tr>
<tr>
<td>IMarks:</td>
<td><input id='iminsertvalue' /></td>
</tr>
<tr>
<td>EMarks: </td>
<td><input id='eminsertvalue' /></td>
</tr>
<tr>
<td> </td>
<td><button onClick={()=>this.Insert()}>Insert</button></td>
</tr>
</table>
</div>
<br/>
<br/>
<p><b>Update Form</b></p>
<div>
<table align='center'>
<tr>
<td>Id: </td>
<td><input id='idupdatevalue' /></td>
</tr>
<tr>
<td>IMarks: </td>
<td><input id='imupdatevalue' /></td>
</tr>
<tr>
<td> </td>
<td><button onClick={()=>this.Update()}>Update</button></td>
</tr>
</table>
</div>
<br/>
<br/>
<p><b>Delete Form</b></p>
<div>
<table align='center'>
<tr>
<td>Id: </td>
<td><input id='iddeletevalue' /></td>
</tr>
<tr>
<td> </td>
<td><button onClick={()=>this.Delete()}>Delete</button></td>
</tr>
</table>
</div>
</div>
);
}
}
export default App;
