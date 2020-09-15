import {createGlobalStyle} from 'styled-components';




interface GlobalProps{
    mode: boolean;
  }
  
export const GlobalStyle = createGlobalStyle<GlobalProps>`
    body{
      margin: 0px;
      padding: 0px;
      transition: background-color 0.5s;
      background-color: ${props => props.mode?'#333333': '#EEEEFF'};
      }
  `
  