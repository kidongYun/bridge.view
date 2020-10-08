import React from 'react'
import styled from 'styled-components'

import HandleComponent from '../components/handle/HandleComponent'

const Handle = () => {
    let view = 
    <Container>
        <HandleComponent
            title={{ text:"Modify Plan" }}
            forms={[
                {
                    type: "TEXTAREA",
                    value: "",
                    rows: "10",
                    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                    }
                },
                {
                    type: "SELECT",
                    value: ""
                },
                {
                    type: "SELECT"
                }
            ]}
            buttons={[
                { 
                    text: "Close", 
                    type: "secondary", 
                    onClick:() => { 
                    } 
                },
                {
                    text: "Modify",
                    type: "primary",
                    onClick:() => {
                    }
                }
            ]}
        />
    </Container>

    return view;
}

const Container = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
`;

export default Handle;