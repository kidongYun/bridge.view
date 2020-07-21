import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import * as data from '../../service/Data'
import * as utility from '../../service/Utility'

import ModalType from '../../model/ModalType';
import NotiType from '../../model/NotiType';

import useModal from '../../hooks/useModal';
import useNoti from '../../hooks/useNoti';

const RemoveObjModal = () => {
    const { onHideModal } = useModal();
    const { onShowNoti, onHideNoti } = useNoti();

    const onExecute = () => {
        // data.deleteObj(modal.cell.id).then((response) => {
        //     modal.setCellList(utility.parse(response.data));
        //     showNoti(new NotiType("success", "It's removed..."))
        //     onClose()
        // })

        onHideModal();
        onShowNoti("success", "It's from Remove Modal");
        setTimeout(onHideNoti, 2300);
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

export default RemoveObjModal;