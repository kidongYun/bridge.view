import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import { TextProps } from '../props'
import { ButtonProps } from '../props'

import FormComponent, { FormComponentProps } from './FormComponent';

interface ModalComponentProps {
    title?: TextProps
    contents?: FormComponentProps
    buttons?: ButtonProps[]
}

const ModalComponent = ({
    title, contents, buttons
}: ModalComponentProps) => {

    let view = 
    <Modal show={true}>
        <Modal.Header>
            <Modal.Title>New Objective</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form>
                {contents}
            </Form>
        </Modal.Body>

        <Modal.Footer>
        </Modal.Footer>
    </Modal>;

    return view;
}

export default ModalComponent;