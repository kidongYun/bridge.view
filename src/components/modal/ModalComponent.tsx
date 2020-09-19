import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import { TextProps } from '../props'
import { ButtonProps } from '../props'

import FormComponent from './FormComponent';

export interface ContentProps {
    type: string
}

interface ModalComponentProps {
    title?: TextProps
    contents?: ContentProps[]
}

const ModalComponent = ({
    title,
}: ModalComponentProps) => {

    let contents = <FormComponent forms={[
        { type: "LABEL", value: "It's label Component" },
        { type: "TEXT" },
        { type: "TEXTAREA", rows:"20" },
        { type: "SELECT", options: [{ title: "SELECT OPTION TITLE1", value: "1" }, { title: "SELECT OPTION TITLE2", value: "2" }] }
    ]}/>

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