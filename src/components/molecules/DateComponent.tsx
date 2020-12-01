import React from 'react'
import LabelComponent from '../atoms/LabelComponent'
import Component from '../templates/Component'

interface DateProps {
    date: string
}

const DateComponent: React.FC<DateProps> = (props) => {
    let view =
    <Component height="100px" horizontalAlign="flex-start" verticalAlign="flex-end">
        <Component width="auto" height="auto" >
            <LabelComponent label={props.date}/>
        </Component>
    </Component>

    return view;
}

DateComponent.defaultProps = {
    date: ""
}

export default DateComponent;