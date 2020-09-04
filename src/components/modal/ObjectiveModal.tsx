import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import * as data from '../../service/Data'
import * as utility from '../../service/Utility'

import Col from 'react-bootstrap/Col'

import useModal from '../../hooks/useModal';
import useNoti from '../../hooks/useNoti';
import useData from '../../hooks/useData';
import useCell from '../../hooks/useCell';
import ObjectiveType from '../../model/ObjectiveType';

const ObjectiveModal = (before: { obj: ObjectiveType }) => {
    const { onHideModal } = useModal();
    const { onShowNoti, onHideNoti } = useNoti();
    const { onSetObjectiveList } = useData();

    let objPost: {
        title: string
        description: string
        deadline: string
        priority: number
        status: number
        date: boolean
    }

    const onExecute = () => {

        objPost.status = 0;
        objPost.date = true;

        console.log(objPost);

        data.postObj(objPost).then((response) => {
            onSetObjectiveList(utility.parse(response.data));
            
            onHideModal();
            onShowNoti("success", "It's from Add Modal");
            setTimeout(onHideNoti, 2300);
        })
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;

        if(id === 'title') {
            objPost.title = value;
        }

        if(id === 'description') {
            objPost.description = value;
        }

        if(id === 'priority') {
            objPost.priority = Number(value);
        }

        if(id === 'deadline') {
            objPost.deadline = value;
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
                            value={before.obj.title} 
                            onChange={onChange} 
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            id="description" 
                            placeholder="DESCRIPTION" 
                            as="textarea" 
                            rows="10" 
                            value={before.obj.description} 
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
                                value={before.obj.deadline} 
                                onChange={onChange} 
                            />
                        </Form.Row>
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onHideModal}>Close</Button>
                <Button variant="primary" onClick={onExecute}>Add</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ObjectiveModal;