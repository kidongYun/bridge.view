import React from 'react'
import styled from 'styled-components'

/* Component */
import Navigation from '../../components/navigation/Navigation';

interface HeaderProps {
    setStage: (name: string) => void
}

const Header = ({setStage}: HeaderProps) => {
    return (
        <Container>
            <Navigation setStage={setStage} />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    hegiht: 100%;
`;

export default Header