import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import Alert from 'react-bootstrap/Alert'

import useNoti from '../../redux/noti/hook'

interface NotiProps {
}

const NotiComponent: React.FC<NotiProps> = (props) => {
	const { selectNoti, hideNoti } = useNoti();
    return (
        <Container>
            <Alert variant={selectNoti.type} onClose={hideNoti} dismissible>
                {selectNoti.text}
            </Alert>
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    top: 9%;
    right: 1%;
    ${() => css`
        animation: ${anim} 0.3s 2s  linear infinite;
    `}
`;

const anim = keyframes`
	0% { opacity: 1; }
  	100% { opacity: 0; }
`

export default NotiComponent;