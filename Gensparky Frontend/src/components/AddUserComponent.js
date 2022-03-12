import React from "react"
import UserService from "../services/UserService"
import { Form, Button, Row, Col } from 'react-bootstrap';
class AddUserComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bench: '',
            cohort: '',
            discordId: '',
            firstName: '',
            lastName: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSwitch(elem, state) {
        console.log('handleSwitch. elem:', elem);
        console.log('name:', elem.props.name);
        console.log('new state:', state);
      }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit() {
        let user = {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            bench: this.state.bench,
            discordId: this.state.discordId,
            cohort: this.state.cohort

        }

        UserService.addUser(user);
        window.location.reload();
    }

    render() {
        return (
            <div class="container">
                <br />
                <Form onSubmit={this.handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Tony" name="firstName" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formFirstName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Stark" name="lastName" onChange={this.handleChange} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formDiscordId">
                            <Form.Label>Discord ID</Form.Label>
                            <Form.Control type="text" name="discordId" onChange={this.handleChange} />
                            <Form.Text className="text-muted">
                            <h6>Use the command <b>!id</b> in your discord channel to get your id.</h6>
                            </Form.Text>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formCohort">
                            <Form.Label>Cohort</Form.Label>
                            <Form.Control type="text" name="cohort" onChange={this.handleChange} />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="formTrainee" checked >
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="Trainee"
                            />
                        </Form.Group>
                    </Row>
                    <br/>
                    <Button variant="outline-primary" type="submit" onChange={this.handleChange}>
                        Add Trainee
                    </Button>
                </Form>
            </div>
        )
    }
}

export default AddUserComponent;