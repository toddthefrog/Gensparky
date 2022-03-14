import React from 'react';
import UserService from '../services/UserService';
import DeleteUserComponent from './DeleteUserComponent';
import Modal from './Modal';
import { Table } from 'react-bootstrap';
import RefreshedComponent from './RefreshedComponent'
import ExampleModal from './ExampleModal';
import AttendanceComponent from "./AttendanceComponent"
import ModalComponent from './ModalComponent';
import { useState } from "react";

class UserComponent extends React.Component {
    
    

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            show: false
        };
        
        this.showModal = this.showModal.bind(this);
        this.showModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({show: true})
    }

    hideModal = () => {
        this.setState({show: false})
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
                <Modal show={this.state.show} handleClose={this.hideModal}>
          <         p>Modal</p>
                </Modal>
                <button type="button" onClick={this.showModal}>
                    open
                </button>
            </div>
        )
    }
}

export default UserComponent