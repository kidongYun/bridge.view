import React from 'react'
import Component, { ComponentProps } from '../components/templates/Component'

import ObjectiveListComponent from '../components/organisms/ObjectiveListComponent'
import NavigationComponent from '../components/organisms/NavigationComponent'
import PlanListComponent from '../components/organisms/PlanLIstComponent';
import TodoListComponent from '../components/organisms/TodoListComponent';

import usePage from '../data/hooks/usePage'
import useObjectives from '../data/hooks/useObjectives'
import { TemplateBuilder } from '../data/stores/template';
import DialogComponent from '../components/templates/DialogComponent';
import ObjectivePostComponent from '../components/organisms/ObjectivePostComponent';

interface MainProps {
    component?: ComponentProps
}

const MainLayout: React.FC<MainProps> = () => {
    const { getCenter, setCenter, getTop, getDialog } = usePage();
    const { getObjectives, callObjectives } = useObjectives();

    React.useEffect(() => {
        callObjectives();
    }, []);

    let dialog = 
    <DialogComponent display={getDialog.display}>
        <ObjectivePostComponent/>
    </DialogComponent>;

    let top =
    <NavigationComponent
        leftButtons={[
            {
                theme: "outline-light", 
                text: "Objective", 
                onClick: () => { setCenter(new TemplateBuilder()
                    .display(true).component("ObjectiveList").build())} 
            },
            { 
                theme: "outline-light", 
                text: "Plan", 
                onClick: () => { setCenter(new TemplateBuilder()
                    .display(true).component("PlanList").build())} 
            },
            { 
                theme: "outline-light", 
                text: "Todo", 
                onClick: () => { setCenter(new TemplateBuilder()
                    .display(true).component("TodoList").build())} 
            }
        ]} 
        
        rightButtons={[
            { theme: "primary", text: "Login", onClick: () => {} }
        ]} 
    />


    let center = <></>;
    if(getCenter.component === "ObjectiveList") {
        center = <ObjectiveListComponent objectives={getObjectives}/>
    } else if(getCenter.component === "PlanList") {
        center = <PlanListComponent/>;
    } else if(getCenter.component === "TodoList") {
        center = <TodoListComponent/>;
    }

    let view =
    <Component direction="column">
        {dialog}
        <Component height="70px" display={(getTop.display) ? "flex" : "none"}>
            {top}
        </Component>
        <Component width="60%" marginLeft="auto" marginRight="auto" overflowY="auto" display={(getCenter.display) ? "flex" : "none"}>
            {center}
        </Component>
    </Component>

    return view; 
}

export default MainLayout;