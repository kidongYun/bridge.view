import React from 'react'
import Component, { ComponentProps } from '../atoms/Component'

import LabelComponent from '../atoms/LabelComponent'
import TextComponent from '../atoms/TextComponent'

import useCell from '../../hooks/useCell';

interface ObjectivePostProps {

}

const ObjectivePostComponent: React.FC<ObjectivePostProps> = ({

}) => {
    const { 
        onSetObjectiveTitle,
    } = useCell();

    let view =
    <Component direction="column">
        <LabelComponent
            label="HELLO" />

        <TextComponent
            placeholder="TITLE"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const { value } = event.target;
                onSetObjectiveTitle(value);
            }}/>

    </Component>

    return view;
}

export default ObjectivePostComponent;