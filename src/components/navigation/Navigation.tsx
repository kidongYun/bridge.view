import React from 'react';
import styled from 'styled-components'
import Menu from './menu/Menu';

import useSign from '../../hooks/useSign';

import * as data from '../../service/Data'

const Navigation = () => {
    const menuList = data.postNavList();
    const { email } = useSign();

    if(email !== '') {
        menuList[1].tabs[0].title = email;
    }

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