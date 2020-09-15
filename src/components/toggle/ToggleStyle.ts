import styled from 'styled-components';

export const Toggle = styled.input`
    &:hover{
        cursor: pointer;
    }
`
interface DivToggleProps{
    mode: boolean;
}

export const DivToggle = styled.div<DivToggleProps>`
    position: absolute;
    right: 20px;
    width: 40px;1
    height: 22px;
    background-color: ${props => props.mode?'#FFFFFF': '#5555FF'};
    transition: background-color 0.5s;
    border-radius: 12px;
    padding: 2px;
    &:hover{
        cursor: pointer;
    }
`

interface BallProps{
    mode: boolean;
}


export const ToggleBall = styled.div<BallProps>`
    position: relative;
    left: ${props => props.mode? '0': '20px'};
    width: 20px;
    height: 22px;
    background-color: ${props => props.mode?'#5555FF': '#FFFFFF'};
    border-radius: 50%;
    margin: none;
    transition: all 0.5s;

`