import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';

import useModal from '../../hooks/useModal';

const ObjectiveAddButton = () => {
    const { onShowModal } = useModal();

    const onClick = () => {
        onShowModal("ADD");
    }

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

export default ObjectiveAddButton;