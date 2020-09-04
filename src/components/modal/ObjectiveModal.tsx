import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import useModal from '../../hooks/useModal';
import useNoti from '../../hooks/useNoti';
import useData from '../../hooks/useData';
import useCell from '../../hooks/useCell';
import ObjectiveType from '../../model/ObjectiveType';

interface ObjectiveModalProps {
    obj: ObjectiveType,
    onExecute: (objPost: { 
        title: string, 
        description: string, 
        deadline: string, 
        priority: number, 
        status: number, 
        date: boolean 
    }) => void 
}

const ObjectiveModal = ({ obj, onExecute } : ObjectiveModalProps) => {
    const { onHideModal } = useModal();


    let objPost = {
        title: "title",
        description: "description",
        deadline: "deadline",
        priority: 0,
        status: 0,
        date: true
    }

    // const onExecute = () => {
    //     data.postObj(objPost).then((response) => {
    //         onSetObjectiveList(utility.parse(response.data));
            
    //         onHideModal();
    //         onShowNoti("success", "It's from Add Modal");
    //         setTimeout(onHideNoti, 2300);
    //     })
    // }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;

        console.log(value);

        if(id === 'title') {
            objPost.title = value;
        }

        if(id === 'description') {
            objPost.description = value;
        }

        if(id === 'deadline') {
            objPost.deadline = value;
        }

        if(id === 'priority') {
            objPost.priority = Number(value);
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
                        <Form.Row>
                            <Form.Control 
                                id="deadline" 
                                placeholder="20200530" 
                                defaultValue={obj.deadline} 
                                onChange={onChange} 
                            />
                        </Form.Row>
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onHideModal}>Close</Button>
                <Button variant="primary" onClick={() => { onExecute(objPost); }}>Add</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ObjectiveModal;