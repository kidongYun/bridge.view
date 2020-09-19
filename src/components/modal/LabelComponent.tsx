import React from 'react'
import Form from 'react-bootstrap/Form'

interface LabelComponentProps {
    id?: string;
    label: string;
}

const LabelComponent = ({ id, label }: LabelComponentProps) => {
    let view =
    <Form.Group>
        <Form.Label>{label}</Form.Label>
    </Form.Group>

    return view;
}

export default LabelComponent;