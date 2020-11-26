import React from 'react'
import Component from '../templates/Component'

import * as data from '../../service/Data'

import useHandle from '../../hooks/useHandle';
import useNoti from '../../hooks/useNoti';
import useSign from '../../hooks/useSign';

import TextComponent from '../atoms/TextComponent'
import LabelComponent from '../atoms/LabelComponent'
import ButtonComponent from '../atoms/ButtonComponent'

interface SignProps {
}

const SignComponent: React.FC<SignProps> = ({
}) => {
    const { 
        handle_onHide,
    } = useHandle();

    const { 
        onShowNoti, 
        onHideNoti 
    } = useNoti();

    const { 
        sign_email, 
        sign_password, 
        sign_onUpdateStatus, 
        sign_onUpdateDesc, 
        sign_onUpdateEmail, 
    } = useSign();

    let view =
    <Component 
        width="500px" 
        height="300px" 
        direction="column" 
        backgroundColor="#aaaaaa"
        backgroundHover="#ffffff">

        <LabelComponent 
            label="SIGN" />

        <Component width="70%">
            <TextComponent value="" placeholder="EMAIL"/>
        </Component>

        <Component width="70%">
            <TextComponent value="" placeholder="PASSWORD"/>
        </Component>

        <LabelComponent 
            label="HELLO"  />

        <Component>
            <Component width="100%" />
            <ButtonComponent 
                text="Close" 
                theme="secondary"
                onClick={() => {
                    handle_onHide(); 
                }} />

            <ButtonComponent 
                text="Sign In" 
                theme="primary"
                onClick={() => {
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
                }} />

            <ButtonComponent 
                text="Sign Up" 
                theme="primary"
                onClick={() => {
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
                }} />
        </Component>
    </Component>

    return view;
}

export default SignComponent;