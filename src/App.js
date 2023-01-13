import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import notes from './notes';
import CreateArea from './components/CreateArea';
import { useState } from 'react';

function App() {

 const [notes , setNotes ] = useState([])

 function addNote (newNote) {
   setNotes(prevNotes=>{
   return  [...prevNotes,newNote]
   })
 }

 function deleteNote(id) {
  setNotes(prevNotes=>{
    alert("Click ok to delete Your day")
   return prevNotes.filter((noteItem,index)=>{
     return index !== id;
    })
  })
 }

  return (
  <div>
       <header>
       <Header/>
       </header>
       <CreateArea
        onAdd={addNote} />
      {notes.map((noteItem,index) => {
       return (
        <Note 
        key = {index}
        id={index}
        title = {noteItem.title}
        content = {noteItem.content}
        onDelete= {deleteNote} />
        );
      })}
       <footer>
       <Footer/>
       </footer>
  </div>
  );
}

export default App;
