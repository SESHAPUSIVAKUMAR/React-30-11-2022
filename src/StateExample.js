import React from 'react'

export default class StateExample extends React.Component {
    state={
        name:"Siva Kumar",
        class:"bsc"
    }
    render() {
    return (
      <div>
        <p>StateExample</p> 
        <p>{this.state.name}</p>
        <p>{this.state.class}</p>
        <h1>StateExample-Reactjs</h1>
     </div>
    )
  }
}
