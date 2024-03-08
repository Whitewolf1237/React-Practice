import React from "react"
import User from "./User"
import UserClass from "./UserClass"
const About=()=>{
    return(
        <div>
            <h1>About</h1>
            {/* <User name={"Nitin Kumar Rai"}/> */}

            <UserClass name={"Nitin Kumar Rai"} location={"Noida"}/>
        </div>
    )
}

export default About