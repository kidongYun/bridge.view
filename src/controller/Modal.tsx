import React from 'react'
import ObjectiveModal from '../components/modal/ObjectiveModal'
import SignModal from '../components/modal/SignModal';
import RemoveModal from '../components/modal/RemoveModal';
import Modal from '../components/modal/ModalComponent';

import * as data from '../service/Data'
import * as utility from '../service/Utility'

import useModal from '../hooks/useModal';
import useSubject from '../hooks/useSubject';
import useNoti from '../hooks/useNoti';
import useData from '../hooks/useData';
import useSign from '../hooks/useSign';

import ObjectiveType from '../model/ObjectiveType';

const ModalController = () => {
    const { type, visible, onHideModal } = useModal();
    const { updatedSubject, deletedSubject } = useSubject();
    const { onShowNoti, onHideNoti } = useNoti();
    const { onSetObjectiveList } = useData();
    const { desc, onUpdateStatus, onUpdateDesc, onUpdateEmail } = useSign();

    let view = <></>

    if(!visible){
        return view;
    }

    if(type === "TEST") {
        view = <Modal />
    }

    if(type === "LOGIN") {
        view = <SignModal buttons={[
            {
                text:"Close", 
                type:"secondary", 
                onClick:() => {
                    onHideModal();
                }
            },
            { 
                text:"Sign In", 
                type:"primary", 
                onClick:(params) => {
                    data.signIn(params).then((response) => {

                        /* 로그인 실패한 경우 */
                        if(response.data.error !== "SUCCESS") {
                            onUpdateStatus(false);
                            onUpdateDesc(response.data.errorDesc);
                            return;
                        }

                        onUpdateStatus(true);
                        onUpdateEmail(params.email);

                        onShowNoti("success", "로그인되었습니다.");
                        setTimeout(onHideNoti, 2300);
                        onHideModal();
                    })
                }
            },
            { 
                text:"Sign Up", 
                type:"primary", 
                onClick:(params) => {
                    data.signUp(params).then((response) => {
                        console.log(response.data.error);

                        if(response.data.error === "SUCCESS") {
                            onShowNoti("success", "가입이 완료되었습니다.");
                            setTimeout(onHideNoti, 2300);
                            onHideModal(); 
                        }
                    })
                } 
            },
        ]} result={desc} />
    }

    if(type === "OBJECTIVE_POST") {
        view = <ObjectiveModal 
            obj={ updatedSubject as ObjectiveType } 
            buttons={[
                {
                    text: "Close",
                    type: "secondary",
                    onClick:() => {
                        onHideModal();
                    }
                },
                { 
                    text: "Add", 
                    type:"primary", 
                    onClick:(params) => {
                        const objPost = params
                
                        data.postObj(objPost).then((response) => {
                            if(response.data.error === "SUCCESS") {
                                data.getObj(true).then((response) => {
                                    onSetObjectiveList(utility.parse(response.data.cells));
                            
                                    onHideModal();
                                    onShowNoti("success", "It's from Add Modal");
                                    setTimeout(onHideNoti, 2300);
                                })
                            }
                        })
                    }
                }
            ]}
        />
    }

    if(type === "OBJECTIVE_PUT") {
        view = <ObjectiveModal 
        obj={ updatedSubject as ObjectiveType }
        buttons={[
            {
                text: "Close",
                type: "secondary",
                onClick: () => {
                    onHideModal();
                }
            },
            { 
                text: "Update",
                type: "primary",
                onClick: (params) => {
                    const objPut = {
                        id: params.id!,
                        title: params.title,
                        description: params.description,
                        dateTime: params.dateTime,
                        priority: params.priority,
                        status: params.status,
                        date: true
                    }
        
                    data.putObj(objPut).then((response) => {
                        if(response.data.error === "SUCCESS") {
                            data.getObj(true).then((response) => {
                                onSetObjectiveList(utility.parse(response.data.cells));
                        
                                onHideModal();
                                onShowNoti("success", "It's from Add Modal");
                                setTimeout(onHideNoti, 2300);
                            })
                        }
                    })
                }
            }
        ]}
    />
    }

    if(type === "REMOVE") {
        view = <RemoveModal buttons={[
            { 
                text:"Close", 
                type:"secondary", 
                onClick:() => { 
                    onHideModal();
                } 
            },
            { 
                text:"Remove", 
                type:"primary", 
                onClick:() => {
                    const objDelete = {
                        id: deletedSubject.id,
                        date: true
                    }
                
                    data.deleteObj(objDelete).then((response) => {
                        if(response.data.error === "SUCCESS") {
                            data.getObj(true).then((response) => {
                                onSetObjectiveList(utility.parse(response.data.cells));
                    
                                onHideModal();
                                onShowNoti("success", "It's from Add Modal");
                                setTimeout(onHideNoti, 2300);
                            })
                        }
                    })
                } 
            }
        ]}/>
    }

    return view
}

export default ModalController;