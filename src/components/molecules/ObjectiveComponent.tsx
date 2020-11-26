import React from 'react'
import styled from 'styled-components'
import { RootContainer } from '../RootContainer'
import LabelComponent from '../atoms/LabelComponent'

interface ObjectiveProps {
    title: string
    description: string
    deadline: string
    onClick: () => void
}

const ObjectiveComponent: React.FC<ObjectiveProps> = ({
    title,
    description,
    deadline,
    onClick
}) => {

    let view =
    <Container>
        <LabelComponent label={title} size="15pt" />
        <LabelComponent label={description} />
        <LabelComponent label={deadline} />
    </Container>

    return view;
}

const Container = styled(RootContainer)`
    height: 250px;
    &:active { height: 260px; }
    transition: all ease 0.2s 0s;

    background-color: #eeeeee;
    &:hover { background-color: #e4e4e4; }

    border-radius: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    
    flex-direction: column;
`;

export default ObjectiveComponent;