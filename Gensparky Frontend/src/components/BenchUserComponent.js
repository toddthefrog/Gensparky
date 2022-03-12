import React from 'react';
import UserService from '../services/UserService';
import DeleteUserComponent from './DeleteUserComponent';
import UpdateUserComponent from './UpdateUserComponent';
import AttendanceComponent from './AttendanceComponent';
import { Table } from 'react-bootstrap';
import RefreshedComponent from './RefreshedComponent'
import ExampleModal from './ExampleModal';

class BenchUserComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        UserService.getBenchUsers().then((response) => {
            this.setState({ users: response.data })
        });
    }

    render() {
        return (
            <div class="container">
                <br/>
                <RefreshedComponent/>
                <br/>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {/* <th>#</th> */}
                            <th>First Name</th>
                            <th>Last Name</th>
                            {/* <th>Active</th> */}
                            {/* <th>Cohort</th> */}
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
                                        {/* <td> {user.bench.toString()}</td> */}
                                        {/* <td> {user.cohort}</td> */}
                                        <td> {user.discordId}</td>
                                        <td> <AttendanceComponent timeInMilliseconds={user.timeInMilliseconds} /></td>

                                        <td> <DeleteUserComponent id={user.id} /></td>

                                        <td>
                                            {/* <UpdateUserComponent
                                                id={user.id}
                                                bench={user.bench}
                                                cohort={user.cohort}
                                                discordName={user.discordName}
                                                firstName={user.firstName}
                                                lastName={user.lastName}
                                            /> */}
                                            <ExampleModal/>
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

export default BenchUserComponent