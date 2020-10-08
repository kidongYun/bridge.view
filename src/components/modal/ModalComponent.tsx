import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import { TextProps } from '../props'
import { ButtonProps } from '../props'

import LabelComponent from '../form/LabelComponent';
import TextComponent from '../form/TextComponent';
import TextareaComponent from '../form/TextareaComponent'
import SelectComponent, { OptionProps } from '../form/SelectComponent';

interface FormProps {
    type: string
    placeholder?: string
    value?: string
    rows?: string
    options?: OptionProps[]
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export interface ModalComponentProps {
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
                    value={form.value}
                    placeholder={form.placeholder} 
                    onChange={form.onChange} 
                />
            }

            if(form.type === "TEXTAREA") {
                return <TextareaComponent
                    value={form.value}
                    placeholder={form.placeholder} 
                    rows={form.rows}
                    onChange={form.onChange}
                />
            }

            if(form.type === "SELECT") {
                return <SelectComponent 
                    value={form.value}
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
        })}
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