import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name:"Dummy",
                location:"Default"
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

        const {name,location,avatar_url
        }=this.state.userInfo;

        return(
            <div className="user-card">
                <img src={avatar_url}/>

                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
                <h3>Contact:aiml21041@glbitm.ac.in</h3>
            </div>
    )
}
}

export default UserClass;