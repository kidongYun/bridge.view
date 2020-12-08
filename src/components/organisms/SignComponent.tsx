import React from 'react'
import Component from '../templates/Component'

import * as data from '../../service/Data'

import usePage from '../../redux/hooks/usePage'
import useNoti from '../../redux/hooks/useNoti';
import useSign from '../../hooks/useSign';

import TextComponent from '../atoms/TextComponent'
import LabelComponent from '../atoms/LabelComponent'
import ButtonComponent from '../atoms/ButtonComponent'
import { TemplateBuilder } from '../../redux/stores/template';

interface SignProps {
}

const SignComponent: React.FC<SignProps> = ({
}) => {
    const { setDialog } = usePage();

    const { showNoti, hideNoti } = useNoti();

    // const { 
    //     sign_email, 
    //     sign_password, 
    //     sign_onUpdateStatus, 
    //     sign_onUpdateDesc, 
    //     sign_onUpdateEmail, 
    // } = useSign();

    let email: string = "";
    let password: string = "";

    let view =
    <Component 
        width="500px" 
        height="300px" 
        direction="column" >

        <Component borderBottom="solid 1px #eeeeee" marginBottom="10px" paddingBottom="10px">
            <LabelComponent label="Sign" size="20pt" />
        </Component>

        <Component width="70%">
            <TextComponent
                value="" 
                placeholder="EMAIL" 
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target; 
                    email = value;
                }}
            />
        </Component>

        <Component width="70%">
            <TextComponent 
                value="" 
                placeholder="PASSWORD"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target;
                    password = value;
                }}
            />
        </Component>

        <LabelComponent label=""/>

        <Component>
            <Component width="100%" />
            <ButtonComponent 
                text="Close" 
                theme="secondary"
                onClick={() => {
                    setDialog(new TemplateBuilder().display(false).build());
                }} />

            <ButtonComponent 
                text="Sign In" 
                theme="primary"
                onClick={() => {}}
                // onClick={() => {
                //     const params = {
                //         email: sign_email,
                //         password: sign_password
                //     }

                //     data.signIn(params).then((response) => {
                //         /* 로그인 실패한 경우 */
                //         if(response.data.errorCode !== 200) {
                //             sign_onUpdateStatus(false);
                //             sign_onUpdateDesc(response.data.errorDesc);
                //             return;
                //         }

                //         sign_onUpdateStatus(true);
                //         sign_onUpdateEmail(params.email);

                //         showNoti("로그인되었습니다.", "success");
                //         setTimeout(hideNoti, 2300);
                //         setDialog(new TemplateBuilder().display(false).build());
                //     })
                // }} 
            />

            {/* <ButtonComponent 
                text="Sign Up" 
                theme="primary"
                onClick={() => {
                    const params = {
                        email: sign_email,
                        password: sign_password
                    }

                    data.signUp(params).then((response) => {
                        if(response.data.errorCode === 200) {
                            showNoti("가입이 완료되었습니다.", "success");
                            setTimeout(hideNoti, 2300);
                            setDialog(new TemplateBuilder().display(false).build());
                        }
                    })
                }} /> */}
        </Component>
    </Component>

    return view;
}

export default SignComponent;