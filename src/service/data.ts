import axios from 'axios'

import CellType from '../model/CellType';
import MenuType from '../model/MenuType';
import TabType from '../model/TabType';
import ObjCellType from '../model/ObjCellType';
import PlanCellType from '../model/PlanCellType';
import DateCellType from '../model/DateCellType';


export function postPlanList() {
    let planList: Array<CellType> = [];

    // planList.push(new DateCellType(20, new Date('2020-01')))
    // planList.push(new PlanCellType(0, 'title0'))
    // planList.push(new DateCellType(20, new Date('2020-02')))
    // planList.push(new DateCellType(20, new Date('2020-03')))
    // planList.push(new DateCellType(20, new Date('2020-04')))
    // planList.push(new DateCellType(20, new Date('2020-05')))
    // planList.push(new DateCellType(20, new Date('2020-06')))
    // planList.push(new DateCellType(20, new Date('2020-07')))
    // planList.push(new DateCellType(20, new Date('2020-08')))
    // planList.push(new DateCellType(20, new Date('2020-09')))
    // planList.push(new DateCellType(20, new Date('2020-10')))
    // planList.push(new DateCellType(20, new Date('2020-11')))
    // planList.push(new DateCellType(20, new Date('2020-12')))

    return planList;
}

export async function postObjList() {
    return await axios.post("http://localhost:8080/tempObj");
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