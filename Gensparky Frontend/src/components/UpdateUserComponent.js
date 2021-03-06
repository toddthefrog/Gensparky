import React from "react";
import UserService from "../services/UserService";
import { Button } from 'react-bootstrap';

class UpdateUserComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }

    }

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

    render() {
        return (
            <div className="container">
                <Button className="button--updateUser"
                    onClick={() => this.updateUser()} variant="outline-primary">
                    Update User
                </Button>
            </div>
        )
    }

}

export default UpdateUserComponent;