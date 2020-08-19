import React, { Component } from "react";
import EmployeeTable from "./EmployeeTable";
import EmployeeSearch from "./EmployeeSearch";
import employees from "./employees.json";

class Directory extends Component {

    state = {
        employees,
        search: "",
        searchResults: employees
    };
  
    handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
  
    const searchResults = this.state.employees.filter(employee => value === employee.firstName)
    // debugger
    this.setState({search: value, searchResults: searchResults});
  };

    render() {

        return (
            <div>
                <h1 className="text-center mt-5">
                    Employee Directory
                </h1>
                <div className="container">
                    <div className="row">
                            <EmployeeSearch handleInputChange={this.handleInputChange} search={this.state.search}/>

                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <EmployeeTable employees={this.state.searchResults}/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Directory;