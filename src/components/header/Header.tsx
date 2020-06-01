import React, { useState } from 'react';
import styled from 'styled-components'
import LoginModal from '../header/loginModal/LoginModal';
import Menu, { _Menu } from './menu/Menu';

import * as data from '../../service/data'

export interface _SetStage {
    setStage: (stageName: string) => void   
}

export interface _MenuList {
    left: _Menu,
    right: _Menu
};

const Header = ({ setStage } : _SetStage) => {
    const [loginModalVisible, setLoginModalVisible] = React.useState(false);
    const menu = data.postHeaderMenuList(setStage, setLoginModalVisible);

    return (
        <Container>
            <Menu align={menu.left.align} tabs={menu.left.tabs} />
            <Menu align={menu.right.align} tabs={menu.right.tabs} />
            <LoginModal visible={loginModalVisible} showOff={() => setLoginModalVisible(false)} />
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