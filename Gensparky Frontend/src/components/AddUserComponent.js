import React from "react"
import UserService from "../services/UserService"
import { Form, Button, Row, Col } from 'react-bootstrap';
class AddUserComponent extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            active: '',
            cohort: '',
            discordId: '',
            firstName: '',
            lastName: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
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
            active: this.state.active,
            discordId: this.state.discordId,
            cohort: this.state.cohort

        }

        UserService.addUser(user);
        window.location.reload();
    }


    addUser() {
        let testUser = {
            "firstName": "Fluffy",
            "lastName": "Win",
            "discordId": "kingPlasmaG",
            "cohort": 1
        };

        UserService.addUser(testUser);
        window.location.reload();

    }

    render() {
        return (
            <div class="container">
                {/* <form onSubmit={this.handleSubmit}>
                    <br />
                    <div>
                        <label>First Name:</label>
                        <input className="form--field" type="text" name="firstName" onChange={this.handleChange} />
                    </div>

                    <div>
                        <label>Last Name:</label>
                        <input className="form--field" type="text" name="lastName" onChange={this.handleChange} />
                    </div>

                    <div>
                        <label>Active:</label>
                        <input className="form--field" type="text" name="active" onChange={this.handleChange} />
                    </div>

                    <div>
                        <label>Discord Name:</label>
                        <input className="form--field" type="text" name="discordId" onChange={this.handleChange} />
                    </div>

                    <div>
                        <label>Cohort:</label>
                        <input className="form--field" type="text" name="cohort" onChange={this.handleChange} />
                    </div>

                    <button className="btn--success" type="submit">Submit</button>

                </form>
                <br /> */}
                <br />
                <Form onSubmit={this.handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Tony" name="firstName" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Stark" name="lastName" onChange={this.handleChange} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formDiscordId">
                            <Form.Label>Discord ID</Form.Label>
                            <Form.Control type="text" name="discordId" onChange={this.handleChange} />
                            <Form.Text className="text-muted">
                                Use the command !id in discord to get your id.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formCohort">
                            <Form.Label>Cohort</Form.Label>
                            <Form.Control type="text" placeholder="1" name="cohort" onChange={this.handleChange} />
                        </Form.Group>
                    </Row>
                    <Button variant="outline-primary" type="submit">
                        Register User
                    </Button>
                </Form>
            </div>
        )
    }
}

export default AddUserComponent;