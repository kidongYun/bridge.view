import React from 'react'
import styled from 'styled-components'

/* Component */
import Navigation from '../../components/navigation/Navigation';
import ModalType from '../../model/ModalType';

interface HeaderProps {
    modal: ModalType
    setModal: (modal: ModalType) => void
    setStage: (name: string) => void
}

const Header = ({modal, setModal, setStage}: HeaderProps) => {
    return (
        <Container>
            <Navigation modal={modal} setModal={setModal} setStage={setStage} />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    hegiht: 100%;
`;

export default Header