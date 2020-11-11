import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import LabelComponent from '../LabelComponent';
import TextComponent from '../TextComponent';
import TextareaComponent from '../TextareaComponent'
import SelectComponent from '../SelectComponent';

const PopinHandleComponent = ({}) => {

    // let formView = <Form></Form>
    // if(forms !== undefined) {
    //     formView =
    //     <Form>
    //     {forms!.map((form) => {
    //         if(form.type === "LABEL") {
    //             return <LabelComponent 
    //                 label={form.value!} 
    //             />
    //         }
        
    //         if(form.type === "TEXT") {
    //             return <TextComponent
    //                 value={form.value}
    //                 placeholder={form.placeholder} 
    //                 onChange={form.onChange} 
    //             />
    //         }

    //         if(form.type === "TEXTAREA") {
    //             return <TextareaComponent
    //                 value={form.value}
    //                 placeholder={form.placeholder} 
    //                 rows={form.rows}
    //                 onChange={form.onChange}
    //             />
    //         }

    //         // if(form.type === "SELECT") {
    //         //     return <SelectComponent 
    //         //         value={form.value}
    //         //         options={form.options}
    //         //         onChange={form.onChange}
    //         //     />
    //         // }
    //     })}
    //     </Form>
    // }

    // let buttonView = <></>;
    // if(buttons !== undefined) {
    //     buttonView = 
    //     <>
    //     {buttons.map((button) => {
    //         return <ButtonFrame>
    //             <Button variant={button.type} onClick={() => { button.onClick(); }}>
    //                 {button.text}
    //             </Button>
    //         </ButtonFrame>
    //     })}
    //     </>
    // }

    // let view = 
    // <Container>
    //     <Header>
    //         <Title>{title.text}</Title>
    //     </Header>
    //     <Content>
    //         {formView}
    //     </Content>
    //     <Footer>
    //         {buttonView}
    //     </Footer>
    // </Container>

    return <></>;
}

const Container = styled.div`
    width: 90%;
    height: 90%;

    border: 1px dashed #bcbcbc;
    border-radius: 5px;

    margin: auto;
    padding: auto;
`;

const Header = styled.div`
    display: flex;

    width: 100%;
    height: 15%;

    padding: 5%;
    border-bottom: 1px dashed #bcbcbc;
`;

const Title = styled.div`
    width: 100%;
    height: 100%;

    font-size: 1.5rem;
`;

const Content = styled.div`
    width: 100%;
    height: 70%;

    padding: 5%;
`;

const Footer = styled.div`
    width: 100%;
    height: 15%;

    padding: 5%;

    text-align: right;
`;

const ButtonFrame = styled.div`
    float: left;
    width: auto;
    height: auto;

    margin-left: 1%;
    margin-right: 1%;
`;

export default PopinHandleComponent;