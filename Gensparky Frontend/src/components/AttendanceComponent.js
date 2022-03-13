import React from "react";
import { Button } from 'react-bootstrap';

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
        if (checkin.getHours() >= 9 && checkin.getHours() < 10) {
            checkedInToday = true;
            late = true;
        }
        if (year && month && day && checkedInToday && !late) {
            console.log(year, month, day, checkedInToday)
            // return <Badge  bg="success">present</Badge>
            return <Button variant="success" disabled>
                Present
            </Button>
        } else if (year && month && day && checkedInToday && late) {
            console.log(year, month, day, checkedInToday)
            // return <Badge bg="warning">late</Badge>
            return < Button variant="warning" disabled >
                Late
            </Button >
        } else {
            // console.log(year, month, day, checkedInToday)
            // return <Badge bg="danger">absent</Badge>
            return <Button variant="danger" disabled>
                Absent
            </Button>
        }
    }

    return (
        <div>
            {isCheckinToday(props.timeInMilliseconds)}
        </div>
    );
}