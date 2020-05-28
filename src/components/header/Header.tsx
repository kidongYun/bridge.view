import React, { useState } from 'react';
import styled from 'styled-components'
import LoginModal from '../header/loginModal/LoginModal';
import Menu, { _Menu } from './menu/Menu';

interface _HeaderMenuListener {
    setObjectiveVisible: (flag: boolean) => void,
    setPlanVisible: (flag: boolean) => void,
    setTodoVisible: (flag: boolean) => void
}


export interface _HeaderMenu {
    left: _Menu,
    right: _Menu
};

const Header = ({setObjectiveVisible, setPlanVisible, setTodoVisible}: _HeaderMenuListener) => {
    const [loginModalVisible, setLoginModalVisible] = React.useState(false);

    const [left, setLeft] = React.useState({
        align: 'flex-start',
        tabs: [
            {
                type: 'left',
                title: 'Objective',
                onClick: () => {
                    setObjectiveVisible(true);
                    setPlanVisible(false);
                    setTodoVisible(false);
                }
            },
            {
                type: 'left',
                title: 'Plan',
                onClick: () => {
                    setObjectiveVisible(false);
                    setPlanVisible(true);
                    setTodoVisible(false);
                }
            },
            {
                type: 'left',
                title: 'Todo',
                onClick: () => {
                    setObjectiveVisible(false);
                    setPlanVisible(false);
                    setTodoVisible(true);
                }
            }
        ]
    });

    const [right, setRight] = React.useState({
        align: 'flex-end',
        tabs: [
            {
                type: 'right',
                title: 'Login',
                onClick: () => setLoginModalVisible(true)
            }
        ]
    });

    return (
        <Container>
            <Menu align={left.align} tabs={left.tabs} />
            <Menu align={right.align} tabs={right.tabs} />
            <LoginModal visible={loginModalVisible} showOff={() => setLoginModalVisible(false)}/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
    background-color: #24292e;
`;

export default Header;