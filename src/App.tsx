import React, {Fragment,useState} from 'react';
import './App.css';
import ListHeaderComponent from './components/listHeader/ListHeader';
import {Container, Column, Row} from './components/Grid';
import Notes from './components/notes/Notes';
import {H3} from './components/notes/NotesStyle';
import {GlobalStyle} from './components/Gobal';
import {Spacing} from './components/Box';
import {ToggleButton} from './components/toggle/ToggleButton';

const Zoom = require('react-reveal/Zoom');


interface NoteColumnProps {
  title: string;      
  sequenceName: string;
  notesArray: INote[];
  changeBox: (id:number)=>void;
  deleteNote: (id:number)=>void;
  moveTo: (id: number, sequenceTarget: string)=>void;
}

const NoteColumn: React.FC<NoteColumnProps> = props => {
  return (
    <Column desktop={2.8}>
      <Container>
        <Row>
          <Column desktop={12}>
            <H3>{props.sequenceName}</H3>
          </Column>
          <Column desktop={12}>
            {props.notesArray 
              .filter((note: INote) => note.sequenceName === props.sequenceName)
              .map((note: INote) => (
                <Fragment>
                  <Zoom duration={400}>
                    <Notes key={note.id} sequenceName={note.sequenceName}  completed={note.completed} note={note.note} id={note.id} deleteNote={props.deleteNote} moveTo={props.moveTo} />
                  </Zoom>
                  <Spacing/>
                </Fragment>
              )
            )}
          </Column>
        </Row>
      </Container>
    </Column>
  );
};



interface INote {
  id: number,
  note: string,
  completed: boolean;
  sequenceName: string;
}




function App() {
  const [notesArray , setNotesArray] = useState<INote[]>([]);
  const [mode, setMode] = useState(false);

  const createListItem = (note: string):void =>{
    const id = new Date().getTime()
    setNotesArray([...notesArray, {id: id, note, completed: false, sequenceName: 'backlog' }])
  }

  const deleteAllItems = () =>{
    setNotesArray([]);

  }

  const deleteNote = (myID: number):void =>{ 
    const undeletedNotes = notesArray.filter((note)=> note.id !== myID);
    setNotesArray(undeletedNotes);
  }

  const moveTo = (myID: number, sequenceTarget: string):void =>{

    const noteToMove = notesArray.map((note: INote) => {
      if (myID === note.id) {
        note.sequenceName = sequenceTarget;
      }
      return note;
    })
    setNotesArray(noteToMove);
}

  
  const changeBox = (myID: number) => {
    setNotesArray(notesArray.map((note: INote)=>{
      if (note.id === myID){
        note.completed = !note.completed;
      }
      return note;
    }));
  }

  const changeMode = ()=>{
    setMode(!mode);
    console.log(mode); 
  }

  return (
    <Container> 
      <GlobalStyle mode={mode}/>
      <Row center={true}>
              <Column desktop={8}>
                <ListHeaderComponent createListItem={createListItem} deleteAllitems={deleteAllItems}/>
              </Column>
              

              <Column> 
                <ToggleButton mode={mode} changeMode={changeMode}/> 
              </Column>
            </Row>
      <Row>
        <NoteColumn title='Backlog' sequenceName='backlog' notesArray={notesArray} changeBox={changeBox} deleteNote={deleteNote} moveTo={moveTo} />
        <NoteColumn title='A Fazer' sequenceName='toDo' notesArray={notesArray} changeBox={changeBox} deleteNote={deleteNote} moveTo={moveTo} />
        <NoteColumn title='Fazendo' sequenceName='doing' notesArray={notesArray} changeBox={changeBox} deleteNote={deleteNote} moveTo={moveTo} />
        <NoteColumn title='Feito' sequenceName='done' notesArray={notesArray} changeBox={changeBox} deleteNote={deleteNote} moveTo={moveTo}/>          
        </Row>
      </Container>
      
  );
}

export default App;
