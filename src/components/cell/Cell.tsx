import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

interface CellProps {
    borderRadius: string
    color?: string
    height: string
    header: TextProps
    content: TextProps[]
    status: number
    onClick?: () => void
    onClickBtn1?: () => void
}

interface TextProps {
    text : string
    verticalAlign : string
    horizontalAlign : string 
}

const Cell = ({ borderRadius, color, height, header, content, status, onClick, onClickBtn1 }: CellProps) => {

    let headerFrame = <></>
    if(header !== undefined) {
        headerFrame = 
        <HeaderFrame 
            verticalAlign={header.verticalAlign} 
            horizontalAlign={header.horizontalAlign}>
                {header.text}
        </HeaderFrame>
    }

    let buttonFrame = <></>
    if(onClickBtn1 !== undefined) {
        buttonFrame = <ButtonFrame><Button variant="outline-danger" onClick={onClickBtn1}>Remove</Button></ButtonFrame>
    }

    let view =
    <Container height={height} onClick={onClick}>
        <Frame color={color!} borderRadius={borderRadius}>
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

const HeaderFrame = styled.div<{ verticalAlign: string, horizontalAlign: string }>`
    width: 400%;
    height: 100%;

    display: flex;
    justify-content: ${props => props.horizontalAlign};
    align-items: ${props => props.verticalAlign};
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