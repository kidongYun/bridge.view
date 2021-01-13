import React from 'react'
import SignComponent from '../components/organisms/SignComponent'

interface SignProps {}

const SignLayout: React.FC<SignProps> = () => {
    let view = <SignComponent/>;

    return view;
}

export default SignLayout;