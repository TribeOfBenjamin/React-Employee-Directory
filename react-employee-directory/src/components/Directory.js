import React, { Component } from "react";
import EmployeeInfo from "./EmployeeInfo.js";
import EmployeeSearch from "./EmployeeSearch";
import employees from "./employees.json";

class Directory extends Component {

    state = {
        employees
    };



    render() {

        return (
            <div>
                <h1>
                    This is a test
                </h1>
                {this.state.employees.map(employee => (
                    <EmployeeInfo
                        firstName={employee.firstName}
                        lastName={employee.lastName}
                        email={employee.email}
                        phoneNumber={employee.phoneNumber}
                        officeNumber={employee.officeNumber}
                    />

                ))}
                    <EmployeeSearch />
            </div>
        );
    }
}

export default Directory;