import React from 'react'
import LabelComponent from '../atoms/LabelComponent'
import Component from '../templates/Component'

interface DateProps {
    date: string
}

const DateComponent: React.FC<DateProps> = (props) => {
    let view =
    <Component>
        <LabelComponent label={props.date}/>
    </Component>

    return view;
}

DateComponent.defaultProps = {
    date: ""
}

export default DateComponent;