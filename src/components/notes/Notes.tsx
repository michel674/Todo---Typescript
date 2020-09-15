import React from 'react';
import {Container, Column, Row} from '../Grid';
import {P, A, ContainerNotes} from './NotesStyle';
import {HorizontalSpacing, HorizontalBox, Box} from '../Box';

interface NoteProps {
    id: number;
    completed: boolean;
    note?: string;
    sequenceName: string;
    deleteNote: (id: number) => void;
    moveTo: (id:number, sequence: string)=>void;
}

const  Notes: React.FC<NoteProps> = props => {

    const handleMoveTo = (sequenceName: string) => () => {
        props.moveTo(props.id, sequenceName);
    }
    
    const handleDeleteNote = () => {
        props.deleteNote(props.id);
    }

    return(
        <ContainerNotes sequenceName={props.sequenceName}>
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"></link>
            <Container>
                <Row>
                    <Column align={'right'} desktop={10}>
                        <HorizontalBox>
                            <A color={'gray'} onClick={handleMoveTo('backlog')}><i className="fas fa-circle"></i></A>
                            <HorizontalSpacing/>
                            <A color={'quaternary'} onClick={handleMoveTo('toDo')}><i className="fas fa-circle"></i></A>
                            <HorizontalSpacing/>
                            <A color={'tertiary'} onClick={handleMoveTo('doing')}><i className="fas fa-circle"></i></A>
                            <HorizontalSpacing/>
                            <A color={'secondary'} onClick={handleMoveTo('done')}><i className="fas fa-circle"></i></A>
                        </HorizontalBox>
                    </Column>
                    <Column desktop={2}>
                    <A color={'primary'} hoverColor={true} onClick={handleDeleteNote}><i  className="fas fa-trash-alt"></i></A>
                    </Column>
                    <Column desktop={12}>
                        <Box>
                            <P>{props.note}</P>
                        </Box>
                    </Column>
                </Row>
            </Container>
        </ContainerNotes>
    )


}


export default Notes;