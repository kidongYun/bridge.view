import React from 'react'
import styled from 'styled-components'
import { CellModel } from '../Objective';

const Cell = ({id, title, description, priority, deadline}: CellModel) => {

    return (
        <Container>
            <Frame>{title}</Frame>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 70px;
    padding: 5px;
`;

const Frame = styled.div`
    width: 100%;
    height: 100%;
    background-color: #eeeeee;
    border-radius: 10px;
    padding-right: 10px;

    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export default Cell;