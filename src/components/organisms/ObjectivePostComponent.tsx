import React from 'react'
import Component, { ComponentProps } from '../atoms/Component'

import LabelComponent from '../atoms/LabelComponent'
import TextComponent from '../atoms/TextComponent'
import TextareaComponent from '../atoms/TextareaComponent'
import SelectComponent from '../atoms/SelectComponent'

import useCell from '../../hooks/useCell';

interface ObjectivePostProps {

}

const ObjectivePostComponent: React.FC<ObjectivePostProps> = ({

}) => {

    const { 
        onSetCellEndDateTime,
        onSetObjectiveTitle,
        onSetObjectivePriority
    } = useCell();

    let view =
    <Component direction="column" border="solid 300px #123123">
        <LabelComponent
            label="HELLO" 
        />

        <TextComponent
            placeholder="TITLE"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const { value } = event.target;
                onSetObjectiveTitle(value);
            }}
        />

        <TextareaComponent/>

        <LabelComponent label="Priority" />

        <SelectComponent
            options={[
                { title: "Major", value: "1" },
                { title: "Minor", value: "2" }
            ]}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const { value } = event.target;
                onSetObjectivePriority(Number.parseInt(value));
            }}
        />

        <LabelComponent label="Deadline"/>

        <TextComponent 
            placeholder="2020-07-21"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const { value } = event.target;
                onSetCellEndDateTime(value);
            }}
        />

    </Component>

    return view;
}

export default ObjectivePostComponent;