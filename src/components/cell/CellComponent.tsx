import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

import { TextProps } from '../props'
import { ButtonProps } from '../props'

interface CellProps {
    borderRadius?: string
    backgroundColor?: string
    backgroundHover?: string
    height?: string
    title?: TextProps
    contents?: TextProps[]
    status?: number
    buttons?: ButtonProps[]
    onClick?: () => void
}

const CellComponent = ({ 
    borderRadius = "0px", 
    backgroundColor = "#ffffff", 
    backgroundHover = "#ffffff", 
    height = "auto", 
    title, 
    contents, 
    status, 
    buttons, 
    onClick 
}: CellProps) => {

    let titleFrame = <></>;
    if(title !== undefined) {
        titleFrame = 
            <TitleFrame>
                <TextFrame fontSize={title.fontSize!} color={title.color!} verticalAlign={title.verticalAlign!} horizontalAlign={title.horizontalAlign!}>
                    {title.text}
                </TextFrame>
            </TitleFrame>
    }

    let statusFrame = <></>;
    if(status !== undefined) {
        statusFrame = 
        <StatusFrame></StatusFrame>;
    }


    let contentsFrame = <></>;
    if(contents !== undefined) {
        contentsFrame =
        <ContentsFrame>
            {
                contents.map((content) => {
                    return <ContentFrame borderRadius={content.borderRadius!} backgroundColor={content.backgroundColor!}>
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
                        <Button variant={button.type} onClick={button.onClick}>
                            {button.text}
                        </Button>
                    </ButtonFrame>
                })
            }
        </ButtonsFrame>
    }

    let view =
    <Container height={height} onClick={onClick}>
        <Frame height={height}backgroundColor={backgroundColor!} backgroundHover={backgroundHover!} borderRadius={borderRadius}>
            <FlexFrame>
                {titleFrame}
                {statusFrame}
            </FlexFrame>
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

const Frame = styled.div<{ height: string, backgroundColor: string, backgroundHover: string, borderRadius: string }>`
    width: 100%;
    height: 100%;
    background-color: ${props => props.backgroundColor };
    border-radius: ${props => props.borderRadius };
    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    transition: all ease 0.2s 0s;

    &:hover {
        background-color: ${props => props.backgroundHover };
    }

    &:active {
        height: ${props => props.height };
    }
`;

const TitleFrame = styled.div`
    width: 600%;
    height: auto;
    font-weight: bold;
    display: flex;
`;

const StatusFrame = styled.div`
    width: 100%;
    height: auto;
    background-color: #884342;
    display: flex;
`;

const ContentsFrame = styled.div`
    width: 100%;
    height: 60%;

    margin-top: 10px;
    margin-bottom: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
`;

const ContentFrame = styled.div<{ borderRadius: string, backgroundColor: string }>`
    width: 100%;
    height: auto;

    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;

    background-color: ${props => props.backgroundColor};
    border-radius: ${props => props.borderRadius};

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

const TextFrame = styled.div<{ fontSize: string, color: string, verticalAlign: string, horizontalAlign: string }>`
    width: 100%;
    height: 100%;

    font-size: ${props => props.fontSize};
    color: ${props => props.color};

    display: flex;
    justify-content: ${props => props.horizontalAlign};
    align-items: ${props => props.verticalAlign};
`;

const FlexFrame = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

export default CellComponent;