import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

interface CellProps {
    borderRadius?: string
    backgroundColor?: string
    height?: string
    header?: TextProps
    contents?: TextProps[]
    status?: number
    buttons?: ButtonProps[]
    onClick?: () => void
}

export interface TextProps {
    text: string
    size?: string
    color?: string
    borderRadius?: string
    backgroundColor?: string
    verticalAlign: string
    horizontalAlign: string 
}

export interface ButtonProps {
    type:     
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'dark'
    | 'light'
    | 'link'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-info'
    | 'outline-dark'
    | 'outline-light';
    text: string
    onClick: () => void
}

const Cell = ({ borderRadius = "0px", backgroundColor = "#ffffff", height = "100px", header, contents, status, buttons, onClick }: CellProps) => {

    let headerFrame = <></>;
    if(header !== undefined) {
        headerFrame = 
            <HeaderFrame>
                <TextFrame color={header.color!} verticalAlign={header.verticalAlign} horizontalAlign={header.horizontalAlign}>
                    {header.text}
                </TextFrame>
            </HeaderFrame>
    }



    let contentsFrame = <></>;
    if(contents !== undefined) {
        contentsFrame =
        <ContentsFrame>
            {
                contents.map((content) => {
                    return <ContentFrame>
                        {content.text}
                    </ContentFrame>
                })
            }
        </ContentsFrame>
    }

    let buttonsFrame = <></>;
    if(buttons !== undefined) {
        buttonsFrame =
        <ButtonsFrame>
            {
                buttons.map((button) => {
                    return <ButtonFrame>
                        <Button variant={button.type} onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {e.stopPropagation(); button.onClick();}}>
                            {button.text}
                        </Button>
                    </ButtonFrame>
                })
            }
        </ButtonsFrame>
    }

    let view =
    <Container height={height} onClick={onClick}>
        <Frame color={backgroundColor!} borderRadius={borderRadius}>
            {headerFrame}
            {contentsFrame}
            {buttonsFrame}
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
    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const HeaderFrame = styled.div`
    width: 100%;
    height: auto;
`;

const ContentsFrame = styled.div`
    width: 100%;
    height: 60%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
`;

const ContentFrame = styled.div`
    width: 100%;
    height: auto;
`;

const ButtonsFrame = styled.div`
    width: 100%;
    height: 20%;

    display: flex;
    justify-content: flex-end;
`;

const ButtonFrame = styled.div`
    width: auto;
    min-width: 90px;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const TextFrame = styled.div<{ color: string, verticalAlign: string, horizontalAlign: string }>`
    width: 100%;
    height: 100%;

    color: ${props => props.color};

    display: flex;
    justify-content: ${props => props.horizontalAlign};
    align-items: ${props => props.verticalAlign};
`;

export default Cell;