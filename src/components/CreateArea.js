import React, { useState } from 'react'

function CreateArea(props) {

    const [note , setNote] = useState({
        title:"",
        content:""
    });

    function handleChange (event) {
     const {name , value} = event.target;

     setNote (prevNote =>{
        return {
            ...prevNote,
            [name]:value
        };
     })

    }

  function submitNote(event) {
    props.onAdd(note)
    setNote ({
        title :"",
        content:""
    })
   event.preventDefault();
  }

  const currentYear = new Date().getFullYear();

  return (
    <div>
        <form>
        <input name="title" onChange={handleChange} value={note.title} placeholder="Date" />
        <textarea name="content" onChange={handleChange} value={note.content} placeholder="Tell me about your day..." rows="3" />
        <button onClick={submitNote}><i style={{color:"green"}} class="fa-regular fs 5 fa-plus"></i></button>
      </form>
    </div>
  )
}

export default CreateArea