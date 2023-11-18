import './TaskList.css'
import { useState, useEffect } from 'react';

export default function TaskList() {

    // Declaracion de las notas
    const [notes, setNotes] = useState([]);

    // Recibimos los datos de las notas
    useEffect(() => {

      const sampleNotes = [
        { id: 1, content: 'Task 1', status: false },
        { id: 2, content: 'Task 2', status: true },
        { id: 3, content: 'Task 3', status: true },
        { id: 4, content: 'Task 4', status: false },
        { id: 5, content: 'Task 5', status: true }
      ];

      setNotes(sampleNotes);
    }, []);
  
    // Setea en el array anterior uno sin la nota
    // a la que le corresponde el id que le damos
    const removeNote = (id) => {
      setNotes(notes => notes.filter(note => note.id !== id));
    };
  
    // Itera el array de notas, y si la nota coincide con el id que le damos
    // hace una copia cuyo status es inverso. Si no, devuelve la misma nota.
    const toggleStatus = (id) => {
      setNotes(notes =>
        notes.map(note =>
          note.id === id ? { ...note, status: !note.status } : note
        )
      );
    };

  return (
    <>

      <div className='tasklist-container'>

        <ol>

        {notes.map((note) => (

          <li key={note.id}>
            
            <input
                type="checkbox"
                checked={note.status}
                onChange={() => toggleStatus(note.id)}
              />

            {note.content} - {note.status ? 'Completed' : 'Pending'}
            
            <button onClick={() => removeNote(note.id)}>X</button>
          </li>

        ))}
        
        </ol>

      </div>

    </>

  )
}
