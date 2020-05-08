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

    if(type === "text") {
        view = <div onClick={onClick}>{title}</div>
    } else if(type === "button") {
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
    width: 10%;
    min-width: 100px;
    height: 100%;

    align-items: center;
    justify-content: center;

    color: #FFF;
`;

export default Tab;