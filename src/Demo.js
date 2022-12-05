/*import ClassComponents from "./ClassComponents"
import ClassComponent2 from "./ClassComponent2"
function Demo(){
	return(
		<div>
		<p>Good Morning</p>
		<h1>learning about ReactJs</h1>
		<img src=
		"https://www.trio.dev/hubfs/Imported_Blog_Media/dbc631c76245baabe08c31d016a94de2-2.jpg"
		alt="react" width="40%"/>
		<ClassComponents/>
		<ClassComponent2/>
		</div>
	)
}
export default Demo*/
/*import PropsExample from "./PropsExample"
function Demo(){
return(
	<div>
	<h1>This is about props Example</h1>
	<PropsExample name="SIVA KUMAR" RollNo="203109"/>
	</div>
	)

}
export default Demo*/

//import ClassComponent3 from "./ClassComponent3";
//import Events from "./Events";
//import FuncExample from "./FuncExample";
//import StateExample from "./StateExample";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Navbar from "./Components/Navbar"
import NotFound from "./Components/NotFound"


function Demo()
{
	return(
		<div>
		{/*
		<p>good morning</p>
		<ClassComponent3 name="siva kumar" rollno="203109"/>
		<ClassComponent3 name="karthik" rollno="203114"/>
		<ClassComponent3 name="rajesh" rollno="203116"/>
		<ClassComponent3 name="trinath" rollno="203125"/>
		<FuncExample name="functionExample"/>
		<StateExample/>
		<Events/> */}
		<BrowserRouter>
		<Navbar/>
			<Routes>
				<Route path="/" element={<Home/>}>
				</Route>
				<Route path="/about" element={<About/>}>
				</Route>
				<Route path="/contact" element={<Contact/>}>
				</Route>
				<Route path="*" element={<NotFound/>}>
				</Route>
				
			</Routes>
		</BrowserRouter>
		</div>
	)
}
export default Demo

