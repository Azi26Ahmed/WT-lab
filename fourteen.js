Write a react.js program to retrieve data from MongoDB.
// restservice/index.js
var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var cors = require('cors');
var app = express();
app.use(cors());
var port = 8080;
var url = 'mongodb://127.0.0.1:27017/mymongodb1';
var databasename = 'mymongodb1';
var database; 
app.get('/retrieve', function (req, res) {
database.collection("student").find({}).toArray((err, result) => {
if (err) throw err;
console.log(result);
res.send(result);
});
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
</div>
);
}
}
export default App;
