import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import Alert from 'react-bootstrap/Alert'
import NotiType from '../../model/NotiType';

interface NotiProps {
    noti: NotiType
    setNoti: (noti: NotiType) => void
}

const Noti = ({ noti, setNoti } : NotiProps) => {

    if(noti.isShow) {
        return (
            <Container>
                <Alert variant="success" onClose={() => { setNoti({ ...noti, isShow: false }) }} dismissible>
                    {noti.text}
                </Alert>
            </Container>
        )   
    } else {
        return (
            <></>
        )
    }
}

const Container = styled.div`
    position: absolute;
    top: 1%;
    right: 1%;
    ${(props) => css`
        animation: ${anim} 0.5s 2s  linear infinite;
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