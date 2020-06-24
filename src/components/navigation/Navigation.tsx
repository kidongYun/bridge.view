import React from 'react';
import styled from 'styled-components'
import Menu from './menu/Menu';

import * as data from '../../service/data'
import ModalType from '../../model/ModalType';

interface NavigationProps {
    modal: ModalType
    setModal: (modal: ModalType) => void
    setStage: (name: string) => void
}

const Navigation = ({ modal, setModal, setStage } : NavigationProps) => {
    const menuList = data.postNavList(modal, setModal, setStage);

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