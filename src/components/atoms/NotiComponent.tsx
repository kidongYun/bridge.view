import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import Alert from 'react-bootstrap/Alert'

import useNoti from '../../redux/hooks/useNoti'

interface NotiProps {
}

const NotiComponent: React.FC<NotiProps> = (props) => {
	const { getText, getType, hideNoti } = useNoti();
    return (
        <Container>
            <Alert variant={getType} onClose={hideNoti} dismissible>
                {getText}
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