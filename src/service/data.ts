// import axios from 'axios'

import CellType from '../model/CellType';
import MenuType from '../model/MenuType';
import TabType from '../model/TabType';
import ObjCellType from '../model/ObjCellType';
import PlanCellType from '../model/PlanCellType';
import DateCellType from '../model/DateCellType';

export function postPlanList() {
    let planList: Array<CellType> = [];

    planList.push(new DateCellType(20, new Date('2020-01')))
    planList.push(new PlanCellType(0, 'title0'))
    planList.push(new DateCellType(20, new Date('2020-02')))
    planList.push(new DateCellType(20, new Date('2020-03')))
    planList.push(new DateCellType(20, new Date('2020-04')))
    planList.push(new DateCellType(20, new Date('2020-05')))
    planList.push(new DateCellType(20, new Date('2020-06')))
    planList.push(new DateCellType(20, new Date('2020-07')))
    planList.push(new DateCellType(20, new Date('2020-08')))
    planList.push(new DateCellType(20, new Date('2020-09')))
    planList.push(new DateCellType(20, new Date('2020-10')))
    planList.push(new DateCellType(20, new Date('2020-11')))
    planList.push(new DateCellType(20, new Date('2020-12')))

    return planList;
}

export function postObjList() {
    // return axios.post('http://192.168.0.10/objective');

    let objList: Array<CellType> = [];

    objList.push(new DateCellType(20, new Date('2020-06-20')))
    objList.push(new ObjCellType(0, 'title0', 'description0', 0, new Date('2020-06-20')))
    objList.push(new ObjCellType(1, 'title1', 'description1', 1, new Date('2020-06-30')))
    objList.push(new ObjCellType(2, 'title2', 'description2', 2, new Date('2020-07-10')))
    objList.push(new DateCellType(20, new Date('2020-07-30')))
    objList.push(new ObjCellType(3, 'title3', 'description3', 3, new Date('2020-07-20')))
    objList.push(new ObjCellType(4, 'title4', 'description4', 4, new Date('2020-07-30')))
    objList.push(new ObjCellType(4, 'title4', 'description4', 4, new Date('2020-07-30')))
    objList.push(new ObjCellType(4, 'title4', 'description4', 4, new Date('2020-07-30')))
    objList.push(new DateCellType(20, new Date('2020-08-10')))
    objList.push(new ObjCellType(5, 'title5', 'description5', 5, new Date('2020-08-10')))
    objList.push(new DateCellType(20, new Date('2020-08-20')))
    objList.push(new ObjCellType(6, 'title6', 'description6', 6, new Date('2020-08-20')))

    return objList;
}

export function postHeaderMenuList(setStage : (name: string) => void, setLoginModalVisible: (visible: boolean) => void) {
    let menuList: Array<MenuType> = [];

    let leftMenu: MenuType = new MenuType('flex-start', []);
    leftMenu.tabs.push(new TabType('outline-light', 'Objective', () => { setStage("Objective")}));
    leftMenu.tabs.push(new TabType('outline-light', 'Plan', () => { setStage("Plan")}));
    leftMenu.tabs.push(new TabType('outline-light', 'Todo', () => { setStage("Todo")}));

    let rightMenu: MenuType = new MenuType('flex-end', []);
    rightMenu.tabs.push(new TabType('primary', 'Login', () => { setLoginModalVisible(true)}));

    menuList.push(leftMenu);
    menuList.push(rightMenu);

    return menuList;
}