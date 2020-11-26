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
                    { theme: "outline-light", text: "Objective", onClick: () => {} },
                    { theme: "outline-light", text: "Plan", onClick: () => {} },
                    { theme: "outline-light", text: "Todo", onClick: () => {} }
                ]} 

                rightButtons={[
                    { theme: "primary", text: "Login", onClick: () => {} }
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