import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import { _Cell } from '../timeline/Timeline'

const Cell = ({id, title, description, priority, deadline}: _Cell) => {

    return (
        <Container>
            <Frame>
                <TitleFrame>
                    {title}
                </TitleFrame>
                <DelFrame>
                    <Button variant="outline-danger" onClick={() => { }}>Delete</Button>
                </DelFrame>
            </Frame>
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

const TitleFrame = styled.div`
    width: 400%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const DelFrame = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export default Cell;