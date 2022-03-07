import React from "react";
import UserService from "../services/UserService";

class UpdateUserComponent extends React.Component{

    constructor(props){
        super(props);
    }

    updateUser(){
        let id = 25
        let testUser = {
            "firstName":"Joey", 
            "lastName":"Win",
            "active":true, 
            "discordName":"Hamster", 
            "cohort":2
        }

        UserService.updateUser(testUser,id);
        window.location.reload();

    }

    render(){
        return (
            <div>
                <h3>testing component</h3>
                <button className="button--updateUser"
                    onClick={this.updateUser}>
                        testing updateUser
                </button>
            </div>
        )
    }
    
}

export default UpdateUserComponent;