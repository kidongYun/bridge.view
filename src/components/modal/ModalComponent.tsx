import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import { TextProps } from '../props'
import { ButtonProps } from '../props'

import InputComponent from '../modal/InputComponent'

interface ModalProps {
    title?: TextProps
}

const ModalComponent = ({
    title
}: ModalProps) => {

    let input = <InputComponent/>

    let view = 
    <Modal show={true}>
        <Modal.Header>
            <Modal.Title>New Objective</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form>
                {input}
            </Form>
        </Modal.Body>

        <Modal.Footer>
        </Modal.Footer>
    </Modal>;

    return view;
}

export default ModalComponent;