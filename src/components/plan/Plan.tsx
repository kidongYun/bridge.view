import React from 'react'
import styled from 'styled-components'

export interface _Plan {
    show: boolean
}

const Plan = ({show}: _Plan) => {
    let view;

    if(show) {
        view = <Container>Plan</Container>
    } else {
        view = <Container></Container>
    }

    return (
        view
    )
}

const Container = styled.div`
    display: inline-block;
    position: absolute;
    width: 100%;
    top: 70px; bottom: 0;
    margin: auto;
`;

export default Plan;