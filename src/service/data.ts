import axios from 'axios'
import { _SetStage } from '../components/header/Header';

export function postObjectiveList() {
    // return axios.post('http://192.168.0.10/objective');

    let objectiveList = [
        {
            id: 1,
            title: 'To study the scholarshop thing steadily',
            description: 'des1',
            priority: 1,
            deadline: 'deadline1'
        },
        {
            id: 2,
            title: 'To work out for making hot body',
            description: 'des2',
            priority: 2,
            deadline: 'deadline2'
        },
        {
            id: 3,
            title: 'To build the service for convinence',
            description: 'des3',
            priority: 3,
            deadline: 'deadline3'
        }
    ]

    return objectiveList;
}

export function postHeaderMenuList(setStage : (stageName: string) => void, setLoginModalVisible: (visible: boolean) => void) {
    let menu = {
        left: {
            align: 'flex-start',
            tabs: [
                {
                    type: 'outline-light',
                    title: 'Objective',
                    onClick: () => { setStage("Objective"); }
                },
                {
                    type: 'outline-light',
                    title: 'Plan',
                    onClick: () => { setStage("Plan"); }
                },
                {
                    type: 'outline-light',
                    title: 'Todo',
                    onClick: () => { setStage("Todo"); }
                }
            ]
        },
        right: {
            align: 'flex-end',
            tabs: [
                {
                    type: 'primary',
                    title: 'Login',
                    onClick: () => { setLoginModalVisible(true); }
                }
            ]
        }
    }

    return menu;
}