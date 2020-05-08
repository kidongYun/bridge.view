import React, { useState } from 'react';
import styled from 'styled-components'
import LoginModal from '../header/loginModal/LoginModal';
import Menu, { _Menu } from './menu/Menu';
import { _HeaderMenuListener } from '../../App';


export interface _HeaderMenu {
    left: _Menu,
    right: _Menu
};

const Header = ({setObjectiveShow, setPlanShow, setTodoShow}: _HeaderMenuListener) => {
    const [loginShow, setLoginShow] = React.useState(false);

    const [left, setLeft] = React.useState({
        align: 'flex-start',
        tabs: [
            {
                type: 'text',
                title: 'Objective',
                onClick: () => {
                    console.log("Objective!!!");
                    setObjectiveShow(true);
                    setPlanShow(false);
                    setTodoShow(false);
                }
            },
            {
                type: 'text',
                title: 'Plan',
                onClick: () => {
                    console.log("Plan!!!");
                    setObjectiveShow(false);
                    setPlanShow(true);
                    setTodoShow(false);
                }
            },
            {
                type: 'text',
                title: 'Todo',
                onClick: () => {
                    console.log("Todo!!!");
                    setObjectiveShow(false);
                    setPlanShow(false);
                    setTodoShow(true);
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
            <LoginModal show={loginShow} closeClick={() => setLoginShow(false)} />
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