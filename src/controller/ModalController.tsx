import React from 'react'
import ModalComponent from '../components/modal/ModalComponent';

import * as data from '../service/Data'
import * as utility from '../service/Utility'

import useModal from '../hooks/useModal';
import useNoti from '../hooks/useNoti';
import useData from '../hooks/useData';
import useSign from '../hooks/useSign';
import useCell from '../hooks/useCell';

import useObjective from '../hooks/useObjective';
import ObjectiveType from '../model/ObjectiveType';
import PlanType from '../model/PlanType';

const ModalController = () => {
    const { modal_type, modal_visible, modal_onHide } = useModal();
    const { cellDateTime, subjectId, subjectStatus, objectiveTitle, objectiveDescription, objectivePriority } = useCell();
    const { onShowNoti, onHideNoti } = useNoti();
    const { data_objectiveList, data_onSetObjectiveList } = useData();
    const { sign_desc, sign_email, sign_password, sign_onUpdateStatus, sign_onUpdateDesc, sign_onUpdateEmail, sign_onUpdatePassword } = useSign();
    const { obj_title, obj_desc, obj_priority, obj_deadline, obj_onSetTitle, obj_onSetDesc, obj_onSetPriority, obj_onSetDeadline } = useObjective();

    let view = <></>;
    
    if(!modal_visible){
        return view;
    }

    if(modal_type === "SIGN") {
        view = 
        <ModalComponent 
            title={{ text: "SIGN" }}
            forms={[
                { 
                    type: "TEXT", 
                    placeholder: "EMAIL", 
                    onChange:(event: React.ChangeEvent<HTMLInputElement>) => {
                        const { value } = event.target;
                        sign_onUpdateEmail(value);
                    }
                },
                { 
                    type: "TEXT", 
                    placeholder: "PASSWORD", 
                    onChange:(event: React.ChangeEvent<HTMLInputElement>) => {
                        const { value } = event.target;
                        sign_onUpdatePassword(value);
                    } 
                },
                { 
                    type: "LABEL", 
                    value: sign_desc
                }
            ]}
            buttons={[
                {
                    text: "Close", 
                    type: "secondary", 
                    onClick:() => {
                        modal_onHide();
                    }
                },
                { 
                    text: "Sign In", 
                    type: "primary", 
                    onClick:() => {
                        const params = {
                            email: sign_email,
                            password: sign_password
                        }

                        data.signIn(params).then((response) => {
    
                            /* 로그인 실패한 경우 */
                            if(response.data.errorCode !== 200) {
                                sign_onUpdateStatus(false);
                                sign_onUpdateDesc(response.data.errorDesc);
                                return;
                            }
    
                            sign_onUpdateStatus(true);
                            sign_onUpdateEmail(params.email);
    
                            onShowNoti("success", "로그인되었습니다.");
                            setTimeout(onHideNoti, 2300);
                            modal_onHide();
                        })
                    }
                },
                { 
                    text: "Sign Up", 
                    type: "primary", 
                    onClick:() => {
                        const params = {
                            email: sign_email,
                            password: sign_password
                        }

                        data.signUp(params).then((response) => {
                            if(response.data.errorCode === 200) {
                                onShowNoti("success", "가입이 완료되었습니다.");
                                setTimeout(onHideNoti, 2300);
                                modal_onHide(); 
                            }
                        })
                    } 
                }
            ]}
        />
    }

    if(modal_type === "OBJECTIVE_POST") {
        view = 
        <ModalComponent
            title={{ text:"CREATE OBJECTIVE" }}
            forms={[
                { 
                    type: "TEXT", 
                    placeholder: "TITLE",
                    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                        const { value } = event.target;
                        obj_onSetTitle(value);
                    }
                },
                { 
                    type: "TEXTAREA", 
                    placeholder: "DESCRIPTION", 
                    rows: "10",
                    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                        const { value } = event.target;
                        obj_onSetDesc(value);
                    }
                },
                { 
                    type: "LABEL",
                    value: "Priority" 
                },
                { 
                    type: "SELECT",
                    options: [
                        { title: "title1", value: "value1" },
                        { title: "title2", value: "value2" }
                    ],
                    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                        const { value } = event.target;
                        obj_onSetPriority(Number.parseInt(value));
                    }
                },
                { 
                    type: "LABEL",
                    value: "Deadline"
                },
                { 
                    type: "TEXT",
                    placeholder: "2020-07-21",
                    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                        const { value } = event.target;
                        obj_onSetDeadline(value);
                    }
                }
            ]}
            buttons={[
                {
                    text: "Close",
                    type: "secondary",
                    onClick:() => {
                        modal_onHide();
                    }
                },
                { 
                    text: "Add", 
                    type: "primary", 
                    onClick:() => {

                        const objPost = {
                            title: objectiveTitle,
                            description: objectiveDescription,
                            dateTime: cellDateTime,
                            priority: objectivePriority,
                            status: 0,
                            date: true
                        }
                
                        data.postObj(objPost).then((response) => {
                            if(response.data.errorCode !== 200) {

                            }

                            data.getObj(true).then(() => {
                                if(response.data.errorCode !== 200) {
                                    modal_onHide();
                                    onShowNoti("warning", "It's warning");
                                    setTimeout(onHideNoti, 2300);
                                }

                                data_onSetObjectiveList(utility.parse(response.data.data));
                            
                                modal_onHide();
                                onShowNoti("success", "It's from Add Modal");
                                setTimeout(onHideNoti, 2300);
                            })
                        })
                    }
                }
            ]}
        />
    }

    if(modal_type === "OBJECTIVE_PUT") {

        view =
        <ModalComponent
            title={{ text: "UPDATE OBJECTIVE" }}
            forms={[
                { 
                    type: "TEXT",
                    value: objectiveTitle,
                    placeholder: "TITLE",
                    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                        const { value } = event.target;
                        obj_onSetTitle(value);
                    }
                },
                { 
                    type: "TEXTAREA", 
                    value: objectiveDescription,
                    placeholder: "DESCRIPTION", 
                    rows: "10",
                    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                        const { value } = event.target;
                        obj_onSetDesc(value);
                    }
                },
                { 
                    type: "LABEL",
                    value: "Priority" 
                },
                { 
                    type: "SELECT",
                    value: "value2",
                    options: [
                        { title: "title1", value: "value1" },
                        { title: "title2", value: "value2" }
                    ],
                    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                        const { value } = event.target;
                        obj_onSetPriority(Number.parseInt(value));
                    }
                },
                { 
                    type: "LABEL",
                    value: "Deadline"
                },
                { 
                    type: "TEXT",
                    value: cellDateTime,
                    placeholder: "2020-07-21",
                    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                        const { value } = event.target;
                        obj_onSetDeadline(value);
                    }
                }
            ]}
            buttons={[
                {
                    text: "Close",
                    type: "secondary",
                    onClick: () => {
                        modal_onHide();
                    }
                },
                { 
                    text: "Update",
                    type: "primary",
                    onClick: () => {
                        
                        const objPut = {
                            id: subjectId,
                            title: objectiveTitle,
                            description: objectiveDescription,
                            dateTime: cellDateTime,
                            priority: objectivePriority,
                            status: subjectStatus,
                            date: true
                        }
            
                        data.putObj(objPut).then((response) => {
                            /** 실패한 경우 */
                            if(response.data.errorCode !== 200) {

                            }

                            data.getObj(true).then((response) => {
                                /** 실패한 경우 */
                                if(response.data.errorCode !== 200) {
                                    modal_onHide();
                                    onShowNoti("success", "It's from Add Modal");
                                    setTimeout(onHideNoti, 2300);
                                }

                                data_onSetObjectiveList(utility.parse(response.data.data));
                        
                                modal_onHide();
                                onShowNoti("success", "It's from Add Modal");
                                setTimeout(onHideNoti, 2300);
                            })
                        })
                    }
                }
            ]}
        />
    }

    if(modal_type === "REMOVE") {
        view = 
        <ModalComponent
            title={{ text: "Remove" }}
            forms={[ { type: "LABEL", value: "Do you want to remove this surely?"} ]}
            buttons={[
                { 
                    text: "Close", 
                    type: "secondary", 
                    onClick:() => { 
                        modal_onHide();
                    } 
                },
                { 
                    text: "Remove", 
                    type: "primary", 
                    onClick:() => {
                        const objDelete = {
                            id: subjectId,
                            date: true
                        }
                    
                        data.deleteObj(objDelete).then((response) => {
                            if(response.data.errorCode !== 200) {
                                return;
                            }

                            data.getObj(true).then((response) => {
                                if(response.data.errorCode !== 200) {
                                    modal_onHide();
                                    onShowNoti("warning", "제거 후 데이터를 가져오지 못했습니다.");
                                    setTimeout(onHideNoti, 2300);
                                }

                                data_onSetObjectiveList(utility.parse(response.data.data));
                    
                                modal_onHide();
                                onShowNoti("success", "제거되었습니다.");
                                setTimeout(onHideNoti, 2300);
                            });
                        })
                    } 
                }
            ]}
        />
    }

    if(modal_type === "PLAN") {
        // const plan = subject_updated as PlanType;
        const objectiveList = data_objectiveList as ObjectiveType[];
        let selected: number = 0;

        objectiveList.map((obj) => {
            // if(plan.objectiveId === obj.id) {
            //     selected = obj.id;
            // }
        });

        view =
        <ModalComponent
            title={{ text:"Modify Plan" }}
            forms={[
                {
                    type: "TEXTAREA",
                    rows: "10"
                },
                {
                    type: "SELECT",
                    value: selected + "",
                    options: objectiveList.map((obj) => {
                        return { title: obj.title, value: obj.id + "" }
                    })
                },
                {
                    type: "SELECT",
                    options: [
                        // { title:plan.dateTime, value:plan.dateTime }
                    ]
                }
            ]}
            buttons={[
                { 
                    text: "Close", 
                    type: "secondary", 
                    onClick:() => { 
                        modal_onHide();
                    } 
                },
                {
                    text: "Modify",
                    type: "primary",
                    onClick:() => {

                        const planPut = {
                            // id: subject_updated.id,
                            objectiveId: selected,
                            content: "",
                            year: 0,
                            month: 0,
                            week: 0,
                            status: 0
                        }
            
                        // data.putPlan(planPut).then((response) => {
                        //     /** 실패한 경우 */
                        //     if(response.data.error !== "SUCCESS") {

                        //     }

                        //     data.getPlan(true).then((response) => {
                        //         data_onSetObjectiveList(utility.parse(response.data.cells));
                        
                        //         modal_onHide();
                        //         onShowNoti("success", "계획이 수정되었습니다.");
                        //         setTimeout(onHideNoti, 2300);
                        //     })
                        // })
                    }
                }
            ]}
        />
    }

    return view;
}

export default ModalController;