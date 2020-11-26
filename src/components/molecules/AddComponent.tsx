import React from 'react'
import styled from 'styled-components'
import { RootContainer } from '../RootContainer'
import LabelComponent from '../atoms/LabelComponent'

interface AddProps {
    onClick: () => void
}

const AddComponent: React.FC<AddProps> = ({
    onClick
}) => {

    let view =
    <Container onClick={onClick}>
        <LabelComponent 
            label="+" 
            size="20pt" 
            color="#ffffff" 
            weight="bold" 
        />
    </Container>

    return view;
}

const Container = styled(RootContainer)``;

export default AddComponent;