import { useState, useEffect } from 'react';
import AddEmployee from './AddEmployee';
import EmployessTable from './EmployessTable';

const OsEmployees = () => {
    const [state, setState] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/osEmployees')
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