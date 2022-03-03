import React from "react"
import UserService from "../services/UserService"

class AddUserComponent extends React.Component{
    
    

    constructor(props){
        super(props);
    }

    
    addUser() {
        let testUser = {
            "firstName":"Fluffy", 
            "lastName":"Win",
            "active":true, 
            "discordName":"kingPlasmaG", 
            "cohort":1
        };

        UserService.addUser(testUser);
        window.location.reload();

    }

    render(){
        return(
            <button className="button--AddUser"
                onClick={this.addUser}>
                    testing addUser
            </button>
        )
    }
}

export default AddUserComponent;