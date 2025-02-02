Demonstrate use of props, events, lists, forms using React.js.
// App.js
import logo from './logo.svg';
import './App.css';
function App() {
return (
<div className="App">
<GetUser name="ark" uid={100} />
<GetUser name="ABC" uid={101} />
<MyForm />
<StudentsData />
<EventDemo />
</div>
);
}
function GetUser(props) {
return (
<div>
<p>{props.name}</p>
<p>{props.uid}</p>
</div>
)
}
function MyForm() {
return (
<form>
Name: <input type='text'></input><br></br>
Email: <input type='text'></input><br></br>
Password: <input type='password'></input><br></br>
<input type='Submit'></input><br></br>
<input type='Reset'></input><br></br>
</form>
);
}
function StudentsData() {
var list = [
{roll:1, name:'AAA'},
{roll:2, name:'BBB'},
{roll:3, name:'CCC'},
{roll:4, name:'DDD'}
];
return (
<>
<h1>Students List</h1>
<ul>
{list.map((row) => <li key={row.roll}>{row.name}</li>)}
</ul>
</>
);
}
function EventDemo() {
var display = () => {
alert('Hello');
}
return (
<button onClick={display}>Click Here</button>
);
}
export default App;
