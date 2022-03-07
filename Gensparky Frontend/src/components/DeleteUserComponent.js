import React from "react";
import UserService from "../services/UserService";

export default function DeleteUserComponent(props) {
  
    
    function deleteUser(id) {
        UserService.deleteUser(id);
        window.location.reload();
    }

        return (
            <button onClick={() => deleteUser(props.id)}>
                delete
            </button>
        );
}


