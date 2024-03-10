import React from "react"
import { useState } from "react"
const User=(props)=>{
    const [count] = useState(0);
    return (<div className="user-card m-4 p-4 bg-gray-600 rounded-lg">
        <h2>Name:{props.name}</h2>
        <h3>Location:Noida</h3>
        <h3>Contact:aiml21041@glbitm.ac.in</h3>
    </div>)
}

export default User