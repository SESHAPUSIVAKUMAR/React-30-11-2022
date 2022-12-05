import React from "react"
function About()
{
    /*return(
        <div>About Page</div>
    )*/
    return React.createElement("div",
    {id:"about",className:"aboutClass"},
    React.createElement("h1",null,"About Page"))
}
export default About