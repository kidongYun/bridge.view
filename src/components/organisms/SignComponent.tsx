import React from 'react'
import Component, { ComponentProps, Default } from '../atoms/Component'

import * as data from '../../service/Data'

import useHandle from '../../hooks/useHandle';
import useNoti from '../../hooks/useNoti';
import useSign from '../../hooks/useSign';

import TextComponent from '../atoms/TextComponent'
import LabelComponent from '../atoms/LabelComponent'
import ButtonComponent from '../atoms/ButtonComponent'

interface SignProps {
    component?: ComponentProps
}

const SignComponent: React.FC<SignProps> = ({
    component = Default
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
        width="300px" 
        height="300px" 
        direction="column" 
        backgroundColor="#aaaaaa"
        backgroundHover="#ffffff">
        <LabelComponent 
            label="SIGN" 
        />

        <TextComponent 
            value="" 
            placeholder="EMAIL" 
        />

        <TextComponent 
            value="" 
            placeholder="PASSWORD" 
        />

        <LabelComponent 
            label="HELLO" 
        />

        <Component>

            <ButtonComponent 
                text="Close" 
                theme="secondary"
                component={{
                    onClick: () => { 
                        handle_onHide(); 
                    }
                }}
            />

            <ButtonComponent 
                text="Sign In" 
                theme="primary"
                component={{
                    onClick: () => {
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
                }}
            />

            <ButtonComponent 
                text="Sign Up" 
                theme="primary"
                component={{
                    onClick: () => {
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
                }}
            />
        </Component>
    </Component>

    return view;
}

export default SignComponent;