import React from 'react';
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import TabType from '../../../model/TabType';

import useStage from '../../../hooks/useStage';
import useHandle from '../../../hooks/useHandle';

interface TabProps {
    tab: TabType
}

const Tab = ({tab}: TabProps) => {
    const { onUpdateStage } = useStage();
    const { handle_onShow } = useHandle();

    const onLeftMenuClick = () => {
        onUpdateStage(tab.event);
    }

    const onRightMenuClick = () => {
        handle_onShow("SIGN");
    }

    let view;

    if(tab.type === "outline-light") {
        view = <Button variant="outline-light" onClick={onLeftMenuClick}>{tab.title}</Button>
    } else if(tab.type === "primary") {
        view = <Button variant="primary" onClick={onRightMenuClick}>{tab.title}</Button>
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