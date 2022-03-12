import React, { useReducer } from 'react';
import UserService from '../services/UserService';
import DeleteUserComponent from './DeleteUserComponent';
import UpdateUserComponent from './UpdateUserComponent';
import Modal from './Modal';
import { Table } from 'react-bootstrap';

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
            <div class="container">
                <h1 className=""> Users List </h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Active</th>
                            <th>Cohort</th>
                            <th>Discord Id</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                    <tr key={user.id}>
                                        <td> {user.id}</td>
                                        <td> {user.firstName}</td>
                                        <td> {user.lastName}</td>
                                        <td> {user.active.toString()}</td>
                                        <td> {user.cohort}</td>
                                        <td> {user.discordId}</td>

                                        <td>
                                            <DeleteUserComponent
                                                id={user.id} />

                                        </td>

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