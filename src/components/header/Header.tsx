import React from 'react';
import styled from 'styled-components'
import LoginModal from '../header/loginModal/LoginModal';
import Menu from './menu/Menu';

import * as data from '../../service/data'

// export interface _MenuList {
//     left: _Menu,
//     right: _Menu
// };

interface HeaderProps {
    setStage: (stageName: string) => void
}

const Header = ({ setStage } : HeaderProps) => {
    const [loginModalVisible, setLoginModalVisible] = React.useState(false);
    const menuList = data.postHeaderMenuList(setStage, setLoginModalVisible);

    return (
        <Container>
            <Menu menu={menuList[0]} />
            <Menu menu={menuList[1]} />
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