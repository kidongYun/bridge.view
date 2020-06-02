import React from 'react';
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import TabType from '../../../model/TabType';

interface TabProps {
    tab: TabType
}

const Tab = ({tab}: TabProps) => {

    let view;

    if(tab.type === "outline-light") {
        view = <Button variant="outline-light" onClick={tab.onClick}>{tab.title}</Button>
    } else if(tab.type === "primary") {
        view = <Button variant="primary" onClick={tab.onClick}>{tab.title}</Button>
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