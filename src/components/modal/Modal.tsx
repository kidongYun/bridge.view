import React from 'react'
import ObjectiveModal from './ObjectiveModal'
import LoginModal from './LoginModal';
import RemoveModal from './RemoveModal';

import * as data from '../../service/Data'
import * as utility from '../../service/Utility'

import useModal from '../../hooks/useModal';
import useSubject from '../../hooks/useSubject';
import useNoti from '../../hooks/useNoti';
import useData from '../../hooks/useData';

import ObjectiveType from '../../model/ObjectiveType';

const Modal = () => {
    const { type, visible, onHideModal } = useModal();
    const { updatedSubject } = useSubject();
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
        console.log(updatedSubject);
        view = <ObjectiveModal 
            obj={ updatedSubject as ObjectiveType } 
            buttonName="Add"
            onExecute={(objReq) => {

                const objPost = objReq;
                
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
        view = <ObjectiveModal 
        obj={ updatedSubject as ObjectiveType }
        buttonName="Update"
        onExecute={(objReq) => {

            const objPut = {
                id: objReq.id!,
                title: objReq.title,
                description: objReq.description,
                dateTime: objReq.dateTime,
                priority: objReq.priority,
                status: objReq.status,
                date: true
            }

            data.putObj(objPut).then((response) => {
                onSetObjectiveList(utility.parse(response.data));
                
                onHideModal();
                onShowNoti("success", "It's from Add Modal");
                setTimeout(onHideNoti, 2300);
            })
        }} 
    />
    }

    if(type === "REMOVE") {
        view = <RemoveModal/>
    }

    return view
}

export default Modal;