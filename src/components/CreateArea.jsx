import React, { useState } from "react";

function CreateArea(props) {
    const [note, setNote] = useState({title: "", content: ""});

    function changeText(event) {
        const { name, value } = event.target;
        setNote(prevNote => {
           return { ...prevNote, [name] : value}
        })
    }

    function newNote(event) {       
        props.addNote(note);
        setNote({title: "", content: ""})
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input onChange={changeText} name="title" placeholder="Title" value={note.title} />
                <textarea onChange={changeText} name="content" placeholder="Take a note..." rows="3" value={note.content} />
                <button onClick={newNote}>
                    Add
                </button>
            </form>
        </div>
    );
}

export default CreateArea;