import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';
import { domain } from '../config';

const AddEmployee = () => {
    const [user, setUser] = useState({});
    const [roles, setRoles] = useState([]);
    const [open, setOpen] = useState(false)

    useEffect(() => {
        fetch(`${domain}/roles`)
            .then(res => res.json())
            .then(data => setRoles(data));
    }, [])


    const handelSubmit = (e) => {
        console.log(user);
        e.preventDefault();
        fetch(`${domain}/addEmployee`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('data is ', data);
            });
        setOpen(false);
    }

    return (
        <div>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button>Add Employee</Button>}
            >
                <Modal.Header>Select a Role</Modal.Header>
                <Modal.Content image>
                    <Modal.Description>
                        <Form onSubmit={handelSubmit}>
                            <Form.Group widths='equal'>
                                <Form.Input fluid label='Name' placeholder='Name'
                                    onChange={e => setUser({ ...user, name: e.target.value })} required />
                                <Form.Input fluid label='ID Number' placeholder='ID Number'
                                    minLength="8" maxLength="9"
                                    onChange={e => setUser({ ...user, idNumber: e.target.value })} required />
                                <Form.Input fluid label='Manager Name' placeholder='Manager Name'
                                    onChange={e => setUser({ ...user, manager: e.target.value })} />
                                <Form.Field label='Role' control='select'
                                    onChange={e => setUser({ ...user, EmployeesRoleId: e.target.value })} required>
                                    {roles.map(role => {
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
        </div>
    );
}
export default AddEmployee;