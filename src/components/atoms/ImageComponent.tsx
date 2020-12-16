import React from 'react'
import Component from '../templates/Component'

interface ImageProps {
    src: string
    alt: string
}

const ImageComponent: React.FC<ImageProps> = (props) => {
    let view = 
    <Component>
        <img src={props.src} alt={props.alt} height="100%" />
    </Component>;

    return view;
}

export default ImageComponent;