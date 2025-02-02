Demonstrate rendering HTML and JSX using React.js.
// App.js
import logo from './logo.svg';
import './App.css';
function App() {
var header = "Muffakham Jah College of Engineering & Technology";
var mynav = (
<div>
<a href="">Faculty</a><br></br>
<a href="">Staff</a><br></br>
<a href="">Students</a><br></br>
</div>
);
var dd = new Date();
return (
<div className="App">
<h1>{header}</h1>
<h2 style={{color:"blue"}}>Computer Science & Engineering 
Department</h2>
{mynav}
{dd.toDateString()}
<GetVision />
<h3>Mission</h3>
<p>Mentoring students towards a successful professional career in a 
global environment through quality education and soft skills in order to meet 
the evolving societal needs.</p>
</div>
);
}
function GetVision() {
return (
<div>
<h3>Vision</h3>
<p>To contribute competent computer science professionals to the global 
talent pool to meet the constantly evolving societal needs.</p>
</div>
)
}
export default App;
