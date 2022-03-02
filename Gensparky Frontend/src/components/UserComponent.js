import React from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({users: response.data})
        });
    }

    render(){
        return(
            <div>
                <h1 className = ""> Users List </h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td> User Id</td>
                            <td> Active</td>
                            <td> Cohort</td>
                            <td> Discord Name</td>
                            <td>First Name</td>
                            <td>Last Name</td>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                <tr key = {user.id}>
                                    <td> {user.id}</td>
                                    <td> {user.active}</td>
                                    <td> {user.cohort}</td>
                                    <td> {user.discordName}</td>
                                    <td> {user.firstName}</td>
                                    <td> {user.lastName}</td>
                                    }

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserComponent