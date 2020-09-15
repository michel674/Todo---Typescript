import React from 'react';
import { DivToggle, ToggleBall} from './ToggleStyle';


interface ToggleProps{
    mode:boolean;
    changeMode: () => void;
}

export const ToggleButton:React.FC<ToggleProps> = props =>{

    const handleChangeMode = ()=>{
        props.changeMode();
    }

    return (

        <DivToggle onClick={handleChangeMode} mode={props.mode}>
            <ToggleBall mode={props.mode}/>
        </DivToggle>
    )
}