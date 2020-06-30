import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import * as data from '../../../service/data'
import ModalType from '../../../model/ModalType';
import ObjCellType from '../../../model/ObjCellType';
import { plainToClass } from 'class-transformer'

interface RemoveObjModalProps {
    modal: ModalType
    onClose: () => void
}

const RemoveObjModal = ({ modal, onClose }: RemoveObjModalProps) => {

    const onExecute = () => {
        console.log(modal.cell);

        data.deleteObj(modal.cell).then((response) => {
            modal.setCellList(plainToClass(ObjCellType, response.data));
        })

        onClose()
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