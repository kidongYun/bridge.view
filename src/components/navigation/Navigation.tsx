import React from 'react';
import styled from 'styled-components'
import Menu from './menu/Menu';

import * as data from '../../service/Data'

const Navigation = () => {
    const menuList = data.postNavList();

    return (
        <Container>
            <Menu menu={menuList[0]} />
            <Menu menu={menuList[1]} />
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