import React from 'react'
import styled from 'styled-components'

/* Component */
import Navigation from '../components/navigation/Navigation';

const Header = () => {
    return (
        <Container>
            <Navigation/>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    hegiht: 100%;
`;

export default Header