import React from 'react'
import Component, { ComponentProps } from '../templates/Component'
import LabelComponent from '../atoms/LabelComponent'

interface DateProps extends ComponentProps {
    date: string
}

const DateComponent: React.FC<DateProps> = ({
    date
}) => {
    let view =
    <Component height="50px">
        <LabelComponent label={date} />
    </Component>

    return view;
}

export default DateComponent;