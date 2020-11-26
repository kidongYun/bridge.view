import React from 'react'
import styled from 'styled-components'
import { RootContainer } from '../RootContainer'
import LabelComponent from '../atoms/LabelComponent'

interface DateProps {
    date: string
}

const DateComponent: React.FC<DateProps> = ({
    date
}) => {
    let view =
    <Container>
        <LabelComponent label={date} />
    </Container>

    return view;
}

const Container = styled(RootContainer)``;

export default DateComponent;