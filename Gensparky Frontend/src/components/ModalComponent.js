import React, { useState } from "react";
import { Button, Modal, Form } from 'react-bootstrap';
import UserService from "../services/UserService"

export default function ModalComponent(props) {
    // reference for adding form to modal
    // https://dev.to/kimmese/react-bootstrap-modal-form-31gc

    // modal controls
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // form controls
    const [userFormData, setUserFormData] = useState({ id: props.id, cohort: props.cohort, discordId: props.discordId, firstName: props.firstName, lastName: props.lastName, bench: props.bench })
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };
    const handleFormSubmit = async(event) => {
        let user = { id: userFormData.id, cohort: userFormData.cohort, discordId: userFormData.discordId, firstName: userFormData.firstName, lastName: userFormData.lastName, bench: userFormData.bench, timeInMilliseconds: props.timeInMilliseconds }
        event.preventDefault();
        UserService.updateUser(user, props.id)
        console.log(user)
        window.location.reload();
        handleClose()
      }


    return (
        <>
            <Button variant="outline-primary" onClick={handleShow}>
                Update User
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Trainee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control name="firstName" type="text" value={userFormData.firstName} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control name="lastName" type="text" value={userFormData.lastName} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDiscordId">
                            <Form.Label>Discord Id</Form.Label>
                            <Form.Control name="discordId" type="text" value={userFormData.discordId} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formCohort">
                            <Form.Label>Cohort</Form.Label>
                            <Form.Control name="cohort" type="text" value={userFormData.cohort} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBench">
                            <Form.Label>On Bench</Form.Label>
                            <Form.Control name="bench" type="text" value={userFormData.bench} onChange={handleInputChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleFormSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}