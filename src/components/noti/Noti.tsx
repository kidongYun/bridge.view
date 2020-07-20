import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import Alert from 'react-bootstrap/Alert'
import NotiType from '../../model/NotiType';

import useNoti from '../../hooks/useNoti';

const Noti = () => {
    const { type, text, visible, onHide } = useNoti();
    
    let view = <></>;

    if(!visible) {
        return view;
    }

    return (
        <Container>
            <Alert variant={type} onClose={() => onHide()} dismissible>
                {text}
            </Alert>
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    top: 9%;
    right: 1%;
    ${(props) => css`
        animation: ${anim} 0.3s 2s  linear infinite;
    `}
`;

const anim = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

export default Noti;