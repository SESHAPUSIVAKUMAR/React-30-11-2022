import React from "react"
class PropsExample extends React.Component{
	render()
	{
		console.log(this.props)
		return(
			<div>
			<h5>Props</h5>
			<h4>Name:-{this.props.name}</h4>
			<h4>RollNo:-{this.props.RollNo}</h4>
			</div>
			)
	}
}
export default PropsExample