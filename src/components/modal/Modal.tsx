import React from 'react'
import ObjectiveModal from './ObjectiveModal'
import LoginModal from './LoginModal';
import RemoveModal from './RemoveModal';

import * as data from '../../service/Data'
import * as utility from '../../service/Utility'

import useModal from '../../hooks/useModal';
import useCell from '../../hooks/useCell';
import useNoti from '../../hooks/useNoti';
import useData from '../../hooks/useData';

import ObjectiveType from '../../model/ObjectiveType';

const Modal = () => {
    const { type, visible, onHideModal } = useModal();
    const { updatedCell } = useCell();
    const { onShowNoti, onHideNoti } = useNoti();
    const { onSetObjectiveList } = useData();

    let view = <></>

    if(!visible){
        return view;
    }

    if(type === "LOGIN") {
        view = <LoginModal/>
    }

    if(type === "OBJECTIVE_POST") {
        console.log(updatedCell);
        view = <ObjectiveModal 
            obj={ updatedCell as ObjectiveType } 
            onExecute={(objPost) => {
                data.postObj(objPost).then((response) => {
                    onSetObjectiveList(utility.parse(response.data));
                    
                    onHideModal();
                    onShowNoti("success", "It's from Add Modal");
                    setTimeout(onHideNoti, 2300);
                })
            }} 
        />
    }

    if(type === "OBJECTIVE_PUT") {
        
    }

    if(type === "REMOVE") {
        view = <RemoveModal/>
    }

    return view
}

export default Modal;