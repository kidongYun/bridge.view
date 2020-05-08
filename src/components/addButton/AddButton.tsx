import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';

interface _AddButton {
    onClick: () => void;
}

const AddButton = ({onClick}: _AddButton) => {
    return (
        <Container>
            <Button onClick={onClick}>Add</Button>
        </Container>
    )
}

const Container = styled.div`   
    position: absolute;
    right: 2%;
    bottom: 3%;
`;

export default AddButton;