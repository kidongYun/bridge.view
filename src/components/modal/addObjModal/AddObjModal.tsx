import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';

interface AddObjModalProps {
    isShow: boolean
    onClose: () => void
}

const AddObjModal = ({isShow, onClose}: AddObjModalProps) => {

    let title: string
    let description: string
    let priority: number
    let deadline: string

    const onExecute = () => {
        console.log(title + ", " + description + ", " + priority + ", " + deadline);
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;

        if(id === 'title') {
            title = value;
        }

        if(id === 'description') {
            description = value;
        }

        if(id === 'priority') {
            priority = Number(value);
        }

        if(id === 'deadline') {
            deadline = value;
        }
    }

    return (
        <Modal show={isShow}>
            <Modal.Header closeButton onClick={onClose}>
                <Modal.Title>New Objective</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Control id="title" placeholder="TITLE" onChange={onChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control id="description" placeholder="DESCRIPTION" as="textarea" rows="10" onChange={onChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Priority</Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control id="priority" as="select" defaultValue="10" onChange={onChange}>
                            <option value="10">HIGH</option>
                            <option value="5">MID</option>
                            <option value="1">LOW</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Deadline</Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control id="deadline" placeholder="ex)2020.07.30" onChange={onChange} />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Close</Button>
                <Button variant="primary" onClick={onExecute}>Add</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddObjModal;