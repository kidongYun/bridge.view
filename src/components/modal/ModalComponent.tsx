import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import { TextProps } from '../props'
import { ButtonProps } from '../props'

import LabelComponent from './LabelComponent';
import TextComponent from './TextComponent';
import TextareaComponent from './TextareaComponent'
import SelectComponent, { OptionProps } from './SelectComponent';
import { placeholder } from '@babel/types';

interface FormProps {
    type: string
    id?: string
    placeholder?: string
    value?: string
    rows?: string
    options: OptionProps[]
}

interface ModalComponentProps {
    title: TextProps
    forms?: FormProps[]
    buttons?: ButtonProps[]
}

const ModalComponent = ({
    title, forms, buttons
}: ModalComponentProps) => {

    let view = 
    <Modal show={true}>
        <Modal.Header>
            <Modal.Title>{title.text}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            {forms!.map((form) => {
                if(form.type === "LABEL") {
                    return <LabelComponent label="" />
                }
                
                if(form.type === "TEXT") {
                    return <TextComponent />
                }

                if(form.type === "TEXTAREA") {
                    return <TextareaComponent />
                }

                if(form.type === "SELECT") {
                    return <SelectComponent />
                }
            })}
        </Modal.Body>

        <Modal.Footer>
        </Modal.Footer>
    </Modal>;

    return view;
}

export default ModalComponent;