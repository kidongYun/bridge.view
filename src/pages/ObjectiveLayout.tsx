import React from 'react'
import Component, { ComponentProps } from '../components/templates/Component'

import useTemplate, {} from '../data/hooks/useTemplate'
import ObjectiveListComponent from '../components/organisms/ObjectiveListComponent'
import NavigationComponent from '../components/organisms/NavigationComponent';

interface ObjectiveProps {
    component?: ComponentProps
}

const ObjectiveLayout: React.FC<ObjectiveProps> = (props) => {
    const { getTemplate } = useTemplate();

    let view = 
    <Component direction="column">
        <Component height="70px">
            <NavigationComponent
                leftButtons={[
                    { theme: "primary", text: "Objective" },
                    { theme: "primary", text: "Plan" },
                    { theme: "primary", text: "Todo"}
                ]} 

                rightButtons={[
                    { theme: "primary", text: "button1" },
                    { theme: "primary", text: "button2" }
                ]} 
            />
        </Component>
        <Component width="60%" marginLeft="auto" marginRight="auto">
            <ObjectiveListComponent/>
        </Component>
    </Component>

    return view; 
}

export default ObjectiveLayout