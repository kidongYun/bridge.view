import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Maven+Pro');
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,500,700');

  html, body, #root{
      width:100%;
      height:100%;
      margin: 0px;
  }
  * {
    box-sizing: border-box;
  }
  *:focus{
    outline:none;
  }
  body{
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
  a{
    color:inherit;
    text-decoration:none;
  }
  input,
  button{
    &.focus,
    &.active{outline:none}
  }
  h1,h2,h3,h4,h5,h6{
    font-family:'Maven Pro', sans-serif;
  }
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border: 3px solid #fff;
  }
  ::-webkit-scrollbar-button:start:decrement, ::-webkit-scrollbar-button:end:increment {
    display: block; height: 10px;
    background: url('./images/bg.png') #efefef
  }
  ::-webkit-scrollbar-track {
    background: #efefef;
    -webkit-border-radius: 10px;
    border-radius:10px;
    -webkit-box-shadow: inset 0 0 4px rgba(0,0,0,.2)
  }
  ::-webkit-scrollbar-thumb {
    height: 50px;
    width: 50px;
    background: rgba(0,0,0,.2);
    -webkit-border-radius: 8px;
    border-radius: 8px;
    -webkit-box-shadow: inset 0 0 4px rgba(0,0,0,.1)
  }
`;

export default GlobalStyle;