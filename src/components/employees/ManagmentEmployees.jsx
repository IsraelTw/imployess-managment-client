import { useState, useEffect } from 'react';
import EmployessTable from './EmployessTable';
import AddEmployee from './AddEmployee';

const ManagmentEmployees = () => {
    const [state, setState] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/managmentEmployees')
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