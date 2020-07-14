import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import * as data from '../../../service/Data'
import * as utility from '../../../service/Utility'

import ModalType from '../../../model/ModalType';
import NotiType from '../../../model/NotiType';

import useModal from '../../../hooks/useModal';

const RemoveObjModal = () => {

    const { onUpdateVisible } = useModal();

    const onExecute = () => {
        // data.deleteObj(modal.cell.id).then((response) => {
        //     modal.setCellList(utility.parse(response.data));
        //     showNoti(new NotiType("success", "It's removed..."))
        //     onClose()
        // })

        onUpdateVisible(false);
    }


    return(
        <Modal show={true}>
            <Modal.Header closeButton onClick={() => onUpdateVisible(false)}>
                <Modal.Title>Warning</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Label>Do you want to remove this surely?</Form.Label>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => onUpdateVisible(false)}>Close</Button>
                <Button variant="primary" onClick={onExecute}>Remove</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default RemoveObjModal;