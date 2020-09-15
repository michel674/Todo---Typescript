import React, {useState, ChangeEvent} from 'react';
import {Button, Input, Form} from "./ListHeaderStyle";
import {Container, Column, Row} from "../Grid";
import {  } from 'process';





interface HeaderProps {
    createListItem: (note:string) => void;
    deleteAllitems: () => void;
}

const ListHeaderComponent: React.FC<HeaderProps>= props=>{
    const [note, setNote] = useState('');


    const noteChange = (event: ChangeEvent<HTMLInputElement>):void =>{
        setNote(event.target.value);

    }

    const handleClick = (event:any)=>{

        if (note !==''){
            event.preventDefault()
            props.createListItem(note)
            setNote('')

        }
        
        
    }

    const handleDelete = (event:any) => {
        event.preventDefault();
        props.deleteAllitems(); 
    }
        

    


    return(
        <Form onSubmit={(event:any)=> event.preventDefault()}>
            <Container>
                <Row>
                    <Column desktop={8}>
                    <Input 
                        placeholder='digite a sua nota'
                        type='text'
                        value={note}
                        onChange={noteChange}
                        autoFocus
                    />
                    </Column>

                    <Column desktop={2}>
                    <Button
                        onClick={handleClick}
                        >Criar Nota</Button>
                    </Column>

                    <Column desktop={2  }>
                    <Button
                            onClick={handleDelete}
                            >Limpar notas</Button>
                    </Column>
                    
                </Row>
            </Container>
        </Form>
        
        


    )


}

export default ListHeaderComponent;


