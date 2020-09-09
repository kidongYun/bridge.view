import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import * as data from '../../service/Data'
import * as utility from '../../service/Utility'

import useModal from '../../hooks/useModal';
import useNoti from '../../hooks/useNoti';
import useData from '../../hooks/useData';
import useSubject from '../../hooks/useSubject';

const RemoveModal = () => {
    const { onHideModal } = useModal();
    const { onShowNoti, onHideNoti } = useNoti();
    const { deletedSubject } = useSubject();
    const { onSetObjectiveList } = useData();

    const onExecute = () => {

        const objDelete = {
            id: deletedSubject.id,
            date: true
        }
        
        data.deleteObj(objDelete).then((response) => {
            onSetObjectiveList(utility.parse(response.data));

            onHideModal();
            onShowNoti("success", "It's from Remove Modal");
            setTimeout(onHideNoti, 2300);
        })
    }


    return(
        <Modal show={true}>
            <Modal.Header closeButton onClick={onHideModal}>
                <Modal.Title>Warning</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Label>Do you want to remove this surely?</Form.Label>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onHideModal}>Close</Button>
                <Button variant="primary" onClick={onExecute}>Remove</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default RemoveModal;