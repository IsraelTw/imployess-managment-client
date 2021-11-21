import { useState, useEffect } from 'react';
import EmployessTable from './EmployessTable';
import AddEmployee from './AddEmployee';

const AllEmployees = () => {
    const [state, setState] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/employees')
            .then(res => res.json())
            .then(data => {
                console.log('data is ', data);
                setState(data);
            });
    }, []);
    return (
        <div>
            <AddEmployee />

            <EmployessTable EmployeesList={state} />
        </div>
    );
}
export default AllEmployees;