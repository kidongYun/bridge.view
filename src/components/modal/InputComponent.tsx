import React from 'react'
import Form from 'react-bootstrap/Form'

interface InputProps {

}

const InputComponent = () => {
    return <Form.Group>
    <Form.Control 
        id="title" 
        placeholder="TITLE" 
        defaultValue={""} 
        onChange={() => {}} 
    />
</Form.Group>
}

export default InputComponent;