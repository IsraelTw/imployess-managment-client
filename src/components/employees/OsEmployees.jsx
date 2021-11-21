import { useState, useEffect } from 'react';
import AddEmployee from './AddEmployee';
import EmployessTable from './EmployessTable';
import { domain } from '../config';

const OsEmployees = () => {
    const [state, setState] = useState([]);
    useEffect(() => {
        fetch(`${domain}/osEmployees`)
            .then(res => res.json())
            .then(data => setState(data));
    }, []);

    return (
        <div>
            <AddEmployee />
            <EmployessTable EmployeesList={state} />
        </div>
    );
}
export default OsEmployees;