import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {

    const [notes, setNotes] = useState([]);

    function addNote(note) {
        setNotes(prevNotes => {
            return [...prevNotes, note];
        })

    }

    function removeNote(id) {
        setNotes(prevNotes => {
           return prevNotes.filter((note, index) => index !== id
            )
        })
    }

    console.log(notes);
    return (
        <div>
            <Header />
            <CreateArea addNote={addNote} />
            {notes.map((note, index) => {   
                return <Note key={index} id={index} title={note.title} content={note.content} removeNote={removeNote} />
            })}

            <Footer />
        </div>
    );
}

export default App;