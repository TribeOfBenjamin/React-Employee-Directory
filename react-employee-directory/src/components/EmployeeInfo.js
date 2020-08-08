import React from "react";

function EmployeeInfo(props) {
    return (
        <div>
            <h3> {props.firstName} {props.lastName} </h3>
            <ul>
                <li>
                    <strong>Email:</strong> {props.email}
                </li>
                <li>
                    <strong>Phone:</strong> {props.phoneNumber}
                </li>
                <li>
                    <strong>Office Number:</strong> {props.officeNumber}
                </li>
            </ul>
        </div>
    );
}

export default EmployeeInfo;