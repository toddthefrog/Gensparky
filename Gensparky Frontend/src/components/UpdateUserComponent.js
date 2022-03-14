import React, { Component } from "react";
import UserService from "../services/UserService";
import { Button } from 'react-bootstrap';

class UpdateUserComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }

    }

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         id: this.props.match.params.id,
    //         active: '',
    //         cohort: '',
    //         discordName: '',
    //         firstName: '',
    //         lastName:''
    //     }
    // }

    updateUser() {
        let id = 25;
        let testUser = {
            "firstName": "Boy",
            "lastName": "Win",
            "bench": true,
            "discordName": "Hamster",
            "cohort": 2
        }

        UserService.updateUser(testUser, id);
        window.location.reload();

    }


    render(){
        return (
            <div class="container">
                <Button className="button--updateUser"
                    onClick={() => this.updateUser()}>
                        update Tester
                </Button>

                
            </div>
        )
    }

}

export default UpdateUserComponent;