import React from "react";
import UserService from "../services/UserService";

class UpdateUserComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            users:[]
        }
        
    }

    updateUser(){
        let id = 25;
        let testUser = {
            "firstName":"Boy", 
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
                <button className="button--updateUser"
                    onClick={() => this.updateUser()}>
                        update Tester
                </button>
            </div>
        )
    }
    
}

export default UpdateUserComponent;