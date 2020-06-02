import axios from 'axios'
import { _SetStage } from '../components/header/Header';
import Cell from '../model/Cell';

export function postObjectiveList() {
    // return axios.post('http://192.168.0.10/objective');

    let cell1: Cell = new Cell(1, "title sample1", "description sample1", 2, "deadline sample1");
    let cell2: Cell = new Cell(2, "title sample2", "description sample2", 2, "deadline sample2");
    let cell3: Cell = new Cell(3, "title sample3", "description sample3", 2, "deadline sample3");

    let cellList: Array<Cell> = [cell1, cell2, cell3];

    return cellList;

    // let objectiveList = [
    //     {
    //         id: 0,
    //         title: 'To study the scholarshop thing steadily',
    //         description: 'des1',
    //         priority: 1,
    //         deadline: 'deadline1'
    //     },
    //     {
    //         id: 1,
    //         title: 'To work out for making hot body',
    //         description: 'des2',
    //         priority: 2,
    //         deadline: 'deadline2'
    //     },
    //     {
    //         id: 2,
    //         title: 'To work out for my short hair',
    //         description: 'des3',
    //         priority: 3,
    //         deadline: 'deadline3'
    //     },
    //     {
    //         id: 3,
    //         title: 'To build the service for convinence',
    //         description: 'des4',
    //         priority: 4,
    //         deadline: 'deadline4'
    //     }
    // ]

    // return objectiveList;
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