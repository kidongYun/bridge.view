import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import * as data from '../../../service/Data'
import * as utility from '../../../service/Utility'

import ModalType from '../../../model/ModalType';
import NotiType from '../../../model/NotiType';

interface RemoveObjModalProps {
    modal: ModalType
    onClose: () => void
    showNoti: (noti: NotiType) => void
}

const RemoveObjModal = ({ modal, onClose, showNoti }: RemoveObjModalProps) => {

    const onExecute = () => {
        data.deleteObj(modal.cell.id).then((response) => {
            modal.setCellList(utility.parse(response.data));
            showNoti(new NotiType("success", "It's removed..."))
            onClose()
        })
    }


    return(
        <Modal show={modal.isShow}>
            <Modal.Header closeButton onClick={onClose}>
                <Modal.Title>Warning</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Label>Do you want to remove this surely?</Form.Label>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Close</Button>
                <Button variant="primary" onClick={onExecute}>Remove</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default RemoveObjModal;