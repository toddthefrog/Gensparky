import React, { Component } from 'react';
import ExampleModal from './ExampleModal';

class RefreshedComponent extends Component {

    presentTime() {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        let currentdate = new Date();
        var datetime = monthNames[currentdate.getDay()] + " " + currentdate.getMonth()
            + " @ "
            + currentdate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
            + " EST"
        return datetime
    }

    render() {
        return (
            <div>
                <h5 className="">{this.presentTime()}</h5>
                <ExampleModal/>
            </div>
        );
    }
}

export default RefreshedComponent;