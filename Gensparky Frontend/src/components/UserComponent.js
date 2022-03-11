import React from 'react';
import UserService from '../services/UserService';
import DeleteUserComponent from './DeleteUserComponent';
import UpdateUserComponent from './UpdateUserComponent';
import AttendanceComponent from './AttendanceComponent';
import { Table } from 'react-bootstrap';

class UserComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data })
        });
    }

    render() {
        return (
            <div class="container">
                <h1 className=""> Users List </h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {/* <th>#</th> */}
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Active</th>
                            <th>Cohort</th>
                            <th>Discord ID</th>
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
                                        <td> {user.active.toString()}</td>
                                        <td> {user.cohort}</td>
                                        <td> {user.discordId}</td>
                                        <td> <AttendanceComponent timeInMilliseconds={user.timeInMilliseconds} /></td>

                                        <td> <DeleteUserComponent id={user.id} /></td>

                                        <td>
                                            <UpdateUserComponent
                                                id={user.id}
                                                active={user.active}
                                                cohort={user.cohort}
                                                discordName={user.discordName}
                                                firstName={user.firstName}
                                                lastName={user.lastName}
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