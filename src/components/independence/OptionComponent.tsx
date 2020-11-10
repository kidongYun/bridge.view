import React from 'react'

import Component from './Component'

export interface OptionProps extends Component {
    title: string
    value: string
}

const OptionComponent = ({ title, value }: OptionProps) => {
    return <option value={value}>{title}</option>
}

export default OptionComponent;