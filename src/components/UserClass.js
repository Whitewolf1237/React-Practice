import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name:"Dummy Name",
                location:"DEfault location"
            }
        }
    }


    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Whitewolf1237")
        const json=await data.json()

        this.setState({
            userInfo:json,
        })

        console.log(json)
    }

    render(){

        const {login,location}=this.state.userInfo;

        return(
            <div className="user-card">

                <h2>Name:{login}</h2>
                <h3>Location:Noida</h3>
                <h3>Contact:aiml21041@glbitm.ac.in</h3>
            </div>
    )
}
}

export default UserClass;