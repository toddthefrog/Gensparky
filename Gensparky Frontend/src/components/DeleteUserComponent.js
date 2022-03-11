import React from "react";
import UserService from "../services/UserService";
import { Button } from 'react-bootstrap';

export default function DeleteUserComponent(props) {
  
    
    function deleteUser(id) {
        UserService.deleteUser(id);
        window.location.reload();
    }

        return (
            <Button onClick={() => deleteUser(props.id)} variant="outline-danger">
                Delete User
            </Button>
        );
}


