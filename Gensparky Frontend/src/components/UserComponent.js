import React from 'react';
import UserService from '../services/UserService';
import DeleteUserComponent from './DeleteUserComponent';
import UpdateUserComponent from './UpdateUserComponent';
import AttendanceComponent from './AttendanceComponent';
import { Table } from 'react-bootstrap';
import RefreshedComponent from './RefreshedComponent'
import ModalComponent from './ModalComponent'

class UserComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }


    componentDidMount(){
        UserService.getUsers()
            .then(
                (response) => {
                    this.setState({
                        users: response.data
                    })
                });
    }

    updateUser(){
        
    }

    render() {
        return (
            <div className="container">
                <br />
                <RefreshedComponent />
                <br />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {/* <th>#</th> */}
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Cohort</th>
                            <th>Discord ID</th>
                            <th>Last Check-in</th>
                            <th>Status</th>
                            <th>Delete</th>
                            <th>Update</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                    <tr key={user.id}>
                                        {/* <td> {user.id}</td> */}
                                        <td> {user.firstName}</td>
                                        <td> {user.lastName}</td>
                                        <td> {user.cohort}</td>
                                        <td> {user.discordId}</td>
                                        <td> {user.timeInMilliseconds} </td>
                                        <td> <AttendanceComponent timeInMilliseconds={user.timeInMilliseconds} /></td>
                                        <td> <DeleteUserComponent id={user.id} /></td>
                                        <td>
                                            <ModalComponent
                                                id={user.id}
                                                cohort={user.cohort}
                                                firstName={user.firstName}
                                                lastName={user.lastName}
                                                bench={user.bench}
                                                discordId={user.discordId}
                                                timeInMilliseconds={user.timeInMilliseconds}
                                            />
                                        </td>
                                    </tr>


                            )
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default UserComponent