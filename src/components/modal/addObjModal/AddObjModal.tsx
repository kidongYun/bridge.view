import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import * as data from '../../../service/Data'
import * as utility from '../../../service/Utility'

import ObjCellType from '../../../model/ObjectiveType'
import Col from 'react-bootstrap/Col'
import NotiType from '../../../model/NotiType';

import useModal from '../../../hooks/useModal';
import useNoti from '../../../hooks/useNoti';

const AddObjModal = () => {

    const { onUpdateVisible } = useModal();
    const { onShow, onHide } = useNoti();

    let title: string
    let description: string
    let priority: number
    let deadline_year: string
    let deadline_month: string
    let deadline_day: string

    const onExecute = () => {
        const deadline = deadline_year + "." + deadline_month + "." + deadline_day
        const obj: ObjCellType = new ObjCellType(100, "objective", title, description, priority, deadline)

        data.putObj(obj).then((response) => {
            onShow("success", "It's from Add Modal");
            setTimeout(onHide, 2300);
        })

        onUpdateVisible(false);
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

        if(id === 'deadline_year') {
            deadline_year = value;
        }

        if(id === 'deadline_month') {
            deadline_month = value;
        }

        if(id === 'deadline_day') {
            deadline_day = value;
        }
    }

    return (
        <Modal show={true}>
            <Modal.Header closeButton onClick={() => onUpdateVisible(false)}>
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
                        <Form.Row>
                            <Col>
                                <Form.Control id="deadline_year" placeholder="2020" onChange={onChange} />
                            </Col>
                            <Col>
                                <Form.Control id="deadline_month" placeholder="07" onChange={onChange} />
                            </Col>
                            <Col>
                                <Form.Control id="deadline_day" placeholder="30" onChange={onChange} />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => onUpdateVisible(false)}>Close</Button>
                <Button variant="primary" onClick={onExecute}>Add</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddObjModal;