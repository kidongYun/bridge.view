import React from 'react'
import Component, { ComponentProps } from '../atoms/Component'

import LabelComponent from '../atoms/LabelComponent'
import TextComponent from '../atoms/TextComponent'
import TextareaComponent from '../atoms/TextareaComponent'
import SelectComponent from '../atoms/SelectComponent'

import useCell from '../../hooks/useCell';
import useTemplate from '../../data/hooks/useTemplate'
import ButtonComponent from '../atoms/ButtonComponent'

interface ObjectivePostProps {
    component?: ComponentProps
}

const ObjectivePostComponent: React.FC<ObjectivePostProps> = ({
}) => {
    const { setTemplate } = useTemplate();
    // const { 
    //     onSetCellEndDateTime,
    //     onSetObjectiveTitle,
    //     onSetObjectivePriority
    // } = useCell();

    let view =
    <Component 
        direction="column" 
        marginLeft="auto" 
        marginRight="auto">
            
        <LabelComponent
            label="목표 추가" size="20pt" component={{
                borderBottom: "solid 1px #eeeeee",
                marginBottom: "10px",
                paddingBottom: "10px"
            }}/>

        <TextComponent
            placeholder="TITLE"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const { value } = event.target;
                // onSetObjectiveTitle(value);
            }}
            component={{
                width: "80%"
            }} />

        <TextareaComponent
            component={{
                width: "80%"
            }} />

        <LabelComponent label="Priority" />

        <SelectComponent
            value="Major"
            options={[
                { title: "Major", value: "1" },
                { title: "Minor", value: "2" }
            ]}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const { value } = event.target;
                // onSetObjectivePriority(Number.parseInt(value));
            }} />

        <LabelComponent label="Deadline" />

        <TextComponent 
            placeholder="2020-07-21"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const { value } = event.target;
                // onSetCellEndDateTime(value);
            }}
            component={{
                width: "80%"
            }} />

        <Component  borderTop="solid 1px #eeeeee" marginTop="10px" paddingTop="10px">
            <Component width="300%"></Component>
            <ButtonComponent 
                theme="secondary" 
                text="취소" 
                component={{
                    onClick: () => { setTemplate("DIALOG", false); }
                }}
            />
            <ButtonComponent 
                theme="primary" 
                text="추가"
                component={{
                    onClick: () => { setTemplate("DIALOG", false); }
                }}
            />
        </Component>
    </Component>

    return view;
}

export default ObjectivePostComponent;