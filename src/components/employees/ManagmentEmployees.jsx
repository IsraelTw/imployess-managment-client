import { useState, useEffect } from 'react';
import EmployessTable from './EmployessTable';
import AddEmployee from './AddEmployee';
import { domain } from '../config';

const ManagmentEmployees = () => {
    const [state, setState] = useState([]);
    useEffect(() => {
        fetch(`${domain}/managmentEmployees`)
            .then(res => res.json())
            .then(data => setState(data));
    }, []);

    return (
        <div>
            <AddEmployee/>
            <EmployessTable EmployeesList={state} />
        </div>
    );
}
export default ManagmentEmployees;