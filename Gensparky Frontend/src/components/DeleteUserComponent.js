import React from "react";
import UserService from "../services/UserService";

class DeleteUserComponent extends React.Component {
  

    constructor(props){
        super(props)
        this.state = {
            value:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        UserService.deleteUser( this.state.value );
        event.preventDefault();
        window.location.reload();
    }

    deleteUser() {
        UserService.deleteUser(11);
        console.log(document.getElementById("tester"));
        //window.location.reload();
    }

            render() {

                return (
                
                    <form onSubmit={this.handleSubmit}>
                        <label>id</label>

                        <input type="text" 
                            id="tester" 
                            value={this.state.value} 
                            onChange={this.handleChange}
                        />

                        <input type="submit" value="Submit"/>
                    </form>
                    
                );
            }
}

export default DeleteUserComponent;
