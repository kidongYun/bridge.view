import React, { useState } from 'react'
import Component from '../templates/Component'

import usePage from '../../redux/page/hook'
import useSign from '../../redux/sign/hook';

import TextComponent from '../atoms/TextComponent'
import LabelComponent from '../atoms/LabelComponent'
import ButtonComponent from '../atoms/ButtonComponent'

interface SignProps {
}

const SignComponent: React.FC<SignProps> = ({
}) => {
    const { setDialog } = usePage();
    const { selectSign, signIn, signUp } = useSign();

    const [email, setEmail] = useState("john@gmail.com");
    const [password, setPassword] = useState("q1w2e3r4");
    
    let view =
    <Component 
        width="500px" 
        height="300px" 
        direction="column">

        <Component borderBottom="solid 1px #eeeeee" marginBottom="10px" paddingBottom="10px">
            <LabelComponent weight="bold" label="Sign" size="20pt" color="#333333" />
        </Component>

        <Component width="70%">
            <TextComponent
                value={email}
                type="email"
                placeholder="email" 
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(event.target.value);
                }}
            />
        </Component>

        <Component width="70%">
            <TextComponent 
                value={password}
                type="password"
                placeholder="password"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setPassword(event.target.value);
                }}
            />
        </Component>

        <LabelComponent label={selectSign.body + ""}/>

        <Component>
            <Component>
                <ButtonComponent 
                    text="Sign In" 
                    theme="secondary"
                    onClick={() => {
                        setEmail("");
                        setPassword("");

                        signIn({ email: email, password: password });
                    }} 
                />
            </Component>

            <Component>
                <ButtonComponent 
                    text="Sign Up" 
                    theme="primary"
                    onClick={() => {
                        setEmail("");
                        setPassword("");
                    
                        signUp({ email: email, password: password });
                    }} 
                />
            </Component>
        </Component>
    </Component>

    return view;
}

export default SignComponent;