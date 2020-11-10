import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import { HandleComponentProps } from '../props'

import LabelComponent from '../independence/LabelComponent';
import TextComponent from '../independence/TextComponent';
import TextareaComponent from '../independence/TextareaComponent'
import SelectComponent from '../independence/SelectComponent';

const PopupHandleComponent = ({
    title, forms, buttons
}: HandleComponentProps) => {

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

            // if(form.type === "SELECT") {
            //     return <SelectComponent 
            //         value={form.value}
            //         options={form.options}
            //         onChange={form.onChange}
            //     />
            // }
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

export default PopupHandleComponent;