import React from 'react'
import Form from 'react-bootstrap/Form'

import Component from './Component'

interface LabelProps extends Component {
    label: string
}

const LabelComponent = ({ label }: LabelProps) => {
    let view =
    <Form.Group>
        <Form.Label>{label}</Form.Label>
    </Form.Group>

    return view;
}

export default LabelComponent;