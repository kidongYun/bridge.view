import React from 'react'
import styled from 'styled-components'

import Component from './Component'

interface FrameProps extends Component {
    component: Component,
    borderRadius?: string,
    borderColor?: string,
    borderWidth?: string,
    borderStyle?: string,
    backgroundColor?: string, 
    backgroundHover?: string, 
}

const FrameComponent = ({ component, width="100%", height="100%" }: FrameProps) => {
    return <Container width={width} height={height}>{component}</Container>
}

const Container = styled.div<{ width: string, height: string }>`
    width: ${props => props.width}
    height: ${props => props.height}
`;

export default FrameComponent;