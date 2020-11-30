import React from 'react'
import Component, { ComponentProps } from '../components/templates/Component'

import ObjectiveListComponent from '../components/organisms/ObjectiveListComponent'
import NavigationComponent from '../components/organisms/NavigationComponent'
import usePage from '../data/hooks/usePage'

interface ObjectiveProps {
    component?: ComponentProps
}

const MainLayout: React.FC<ObjectiveProps> = (props) => {
    const { getCenter, getTop } = usePage();

    let view = 
    <Component direction="column">
        <Component height="70px" display={getTop.display}>
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
        <Component width="60%" marginLeft="auto" marginRight="auto" display={getCenter.display}>
            {() => { 
                if(getCenter.component === "ObjectiveList") {
                    return <ObjectiveListComponent/>
                } else if(getCenter.component === "PlanList") {
                    return <></>
                } else if(getCenter.component === "TodoList") {
                    return <></>
                }
            }}
        </Component>
    </Component>

    return view; 
}

export default MainLayout