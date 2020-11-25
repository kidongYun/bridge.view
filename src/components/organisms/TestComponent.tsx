import React from 'react'
import ButtonComponent from '../atoms/ButtonComponent'
import Component from '../templates/Component'
import LabelComponent from '../atoms/LabelComponent'
import SelectComponent from '../atoms/SelectComponent'
import TextareaComponent from '../atoms/TextareaComponent'
import TextComponent from '../atoms/TextComponent'

interface TestProps {
}

const TestComponent: React.FC<TestProps> = ({
}) => {
    return <Component direction="column" >
        <Component>
        <LabelComponent label="HELLO" component={{
            width: "20%",
            backgroundColor: "#636346",
        }}/>
        <LabelComponent label="HELLO" component={{
            width: "20%",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "#123123",
        }}></LabelComponent>

        <LabelComponent label="HELLO" component={{
            width: "20%",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "#343345",
        }}></LabelComponent>

        <ButtonComponent theme="primary" text="test" component={{
            width: "20%",
            backgroundColor: "#574839",
            borderTop: "solid 3px #123123",
        }}/>
        </Component>
        <Component>
            <SelectComponent options={[
                { title: "HELLO", value: "IT'S ME" },
                { title: "HELLO", value: "IT'S ME" }
            ]} component={{
                width: "20%",
                marginLeft: "auto",
                marginRight: "auto"
            }}/>

            <SelectComponent options={[
                { title: "HELLO", value: "IT'S ME" },
                { title: "HELLO", value: "IT'S ME" }
            ]} component={{
                width: "20%",
                marginLeft: "auto",
                marginRight: "auto"
            }}/>

            <TextareaComponent
                component={{
                    width: "20%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    backgroundColor: "#872332"
                }}
            />

            <TextComponent
                component={{
                    width: "20%",
                    backgroundColor: "#345345",
                    verticalAlign: "start"
                }}
            />
        </Component>
    </Component>
}

export default TestComponent;