import React  from "react"
class ClassComponent3 extends React.Component{
    render()
    {
        console.log(this.props)
        return(
            <div>
                <h1>vs code</h1>
                <p>Name:-{this.props.name}</p>
                <p>RollNo:-{this.props.rollno}</p>
                
            </div>
        )
    }
}
export default ClassComponent3