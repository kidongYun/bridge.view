import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import { TextProps } from '../props'
import { ButtonProps } from '../props'

import TextComponent from './TextComponent'
import LabelComponent from './LabelComponent';
import TextareaComponent from './TextareaComponent';
import SelectComponent from './SelectComponent';

interface ModalComponentProps {
    title?: TextProps
}

const ModalComponent = ({
    title
}: ModalComponentProps) => {

    let label = <LabelComponent label="It's label Component" />
    let text = <TextComponent/>
    let textarea = <TextareaComponent rows="20" />
    let select = <SelectComponent options={[
        { title: "SELECT OPTION TITLE1", value: "1" },
        { title: "SELECT OPTION TITLE2", value: "2" }
    ]}/>

    let view = 
    <Modal show={true}>
        <Modal.Header>
            <Modal.Title>New Objective</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form>
                {label}
                {text}
                {textarea}
                {select}
            </Form>
        </Modal.Body>

        <Modal.Footer>
        </Modal.Footer>
    </Modal>;

    return view;
}

export default ModalComponent;