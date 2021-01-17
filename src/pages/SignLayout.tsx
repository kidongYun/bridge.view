import React from 'react'
import SignComponent from '../components/organisms/SignComponent'
import Component from '../components/templates/Component';

interface SignProps {}

const SignLayout: React.FC<SignProps> = () => {
    let view = 
    <Component backgroundColor="#eeeeee" backgroundHover="#eeeeee">
        <Component 
            width="40%" 
            height="50%" 
            backgroundColor="#ffffff" 
            backgroundHover="#ffffff" 
            borderRadius="10px">
            <SignComponent/>
        </Component>
    </Component>

    return view;
}

export default SignLayout;