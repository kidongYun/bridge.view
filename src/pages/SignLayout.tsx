import React from 'react'
import SignComponent from '../components/organisms/SignComponent'
import Component from '../components/templates/Component';

import useSign from '../redux/sign/hook'

interface SignProps {}

const SignLayout: React.FC<SignProps> = () => {
    const { selectSign, sign } = useSign();

    sign();
    
    let view = 
    <Component backgroundColor="#eeeeee" backgroundHover="#eeeeee">
        <Component 
            width="500px" 
            height="350px" 
            backgroundColor="#ffffff" 
            backgroundHover="#ffffff" 
            borderRadius="10px">
            <SignComponent/>
        </Component>
    </Component>

    return view;
}

export default SignLayout;