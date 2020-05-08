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
    const [loginShow, setLoginShow] = React.useState(false);

    const [left, setLeft] = React.useState({
        align: 'flex-start',
        tabs: [
            {
                type: 'text',
                title: 'Objective',
                onClick: () => {
                    setObjectiveVisible(true);
                    setPlanVisible(false);
                    setTodoVisible(false);
                }
            },
            {
                type: 'text',
                title: 'Plan',
                onClick: () => {
                    setObjectiveVisible(false);
                    setPlanVisible(true);
                    setTodoVisible(false);
                }
            },
            {
                type: 'text',
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
                type: 'button',
                title: 'Login',
                onClick: () => setLoginShow(true)
            }
        ]
    });

    return (
        <Container>
            <Menu align={left.align} tabs={left.tabs} />
            <Menu align={right.align} tabs={right.tabs} />
            <LoginModal visible={loginShow} closeClick={() => setLoginShow(false)} />
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