import { useState, useEffect } from 'react';
import EmployessTable from './EmployessTable';
import AddEmployee from './AddEmployee';
import { domain } from '../config';

const AllEmployees = () => {
    const [state, setState] = useState([]);
    useEffect(() => {
        fetch(`${domain}/employees`)
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