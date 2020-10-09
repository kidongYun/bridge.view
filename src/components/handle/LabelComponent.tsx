import React from 'react'
import Form from 'react-bootstrap/Form'

interface LabelComponentProps {
    label: string
}

const LabelComponent = ({ label }: LabelComponentProps) => {
    let view =
    <Form.Group>
        <Form.Label>{label}</Form.Label>
    </Form.Group>

    return view;
}

export default LabelComponent;