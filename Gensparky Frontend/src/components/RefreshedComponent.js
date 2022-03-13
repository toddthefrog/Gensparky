
import React, { Component } from 'react';

class RefreshedComponent extends Component {

    presentTime() {
        let currentdate = new Date();
        return currentdate.toDateString() + " @ " + currentdate.toLocaleTimeString()
    }

    render() {
        return (
            <div>
                <h5 className="">{this.presentTime()}</h5>
            </div>
        );
    }
}

export default RefreshedComponent;