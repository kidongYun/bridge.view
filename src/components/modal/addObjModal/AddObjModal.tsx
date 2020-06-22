import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';

interface AddObjModalProps {
    visible: boolean
    onClose: () => void
    // onExecute: (id: number, title: string, description: string, priority: number, deadline: Date) => void
}

const AddObjModal = ({visible, onClose}: AddObjModalProps) => {

    let title: string
    let description: string
    let priority: number
    let deadline: string

    const saveInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
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

        console.log(title + ", " + description + ", " + priority + ", " + deadline);
    }

    return (
        <Modal show={visible}>
            <Modal.Header closeButton onClick={onClose}>
                <Modal.Title>New Objective</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Control id="title" placeholder="TITLE" onChange={saveInfo} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control id="description" placeholder="DESCRIPTION" as="textarea" rows="10" onChange={saveInfo} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Priority</Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control id="priority" as="select" defaultValue="10" onChange={saveInfo}>
                            <option value="10">HIGH</option>
                            <option value="5">MID</option>
                            <option value="1">LOW</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Deadline</Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control id="deadline" placeholder="ex)2020.07.30" onChange={saveInfo} />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Close</Button>
                {/* <Button variant="primary" onClick={() => addClick(1, title, description, priority, new Date(deadline))}>Add</Button> */}
            </Modal.Footer>
        </Modal>
    )
}

export default AddObjModal;