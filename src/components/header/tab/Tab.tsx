import React from 'react';
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';

export interface _Tab {
    type: string,
    title: string,
    onClick: () => void;
};

const Tab = ({type, title, onClick}: _Tab) => {

    let view;

    if(type === "left") {
        view = <Button variant="outline-light" onClick={onClick}>{title}</Button>
    } else if(type === "right") {
        view = <Button variant="primary" onClick={onClick}>{title}</Button>
    }


    return(
        <Container>
            {view}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: 15%;
    min-width: 100px;
    height: 100%;

    align-items: center;
    justify-content: center;

    color: #FFF;
`;

export default Tab;