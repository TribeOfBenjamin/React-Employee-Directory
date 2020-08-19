import React from "react";

  function EmployeeSearch(props) {

    return (
      <div className="row">
        <div className="col-6">
          <form className="m-5">
            <div className="form-group">
              <label htmlFor="search">Search:</label>
              <input
                onChange={props.handleInputChange}
                value={props.search}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search for an Employee"
                id="search"
              />
            </div>
          </form>
        </div>
        <div>
          {props.search}
        </div>

      </div>
    );
  }

export default EmployeeSearch;