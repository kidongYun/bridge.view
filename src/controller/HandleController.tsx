import React from 'react'
import PopupHandleComponent from '../components/handle/PopupHandleComponent';
import PopinHandleComponent from '../components/handle/PopinHandleComponent';

import * as data from '../service/Data'
import * as utility from '../service/Utility'


import useHandle from '../hooks/useHandle';
import useNoti from '../hooks/useNoti';
import useData from '../hooks/useData';
import useSign from '../hooks/useSign';
import useCell from '../hooks/useCell';

import ObjectiveType from '../model/ObjectiveType';

import { TextProps, ButtonProps, FormProps } from '../components/props'

const HandleController = () => {
    const { 
        handle_name, 
        handle_visible, 
        handle_onHide,
        handle_onType
    } = useHandle();

    const { 
        data_objectiveList,
        data_planList,
        data_onSetObjectiveList,
        data_onSetPlanList
    } = useData();

    const { 
        onShowNoti, 
        onHideNoti 
    } = useNoti();

    const { 
        cellDateTime, 
        subjectId, 
        subjectStatus, 
        objectiveTitle, 
        objectiveDescription, 
        objectivePriority,
        planObjectiveId,
        planContent,
        onSetCellDateTime,
        onSetObjectiveTitle,
        onSetObjectiveDescription,
        onSetObjectivePriority,
        onSetPlanContent
    } = useCell();

    const { 
        sign_desc, 
        sign_email, 
        sign_password, 
        sign_onUpdateStatus, 
        sign_onUpdateDesc, 
        sign_onUpdateEmail, 
        sign_onUpdatePassword 
    } = useSign();

    let title: TextProps;
    let forms: FormProps[];
    let buttons: ButtonProps[];
    
    if(!handle_visible){
        return <></>;
    }

    if(handle_name === "SIGN") {
        title = { text: "SIGN" }
        forms = [
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
        ]
        buttons = [
            {
                text: "Close", 
                type: "secondary", 
                onClick:() => {
                    handle_onHide();
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
                        handle_onHide();
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
                            handle_onHide(); 
                        }
                    })
                } 
            }
        ]

        handle_onType("POPUP");

        return <PopupHandleComponent 
            title={title}
            forms={forms}
            buttons={buttons}
        /> 
    }

    if(handle_name === "OBJECTIVE_POST") {
        title = { text:"CREATE OBJECTIVE" }
        forms = [
            { 
                type: "TEXT", 
                placeholder: "TITLE",
                onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target;
                    onSetObjectiveTitle(value);
                }
            },
            { 
                type: "TEXTAREA", 
                placeholder: "DESCRIPTION", 
                rows: "10",
                onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target;
                    onSetObjectiveDescription(value);
                }
            },
            { 
                type: "LABEL",
                value: "Priority" 
            },
            { 
                type: "SELECT",
                options: [
                    { title: "title1", value: "1" },
                    { title: "title2", value: "5" }
                ],
                onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target;
                    onSetObjectivePriority(Number.parseInt(value));
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
                    onSetCellDateTime(value);
                }
            }
        ]
        buttons = [
            {
                text: "Close",
                type: "secondary",
                onClick:() => {
                    handle_onHide();
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
                            onShowNoti("warning", "Failure to add new objective.");
                            setTimeout(onHideNoti, 2300);
                            return;
                        }

                        data.getObj(true).then((response) => {
                            if(response.data.errorCode !== 200) {
                                onShowNoti("warning", "It's warning");
                                setTimeout(onHideNoti, 2300);
                                return;
                            }

                            data_onSetObjectiveList(utility.parse(response.data.data));
                        
                            handle_onHide();
                            onShowNoti("success", "It's from Add Modal");
                            setTimeout(onHideNoti, 2300);
                        })
                    })
                }
            }
        ]

        if(window.innerWidth > 900) {
            handle_onType("POPIN");
            return <PopinHandleComponent
                title={title}
                forms={forms}
                buttons={buttons}
            />

        } else {
            handle_onType("POPUP");
            return <PopupHandleComponent
                title={title}
                forms={forms}
                buttons={buttons}
            />
        }
    }

    if(handle_name === "OBJECTIVE_PUT") {
        title = { text: "UPDATE OBJECTIVE" }
        forms = [
            { 
                type: "TEXT",
                value: objectiveTitle,
                placeholder: "TITLE",
                onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target;
                    onSetObjectiveTitle(value);
                }
            },
            { 
                type: "TEXTAREA", 
                value: objectiveDescription,
                placeholder: "DESCRIPTION", 
                rows: "10",
                onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target;
                    onSetObjectiveDescription(value);
                }
            },
            { 
                type: "LABEL",
                value: "Priority" 
            },
            { 
                type: "SELECT",
                value: objectivePriority + "",
                options: [
                    { title: "title1", value: "1" },
                    { title: "title2", value: "2" }
                ],
                onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target;
                    onSetObjectivePriority(Number.parseInt(value));
                }
            },
            { 
                type: "LABEL",
                value: "Deadline"
            },
            { 
                type: "TEXT",
                value: cellDateTime.substring(0, 10),
                placeholder: "2020-07-21",
                onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target;
                    onSetCellDateTime(value);
                }
            }
        ]
        buttons = [
            {
                text: "Close",
                type: "secondary",
                onClick: () => {
                    handle_onHide();
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
                                handle_onHide();
                                onShowNoti("success", "It's from Add Modal");
                                setTimeout(onHideNoti, 2300);
                            }

                            data_onSetObjectiveList(utility.parse(response.data.data));
                    
                            handle_onHide();
                            onShowNoti("success", "It's from Add Modal");
                            setTimeout(onHideNoti, 2300);
                        })
                    })
                }
            },
            {
                text: "Remove",
                type: "danger",
                onClick: () => {
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
                                handle_onHide();
                                onShowNoti("warning", "제거 후 데이터를 가져오지 못했습니다.");
                                setTimeout(onHideNoti, 2300);
                            }

                            data_onSetObjectiveList(utility.parse(response.data.data));
                
                            handle_onHide();
                            onShowNoti("success", "제거되었습니다.");
                            setTimeout(onHideNoti, 2300);
                        });
                    })
                }
            }
        ]

        if(window.innerWidth > 900) {
            handle_onType("POPIN");
            return <PopinHandleComponent
                title={title}
                forms={forms}
                buttons={buttons}
            />

        } else {
            handle_onType("POPUP");
            return <PopupHandleComponent
                title={title}
                forms={forms}
                buttons={buttons}
            />
        }
    }

    if(handle_name === "PLAN") {
        const objectiveList = data_objectiveList as ObjectiveType[];
        
        let selected: number = 0;
        objectiveList.map((obj) => {
            if(planObjectiveId === obj.id) {
                selected = obj.id;
            }
        });

        title = { text:"Modify Plan" };
        forms = [
            {
                type: "TEXTAREA",
                value: planContent,
                rows: "10",
                onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target;
                    onSetPlanContent(value);
                }
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
                    { title: cellDateTime, value: cellDateTime }
                ]
            }
        ]
        buttons = [
            { 
                text: "Close", 
                type: "secondary", 
                onClick:() => { 
                    handle_onHide();
                } 
            },
            {
                text: "Modify",
                type: "primary",
                onClick:() => {

                    const planPut = {
                        id: subjectId,
                        objectiveId: selected,
                        content: planContent,
                        dateTime: cellDateTime,
                        status: 0
                    }
        
                    data.putPlan(planPut).then((response) => {
                        /* PLAN 업데이트 실패한 경우 */
                        if(response.data.errorCode !== 200) {
                            onShowNoti("warning", "It's fail to update the data");
                            setTimeout(onHideNoti, 2300);
                            return;
                        }

                        data.getPlan(true).then((response) => {
                            /* PLAN 업데이트 후 데이터 가져오기 실패한 경우 */
                            if(response.data.errorCode !== 200) {
                                onShowNoti("warning", "It's fail to get the data");
                                setTimeout(onHideNoti, 2300);
                                return;
                            }

                            data_onSetPlanList(utility.parse(response.data.data));
                    
                            handle_onHide();
                            onShowNoti("success", "계획이 수정되었습니다.");
                            setTimeout(onHideNoti, 2300);
                        })
                    })
                }
            }
        ]

        if(window.innerWidth > 900) {
            handle_onType("POPIN");
            return <PopinHandleComponent
                title={title}
                forms={forms}
                buttons={buttons}
            />
        } else {
            handle_onType("POPUP");
            return <PopupHandleComponent
                title={title}
                forms={forms}
                buttons={buttons}
            />
        }
    }

    return <></>;
}

export default HandleController;