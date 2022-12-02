import React from 'react'

export default class Events extends React.Component {
    state={
        username:"",
        demo:""
    }
    handleUser=()=>{
       console.log(this.state.username)
       this.setState({
        username:""
       })
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })

       
    }
    
  render() {
    return (
      <div>
        <h1>Events</h1>
        <input value={this.state.username} name="username" type="text" placeholder='username' onChange={this.handleChange}></input>
        <button onClick={this.handleUser}>submit</button>
      </div>
      
    )
  }
}
