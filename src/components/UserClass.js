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
            <div className="flex justify-center ">
                <div className="user-card border border-solid rounded-lg inline-block p-4 items-center m-4  shadow-lg">
                    <img src={avatar_url} className=" border-2 border-solid  rounded"/>

                    <h2 className="text-center text-lg font-bold ">Name:{name}</h2>
                    <h3 className="text-center font-bold">Location:{location}</h3>
                    <h3 className="text-center font-bold">Contact:aiml21041@glbitm.ac.in</h3>
                </div>
            </div>
    )
}
}

export default UserClass;