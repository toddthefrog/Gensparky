import React from "react";
import { Tabs, Tab } from 'react-bootstrap';
import UserComponent from "./UserComponent";
import BenchUserComponent from "./BenchUserComponent";
import AddUserComponent from "./AddUserComponent";
import RefreshedComponent from "./RefreshedComponent";

export default function HomeComponent() {

    return (
        <div className="container">
            <br />
            <RefreshedComponent/>
            <br />
            <Tabs defaultActiveKey="trainee" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="trainee" title="Trainees">
                    <UserComponent />
                </Tab>
                <Tab eventKey="bench" title="On Bench">
                    <BenchUserComponent />
                </Tab>
                <Tab eventKey="register" title="Register User">
                    <AddUserComponent />
                </Tab>

            </Tabs>
        </div>
    );
}