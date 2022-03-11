import React from "react";
import { Badge } from 'react-bootstrap';

export default function DeleteUserComponent(props) {


    function isCheckinToday(timeInMilliseconds) {
        let checkin = new Date(timeInMilliseconds);
        let now = new Date();
        let year = false;
        let month = false;
        let day = false;
        let checkedInToday = false;
        let late = false;
        if (checkin.getFullYear() === now.getFullYear()) {
            year = true;
        }
        if (checkin.getMonth() === now.getMonth()) {
            month = true;
        }
        if (checkin.getDay() === now.getDay()) {
            day = true;
        }
        if (checkin.getHours() < 9) {
            checkedInToday = true;
        }
        if (checkin.getHours() >= 9 && checkin.getHours() <= 10) {
            checkedInToday = true;
            late = true;
        }
        if (year && month && day && checkedInToday && !late) {
            console.log(year, month, day, checkedInToday)
            return <Badge  bg="success">present</Badge>
        } else if (year && month && day && checkedInToday && late) {
            console.log(year, month, day, checkedInToday)
            return <Badge  bg="warning">late</Badge>
        } else {
            console.log(year, month, day, checkedInToday)
            return <Badge  bg="danger">absent</Badge>
        }
    }

    return (
        <div>
            <h4>{isCheckinToday(props.timeInMilliseconds)}</h4>
        </div>
    );
}