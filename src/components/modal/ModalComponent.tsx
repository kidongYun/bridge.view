import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import { TextProps } from '../props'
import { ButtonProps } from '../props'

import LabelComponent from './LabelComponent';
import TextComponent from './TextComponent';
import TextareaComponent from './TextareaComponent'
import SelectComponent, { OptionProps } from './SelectComponent';

interface FormProps {
    type: string
    placeholder?: string
    value?: string
    rows?: string
    selected?: string
    options?: OptionProps[]
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

interface ModalComponentProps {
    title: TextProps
    forms?: FormProps[]
    buttons?: ButtonProps[]
}

const ModalComponent = ({
    title, forms, buttons
}: ModalComponentProps) => {

    let formView = <Form></Form>
    if(forms !== undefined) {
        formView =
        <Form>
        {forms!.map((form) => {
            if(form.type === "LABEL") {
                return <LabelComponent 
                    label={form.value!} 
                />
            }
        
            if(form.type === "TEXT") {
                return <TextComponent 
                    placeholder={form.placeholder} 
                    onChange={form.onChange} 
                />
            }

            if(form.type === "TEXTAREA") {
                return <TextareaComponent 
                    placeholder={form.placeholder} 
                    rows={form.rows}
                    onChange={form.onChange}
                />
            }

            if(form.type === "SELECT") {
                return <SelectComponent 
                    selected={form.selected}
                    options={form.options}
                    onChange={form.onChange}
                />
            }
        })}
        </Form>
    }

    let buttonView = <></>;
    if(buttons !== undefined) {
        buttonView = 
        <>
        {buttons.map((button) => {
            return <Button variant={button.type} onClick={() => { button.onClick(); }}>{button.text}</Button>
        })};
        </>
    }

    let view = 
    <Modal show={true}>
        <Modal.Header>
            <Modal.Title>{title.text}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            {formView}
        </Modal.Body>

        <Modal.Footer>
            {buttonView}
        </Modal.Footer>
    </Modal>

    return view;
}

export default ModalComponent;