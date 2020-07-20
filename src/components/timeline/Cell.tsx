import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

interface CellProps {
    borderRadius: string
    color: string
    height: string
    header: string
    content: string[]
    status: number
    onClick?: () => void
}

const Cell = ({ borderRadius, color, height, header, content, status, onClick }: CellProps) => {

    let headerFrame = <></>
    if(header !== undefined) {
        headerFrame = <HeaderFrame>{header}</HeaderFrame>
    }

    let buttonFrame = <></>
    if(onClick !== undefined) {
        buttonFrame = <ButtonFrame><Button variant="outline-danger" onClick={onClick}>Remove</Button></ButtonFrame>
    }

    let view =
    <Container height={height}>
        <Frame color={color} borderRadius={borderRadius}>
            {headerFrame}
            {buttonFrame}
        </Frame>
    </Container>

    return view;
}

const Container = styled.div<{ height: string }>`
    width: 100%;
    height: ${props => props.height};
    padding: 5px;
`;

const Frame = styled.div<{ color: string, borderRadius: string }>`
    width: 100%;
    height: 100%;
    background-color: ${props => props.color };
    border-radius: ${props => props.borderRadius };
    padding-right: 10px;

    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const HeaderFrame = styled.div`
    width: 400%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div``;

const status = styled.div``;

const ButtonFrame = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export default Cell;