import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import useModal from '../../hooks/useModal';
import ObjectiveType from '../../model/ObjectiveType';

import { ButtonProps } from '../props';

interface ObjectiveModalProps {
    obj: ObjectiveType,
    buttons: ButtonProps[]
}

const ObjectiveModal = ({ obj, buttons } : ObjectiveModalProps) => {
    const { onHideModal } = useModal();

    let objReq = {
        id: obj.id,
        title: obj.title,
        description: obj.description,
        dateTime: obj.dateTime,
        priority: 0,
        status: 0,
        date: true
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;

        console.log(value);

        if(id === 'title') {
            objReq.title = value;
        }

        if(id === 'description') {
            objReq.description = value;
        }

        if(id === 'deadline') {
            objReq.dateTime = value;
        }

        if(id === 'priority') {
            objReq.priority = Number(value);
        }
    }

    return (
        <Modal show={true}>
            <Modal.Header closeButton onClick={onHideModal}>
                <Modal.Title>New Objective</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Control 
                            id="title" 
                            placeholder="TITLE" 
                            defaultValue={obj.title} 
                            onChange={onChange} 
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            id="description"
                            placeholder="DESCRIPTION" 
                            as="textarea" 
                            rows="10" 
                            defaultValue={obj.description} 
                            onChange={onChange} 
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Priority</Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control as="select" defaultValue="10" onChange={onChange}>
                            <option value="10">HIGH</option>
                            <option value="5">MID</option>
                            <option value="1">LOW</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Deadline</Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Form.Row>
                            <Form.Control 
                                id="deadline" 
                                placeholder="20200530" 
                                defaultValue={obj.dateTime} 
                                onChange={onChange} 
                            />
                        </Form.Row>
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                {buttons.map((button) => {
                    return <Button variant={button.type} onClick={() => { button.onClick(objReq); }}>{button.text}</Button>
                })}
            </Modal.Footer>
        </Modal>
    )
}

export default ObjectiveModal;