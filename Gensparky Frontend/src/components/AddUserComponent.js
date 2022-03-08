import React from "react"
import UserService from "../services/UserService"

class AddUserComponent extends React.Component{
    
    

    constructor(props){
        super(props);
        this.state = {
            active: '',
            cohort: '',
            discordName: '',
            firstName: '',
            lastName:''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(){
        let user = {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            active: this.state.active,
            discordName: this.state.discordName,
            cohort: this.state.cohort

        }

        UserService.addUser(user);
        window.location.reload();
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
            <div>
                <form onSubmit={this.handleSubmit}>
                <br/>
                    <div>
                        <label>First Name:</label>
                        <input className="form--field" type="text" name="firstName" onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label>Last Name:</label>
                        <input className="form--field" type="text" name="lastName" onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label>Active:</label>
                        <input className="form--field" type="text" name="active" onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label>Discord Name:</label>
                        <input className="form--field" type="text" name="discordName" onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label>Cohort:</label>
                        <input className="form--field" type="text" name="cohort" onChange={this.handleChange}/>
                    </div>

                    <button className="btn--success" type="submit">Submit</button>

                </form>
                <br/>
            </div>
        )
    }
}

export default AddUserComponent;