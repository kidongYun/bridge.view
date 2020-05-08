import React from 'react';
import styled from 'styled-components';
import Tab, { _Tab } from '../tab/Tab';

export interface _Menu {
    align: string,
    tabs: _Tab[]
}

const Menu = ({align, tabs}: _Menu) => {

    return(
        <Container align={align}>
            {
                tabs.map(
                    (tab) => (
                        <Tab type={tab.type} title={tab.title} onClick={tab.onClick} />
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