import React from 'react';
import styled from 'styled-components';
import Tab from '../tab/Tab';
import MenuType from '../../../model/MenuType';

interface MenuProps {
    menu: MenuType;
}

const Menu = ({menu}: MenuProps) => {

    return(
        <Container align={menu.align}>
            {
                menu.tabs.map(
                    (tab) => (
                        <Tab tab={tab} />
                    )
                )
            }
        </Container>
    )
}

interface _Container {
    align: string
};

const Container = styled.div<_Container>`
    display: flex;
    width: 90%;
    height: 100%;

    justify-content: ${props => props.align};
`;

export default Menu;