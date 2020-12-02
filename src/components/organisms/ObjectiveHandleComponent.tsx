import React from 'react'
import Component, { ComponentProps } from '../templates/Component'

import LabelComponent from '../atoms/LabelComponent'
import TextComponent from '../atoms/TextComponent'
import TextareaComponent from '../atoms/TextareaComponent'
import SelectComponent from '../atoms/SelectComponent'
import ButtonComponent from '../atoms/ButtonComponent'

import usePage from '../../data/hooks/usePage'
import { TemplateBuilder } from '../../data/stores/template'
import Objective, { ObjectiveBuilder } from '../../data/stores/objective'

interface ObjectivePostProps {
    component?: ComponentProps
}

const ObjectivePostComponent: React.FC<ObjectivePostProps> = ({
}) => {
    const { setDialog } = usePage();

    let title: string = "";
    let description: string = "";
    let priority: number = 0;
    let deadline: string = "";

    let view =
    <Component 
        direction="column" 
        marginLeft="auto" 
        marginRight="auto"
        width="80%">
        
        <Component borderBottom="solid 1px #eeeeee" marginBottom="10px" paddingBottom="10px">
            <LabelComponent label="Create Objective" size="20pt" />
        </Component>

        <Component marginTop="10px" marginBottom="10px">
            <TextComponent 
                placeholder="TITLE"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target; 
                    title = value; 
                }}
            />      
        </Component>

        <Component marginTop="10px" marginBottom="10px">
            <TextareaComponent 
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target;
                    description = value;

                    console.log("YKD : " + description);
                }}
            />
        </Component>

        <Component marginTop="10px" horizontalAlign="flex-start" verticalAlign="flex-end">
            <Component width="auto" height="auto"><LabelComponent label="Priority" /></Component>
        </Component>

        <Component marginBottom="10px">
            <SelectComponent
                value="Major"
                options={[
                    { title: "Major", value: "1" },
                    { title: "Minor", value: "2" }
                ]}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target;
                    priority = Number.parseInt(value);
                }} 
            />
        </Component>

        <Component marginTop="10px" horizontalAlign="flex-start" verticalAlign="flex-end">
            <Component width="auto" height="auto"><LabelComponent label="Deadline" /></Component>
        </Component>

        <Component marginBottom="10px">
            <TextComponent 
                placeholder="2020-07-21"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target;
                    deadline = value;

                    console.log("YKD : " + deadline);
                }} 
            />
        </Component>

        <Component  borderTop="solid 1px #eeeeee" marginTop="10px" paddingTop="10px">
            <Component width="300%"></Component>
            <ButtonComponent 
                theme="secondary" 
                text="Cancel" 
                onClick={() => {
                    setDialog(new TemplateBuilder().display(false).build());
                }}
            />
            <ButtonComponent 
                theme="primary" 
                text="Add"
                onClick={() => {
                    setDialog(new TemplateBuilder().display(false).build());

                    const obj: Objective = new ObjectiveBuilder()
                        .title(title).description(description)
                        .endDateTime(deadline).priority(priority).build();

                    
                }}
            />
        </Component>
    </Component>

    return view;
}

export default ObjectivePostComponent;