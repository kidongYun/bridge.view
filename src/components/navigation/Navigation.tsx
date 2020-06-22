import React from 'react';
import styled from 'styled-components'
import LoginModal from '../modal/loginModal/LoginModal';
import Menu from './menu/Menu';

import * as data from '../../service/data'

interface NavigationProps {
    setStage: (name: string) => void
}

const Navigation = ({ setStage } : NavigationProps) => {
    const [loginModalVisible, setLoginModalVisible] = React.useState(false);
    const menuList = data.postHeaderMenuList(setStage, setLoginModalVisible);

    return (
        <Container>
            <Menu menu={menuList[0]} />
            <Menu menu={menuList[1]} />
            {/* <LoginModal visible={loginModalVisible} showOff={() => setLoginModalVisible(false)} /> */}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
    background-color: #24292e;
`;

export default Navigation;