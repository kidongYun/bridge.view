import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import Alert from 'react-bootstrap/Alert'

interface NotiProps {

}

const NotiComponent: React.FC<NotiProps> = () => {
    return (
        <Container>
            <Alert variant="primary" dismissible>
                {"My mom"}
            </Alert>
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    top: 9%;
    right: 1%;
    // ${(props) => css`
    //     animation: ${anim} 0.3s 2s  linear infinite;
    // `}
`;

const anim = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

export default NotiComponent;