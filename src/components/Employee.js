import React from "react"; 

function Employee(props){
    return(
        <table className="table">
            <thead>
            <tr>
             <th scope="col">Photo</th>
             <th scope="col" onClick={props.sortName}>Name</th>
             <th scope="col">Phone Number</th>
             <th scope="col">Email</th>
            </tr>
            </thead>

            <tbody>
                {props.results.map(result => (
                    <tr key={result.login.uuid}>
                        <td><img src={result.picture.large} alt="Employee"></img></td>
                        <td>{result.name.first + " " + result.name.last}</td>
                        <td>{result.phone}</td>
                        <td>{result.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

export default Employee