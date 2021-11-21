import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';
import './EmployeesTable.css';

const EmployessTable = ({ EmployeesList }) => {
    const [roles, setRoles] = useState([]);
    const [open, setOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        fetch('http://localhost:3001/roles')
            .then(res => res.json())
            .then(data => setRoles(data));
    }, [])

    const handelSubmit = (e) => {
        console.log('current user ', currentUser);
        e.preventDefault();
        fetch('http://localhost:3001/updateEmployee', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(currentUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('update user is ', data);
            });
        setOpen(false);
    }

    const deleteEmployee = (idNumber) => {
        fetch('http://localhost:3001/deleteEmployee', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idNumber })
        })
            .then(res => res.json())
            .then(data => {
                console.log('employee deleted ', data);
            });
    }

    return (
        <div>
            <table id="employees">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>ID Number</th>
                        <th>Role</th>
                        <th>Manager Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {EmployeesList.map(user => {
                    if (user.isDelete) return;
                    return (
                        <tbody key={user.idNumber}>
                            <tr >
                                <td>{user.name}</td>
                                <td>{user.idNumber}</td>
                                <td>{user.EmployeesRole.name}</td>
                                <td>{user.manager}</td>
                                <td>
                                    <Button onClick={() => { setCurrentUser(user); setOpen(true) }}>Edit</Button>
                                    <Button onClick={() => deleteEmployee(user.idNumber)}>Delete</Button>
                                </td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
            {open &&
                <Modal
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                >
                    <Modal.Content>
                        <Modal.Description>
                            <Form onSubmit={handelSubmit}>
                                <Form.Group widths='equal'>
                                    <Form.Input fluid label='Name' placeholder='Name' defaultValue={currentUser.name}
                                        onChange={e => setCurrentUser({ ...currentUser, name: e.target.value })} />
                                    <Form.Input fluid label='ID Number' placeholder='ID Number' value={currentUser.idNumber} />
                                    <Form.Input fluid label='Manager Name' placeholder='Manager Name' defaultValue={currentUser.manager}
                                        onChange={e => setCurrentUser({ ...currentUser, manager: e.target.value })} />
                                    <Form.Field label='Role' control='select'
                                        onChange={e => setCurrentUser({ ...currentUser, EmployeesRoleId: e.target.value })}>
                                        <option value={currentUser.EmployeesRole.name}>{currentUser.EmployeesRole.name}</option>
                                        {roles.map(role => {
                                            if (role.name === currentUser.EmployeesRole.name) return;
                                            return (
                                                <option value={role.id} key={role.id}>{role.name}</option>
                                            )
                                        })}
                                    </Form.Field>
                                </Form.Group>
                                <Form.Button>Submit</Form.Button>
                            </Form>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            }
        </div>
    )
}
export default EmployessTable