import React, { Component } from "react"; 
import Employee from "./Employee"; 
import Search from "./Search"; 
import API from "../utils/API";


class EmployeeTable extends Component {

state = {
  search: "", 
  employees: [], 
  filteredEmployees: [], 
  sortOrder: ""
}; 

componentDidMount() {
  API.getUsers().then(res=> this.setState({
    employees: res.data.results,     
  },
  console.log(res)))
}; 

handleSearch = e => {
  e.preventDefault();
  const { employees, search } = this.state;

  const filteredEmployees = employees.filter(employee => employee.name.first.includes(search));

  this.setState({
      filteredEmployees
  });
}

handleInputChange = e => {
  const employees = this.state.employees;
  const search = e.target.value; 
  const filteredEmployees = employees.filter(employee => employee.name.first.indexOf(search));

  this.setState({
    filteredEmployees
  }); 
}

sortName = () => {
  const sortEmployees = this.state.filteredEmployees; 

  if (this.state.order === "ascending") {
    const sorted = sortEmployees.sort((a, b) => (a.name.first > b.name.first) ? 1: -1);
    console.log(sorted);

    this.setState({
      filteredEmployees: sorted,
      order: "descending"
    });
  }

  else {
    const sorted = sortEmployees.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1)
    console.log(sorted); 

    this.setState({
      filteredEmployees: sorted, 
      order: "ascending"
    });
  }
}; 

render() {
  return (
    <div>
      <Search 
        employee = {this.state.filteredEmployees}
        handleInputChange = {this.handleInputChange}
        handleSearch = {this.handleSearch}>
      </Search>
      <Employee 
        results = {this.state.employees}
        sortName = {this.sortName}>
      </Employee>
    </div>
  )
}}

export default EmployeeTable; 
