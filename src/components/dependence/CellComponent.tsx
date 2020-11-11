import React from 'react'
import styled from 'styled-components'

import Component, { ComponentProps } from '../independence/Component'

interface CellProps extends ComponentProps {
    // borderRadius?: string
    // backgroundColor?: string
    // backgroundHover?: string
    // title?: TextProps
    // contents?: TextProps[]
    // status?: ButtonProps
    // buttons?: ButtonProps[]
    components: Array<Array<JSX.Element>>
}

const CellComponent: React.FC<CellProps> = ({ 
    components
}) => {
    let view =
    <Container height="100px">
        {components.map(
            (component) => {
                return <Component>{component}</Component>
            }
        )}
    </Container>


    // graph.map(
    //     (components) => components.map(
    //         (component) => {
    //             console.log(component);
    //         }
    //     )
    // )

    // let topLeftFrame = <></>;
    // if(title !== undefined) {
    //     topLeftFrame = 
    //         <TopLeftFrame>
    //             <TextFrame fontSize={title.fontSize!} color={title.color!} verticalAlign={title.verticalAlign!} horizontalAlign={title.horizontalAlign!}>
    //                 {title.text}
    //             </TextFrame>
    //         </TopLeftFrame>
    // }

    // let statusFrame = <></>;
    // if(status !== undefined) {
    //     statusFrame = 
    //     <StatusFrame>
    //         <ButtonComponent type={status.type} text={status.text} onClick={status.onClick}/>
    //     </StatusFrame>
    // }


    // let contentsFrame = <></>;
    // if(contents !== undefined) {
    //     contentsFrame =
    //     <ContentsFrame>
    //         {
    //             contents.map((content) => {
    //                 return <ContentFrame borderRadius={content.borderRadius!} backgroundColor={content.backgroundColor!}>
    //                     {content.text}
    //                 </ContentFrame>
    //             })
    //         }
    //     </ContentsFrame>
    // }

    // let buttonsFrame = <></>;
    // if(buttons !== undefined) {
    //     buttonsFrame =
    //     <ButtonsFrame>
    //         {
    //             buttons.map((button) => {
    //                 return <ButtonFrame>
    //                     <Button variant={button.type} onClick={button.onClick}>
    //                         {button.text}
    //                     </Button>
    //                 </ButtonFrame>
    //             })
    //         }
    //     </ButtonsFrame>
    // }

    // let view = <></>
    // <Container height={height} onClick={onClick}>
    //     <Frame height={height} backgroundColor={backgroundColor!} backgroundHover={backgroundHover!} borderRadius={borderRadius}>
    //         <FlexFrame>
    //             {topLeftFrame}
    //             {statusFrame}
    //         </FlexFrame>
    //         {contentsFrame}
    //         {buttonsFrame}
    //     </Frame>
    // </Container>

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

const TopLeftFrame = styled.div`
    width: 600%;
    height: auto;
    font-weight: bold;
    display: flex;
`;

const StatusFrame = styled.div`
    width: 100%;
    height: auto;
    display: flex;

    margin: auto;
    padding: auto;

    justify-content: center;
    align-items: center;
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